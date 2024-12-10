<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{

    public function store(Request $request ,Feature $feature)
    {
        $validateComment=$request->validate([
            'comment'=>'string|required'
        ]);
        $validateComment["user_id"]=Auth::id();
        $validateComment['feature_id']=$feature->id;
        // dd($validateComment);
        Comment::create($validateComment);
        return to_route('feature.show',$feature);


    }


    public function destroy(Comment $comment)
    {
        if($comment->id =!Auth::id()){
        abort(403);
        }

        $featureId=$comment->feature_id;
        $comment->delete();
        return to_route('feature.show',$featureId);

    }
}
