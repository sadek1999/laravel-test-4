<?php

namespace Database\Seeders;

use App\Enum\PermissionEnum;
use App\Enum\RolesEnum;
use App\Models\Feature;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $userRole=Role::create(['name'=>RolesEnum::User]);
        $adminRole=Role::create(['name'=>RolesEnum::Admin]);
        $commenterRole=Role::create(['name'=>RolesEnum::Commenter]);

        $manageUserPermission=Permission::create(['name'=>PermissionEnum::ManageUser]);
        $manageCommentPermission=Permission::create(['name'=>PermissionEnum::ManageComment]);
        $manageFeaturePermission=Permission::create(['name'=>PermissionEnum::ManageFeature]);
        $upvoteDownvotePermission=Permission::create(['name'=>PermissionEnum::UpvoteDownvote]);

        $userRole->syncPermissions([$upvoteDownvotePermission]);
        $commenterRole->syncPermissions([$manageCommentPermission,$upvoteDownvotePermission]);
        $adminRole->syncPermissions([$manageCommentPermission,$manageFeaturePermission,$manageUserPermission,$upvoteDownvotePermission]);
        User::factory()->create([
            'name' => 'User',
            'email' => 'user@example.com',
        ])->assignRole($userRole);
        User::factory()->create([
            'name' => 'Commenter',
            'email' => 'commenter@example.com',
        ])->assignRole($commenterRole);
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ])->assignRole($adminRole);
    Feature::factory(20)->create();
    }
}


