import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Edit({ job }) {
  // job edit
  const { data, setData, put, processing, errors } = useForm({
    title: job.title,
    salary: job.salary,
    description: job.description,
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/jobs/${job.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
      <form className="border p-10 rounded-xl shadow-xl" onSubmit={submit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-bold">Edit Job</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="Title"
                      name="Title"
                      type="text"
                      placeholder="Job Title"
                      value={data.title}
                      onChange={(e) => setData('title', e.target.value)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="text-red-500 text-xs mt-2">
                    {errors.title}
                  </span>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="Salary"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Salary
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="Salary"
                      name="Salary"
                      type="number"
                      placeholder="$10000"
                      value={data.salary}
                      onChange={(e) => setData('salary', e.target.value)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <span className="text-red-500 text-xs mt-2">
                    {errors.salary}
                  </span>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />

                  <span className="text-red-500 text-xs mt-2">
                    {errors.description}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Edit a few sentences about the job.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
