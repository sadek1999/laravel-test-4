<?php

use App\Enum\PermissionEnum;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UpvoteController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





Route::redirect('/', '/dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware(['verified'])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });

Route::get('user',[UserController::class,'index']);

    Route::resource('feature', FeatureController::class)
    ->except(['show','index'])
    ->middleware('can:'.PermissionEnum::ManageFeature->value);
    Route::get('feature',[FeatureController::class ,'index'])->name('feature.index');

    Route::get('feature/{feature}',[FeatureController::class,'show'])->name('feature.show');


    Route::post('feature/{feature}/upvote', [UpvoteController::class, 'store'])->name('upvote.store');
    Route::delete("upvote/{feature}", [UpvoteController::class, 'destroy'])->name('upvote.delete');

    Route::post('/feature/{feature}/comment', [CommentController::class, 'store'])->name('comment.store')->middleware('can:'.PermissionEnum::ManageComment->value);
    Route::delete('comment/{feature}', [CommentController::class, 'destroy'])->name('comment.destroy')->middleware('can:'.PermissionEnum::ManageComment->value);
});


require __DIR__ . '/auth.php';
