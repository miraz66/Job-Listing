import { Link } from '@inertiajs/react';
import React from 'react';

export default function Show({ job }) {
  console.log(job);
  return (
    <div>
      <div className="py-12 h-screen">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-40">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg px-10 py-20 border">
            <div className="p-10">
              <h1 className="text-4xl font-bold pb-5">{job.employer.name}</h1>
              <p className="text-gray-800 text-xl">
                {' '}
                {job.title}:{' '}
                <span className="text-gray-500 text-sm">
                  Pays $ {job.salary} per years
                </span>
              </p>
              <p className="mt-2 mb-10 text-gray-500">{job.description}</p>

              <Link
                href={`/jobs/${job.id}/edit`}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
