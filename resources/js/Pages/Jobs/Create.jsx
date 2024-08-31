import Headers from '@/Components/Headers';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import clsx from 'clsx';

export default function Create() {
  const { data, setData, post, errors, isDirty } = useForm({
    title: '',
    salary: '',
    description: '',
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(data);

    post('/jobs');
  };

  return (
    <>
      <Head title="Post a Job" />
      <Headers />

      <div className="max-w-4xl mx-auto mt-28 px-4 sm:px-6 lg:px-10 border py-10 rounded-xl shadow-xl">
        <form onSubmit={submit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-bold">Post a new Job</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
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
                        onChange={(e) => setData('title', e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <InputError message={errors.title} className="mt-2" />
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
                        onChange={(e) => setData('salary', e.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <InputError message={errors.salary} className="mt-2" />
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
                      onChange={(e) => setData('description', e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />

                    <InputError message={errors.description} className="mt-2" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your job.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => window.history.back()}
            >
              Back
            </button>
            <button
              type="submit"
              className={clsx(
                'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm',
                !isDirty
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
              disabled={!isDirty}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
