import Headers from '@/Components/Headers';
import Pagination from '@/Components/Pagination';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Index({ jobs }) {
  return (
    <div>
      <Head title="Job" />
      <Headers />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-10">
        <div className="bg-white overflow-hidden shadow-md sm:rounded-lg p-10">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Job Listing</h1>
            <p className="text-gray-500">Page No: {jobs.current_page}</p>
          </div>
          <div className="mt-10">
            <ul>
              {jobs.data.map((job) => (
                <li className="py-2" key={job.id}>
                  <Link
                    className="text-2xl text-blue-600"
                    href={`/jobs/${job.id}`}
                  >
                    Job: {job.title}
                  </Link>
                  <p>Salary: $ {job.salary}</p>
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Pagination jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
}
