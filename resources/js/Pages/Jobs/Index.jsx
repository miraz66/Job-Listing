import Headers from '@/Components/Headers';
import Pagination from '@/Components/Pagination';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Index({ jobs }) {
  return (
    <div>
      <Head title="Job" />
      <Headers />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-10 relative">
        <div className="bg-white overflow-hidden shadow-md sm:rounded-lg border">
          <div className="flex justify-between p-10 relative">
            <h1 className="text-4xl font-bold">Job Listing</h1>

            <Link
              href="/jobs/create"
              className="bg-indigo-600  hover:bg-indigo-500  text-white font-bold py-2 px-4 rounded"
            >
              Add Job
            </Link>

            <p className="absolute right-2 top-2 text-xs text-gray-500">
              Page No: {jobs.current_page}
            </p>
          </div>
          <div className="mt-10">
            {}
            {jobs.data.map((job) => (
              <div
                key={job.id}
                className="border-y last:border-none hover:bg-gray-50"
              >
                <Link href={`/jobs/${job.id}`}>
                  <div className="p-10">
                    <h1 className="text-2xl font-bold pb-5">
                      {job.employer.name}
                    </h1>
                    <p className="text-gray-800 text-lg">
                      {' '}
                      {job.title}:{' '}
                      <span className="text-gray-500">
                        pays $ {job.salary} per years
                      </span>
                    </p>
                    <p className="mt-2 text-gray-500">{job.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Pagination jobs={jobs} />
        </div>

        <p className="absolute translate-x-1/2 -top-8 left-1/2 text-red-500">
          {jobs.message}
        </p>
      </div>
    </div>
  );
}
