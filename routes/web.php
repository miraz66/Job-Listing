<?php

use App\Http\Controllers\ProfileController;
use App\Models\Employer;
use App\Models\Job;
use App\Models\Tag;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home/Index');
});

Route::get('/jobs', function () {
    $jobs = Job::with('employer', 'tags')->latest()->paginate(10);
    return inertia('Jobs/Index', [
        'jobs' => $jobs,
    ]);
});

Route::get('/jobs/create', function (Job $job) {

    return inertia('Jobs/Create');
});


Route::post('/jobs', function (Request $request) {
    // Validate the request data
    // $request->validate([
    //     'title' => 'required',
    //     'description' => 'required',
    //     'salary' => 'required|numeric',
    // ]);

    // Job::create(array_merge(
    //     $request->all(),
    //     ['employer_id' => 2]
    // ));

    Job::create(array_merge(
        $request->validate([
            'title' =>  'required',
            'description' => 'required',
            'salary' => 'required|numeric',
        ], [
            'title.required' => 'The job title is required.',
            'description.required' => 'The job description is required.',
            'salary.required' => 'The salary is required.',
        ]),
        ['employer_id' => 2]
    ));

    return redirect('/jobs');
});


Route::get('/jobs/{job}', function (Job $job) {
    $job->load('employer', 'tags');

    return inertia('Jobs/Show', [
        'job' => $job,
    ]);
});

Route::get('/jobs/{job}/edit', function (Job $job) {
    return inertia('Jobs/Edit', [
        'job' => $job,
    ]);
});

Route::put('/jobs/{job}', function (Job $job, Request $request) {
    $job = Job::findOrFail($job->id);

    $job->update($request->validate([
        'title' =>  'required',
        'description' => 'required',
        'salary' => 'required|numeric',
    ]));

    return redirect('/jobs' . '/' . $job->id);
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
