<?php

namespace App\Enum;

use PHPUnit\Util\Exporter;

  enum PermissionEnum:string
{
    case ManageUser='manageUser';
    case ManageFeature='manageFeature';
    case ManageComment='manageComment';
    case UpvoteDownvote='upvoteDownvote';



}


