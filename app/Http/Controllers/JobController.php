<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = Job::with('employer', 'tags')->latest()->paginate(10);

        return inertia('Jobs/Index', [
            'jobs' => $jobs,
            'auth' => Auth::check(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Jobs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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

        return redirect('/jobs')->with('status', 'Job created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        $job->load('employer', 'tags');

        return inertia('Jobs/Show', [
            'job' => $job,
            'auth' => Auth::user(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        Gate::authorize('edit-job', $job);

        return inertia('Jobs/Edit', [
            'job' => $job
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Job $job)
    {
        $job->update($request->validate([
            'title' =>  'required',
            'description' => 'required',
            'salary' => 'required|numeric',
        ]));

        return redirect('/jobs' . '/' . $job->id)->with('status', 'Job updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        Gate::authorize('edit-job', $job);

        $job->delete();

        return redirect('/jobs')->with('status', 'Job deleted successfully');
    }
}
