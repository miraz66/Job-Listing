<?php

use App\Http\Controllers\ProfileController;
use App\Models\Job;
use App\Models\Tag;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home/Index');
});

Route::get('/jobs', function () {
    return inertia('Jobs/Index', [
        //paginate(10)
        'jobs' => Job::paginate(10),
        'tags' => Tag::all(),
    ]);
});

Route::get('/jobs/{job}', function (Job $job) {
    return inertia('Jobs/Show', [
        'job' => $job,
    ]);
});

Route::get('/contact', function () {
    return inertia('Contact/Index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
