import Headers from '@/Components/Headers';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Index({ auth }) {
  return (
    <div>
      <Head title="Users" />
      <Headers auth={auth} />
    </div>
  );
}
