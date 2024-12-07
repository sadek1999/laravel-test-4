<?php

namespace App\Enum;

enum PermissionEnum:string
{
    case ManageUser='manageUser';
    case ManageFeature='manageFeature';
    case ManageComment='manageComment';
    case UpvoteDownvote='upvoteDownvote';
    


}
