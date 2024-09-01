import { Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Show({ job, authStatus }) {
  const { delete: destroy } = useForm();

  const handleDelete = () => {
    destroy(`/jobs/${job.id}`);
  };

  return (
    <>
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
              <p className="mt-2 text-gray-500">{job.description}</p>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                  <Link
                    href={`/jobs/${job.id}/edit`}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit Job
                  </Link>
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => window.history.back()}
                  >
                    Back
                  </button>
                </div>

                {authStatus && (
                  <button
                    onClick={handleDelete}
                    className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
