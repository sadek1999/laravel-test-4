<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;



class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $currentUserId=Auth::id();
        $data=Feature::latest()
        ->withCount(['upvote as upvote_count' => function ($query) {
            $query->select(DB::raw('SUM(CASE WHEN upvote = 1 THEN 1 ELSE -1 END)'));
        }])
        ->withExists([
            'upvote as user_has_upvoted' => function ($query) use ($currentUserId) {
                $query->where('user_id', $currentUserId)
                    ->where('upvote', 1);
            },
            'upvote as user_has_downvoted' => function ($query) use ($currentUserId) {
                $query->where('user_id', $currentUserId)
                    ->where('upvote', 0);
            }
        ])
                 ->paginate();


        return Inertia::render('Feature/index'
        ,[
            'features'=>FeatureResource::collection($data)
        ]
        ) ;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    return Inertia::render('Feature/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'string',
            'description'=>'string',

        ]);
        $validateData['user_id']=Auth::id();

        Feature::create($validateData);
        return to_route(back());
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        return Inertia::render('Feature/show',[
            'feature'=> new FeatureResource($feature)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
        return Inertia::render('Feature/edit',[
            'feature'=>New FeatureResource($feature)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        $data=$request->validate([
            'name'=>'required |string',
            'description'=>'string'
        ]);
        $feature->update($data);
        return to_route('feature.index')->with('success','successfully update the feature');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)

    {

        $feature->delete();
        return to_route('feature.index')->with('success','successfully dele the feature');
    }
}
