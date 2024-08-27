<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // create admin user
        User::factory()->create([
            'name' => 'Admin',
            'email' => '0dJqE@example.com',
            'is_admin' => true
        ]);

        $this->call(JobSeeder::class);
        $this->call(UserSeeder::class);
    }
}
