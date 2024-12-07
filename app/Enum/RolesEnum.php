<?php

namespace App\Enum;

enum RolesEnum:string
{
     case User='user';
     case Admin='admin';
     case Commenter='commenter';

     public static function labels()
     { return [
        self::Admin->value=>'admin',
        self::User->value=>'user',
        self::Commenter->value=>'commenter',
     ];

     }

     public function label()
     {

     return match($this){
        self::Admin=>'admin',
        self::Commenter=>'commenter',
        self::User=>'user',
     };
     }
}
