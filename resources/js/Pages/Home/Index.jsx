import Headers from '@/Components/Headers';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Index() {
  return (
    <div>
      <Head title="Home" />
      <Headers />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You're logged in!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
