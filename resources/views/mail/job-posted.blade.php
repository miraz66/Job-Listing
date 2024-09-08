<h1>{{ $job->title }}</h1>

<p>
    Congratulations! Your job is now live on our website.
</p>

<p>
    <a href="{{url('/jobs') . '/' . $job->id }}">View your job listing.</a>
</p>
