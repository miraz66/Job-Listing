import React from 'react';

export default function Show({ job }) {
  return (
    <div>
      <div className="py-12 h-screen">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-40">
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg px-10 py-20">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <div className="mt-10">
              <p className="pb-2">Salary : ${job.salary}</p>
              <p className="text-gray-500">{job.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
