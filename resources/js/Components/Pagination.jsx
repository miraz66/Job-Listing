import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from '@inertiajs/react';

export default function Pagination({ jobs }) {
  const currentPage = jobs.current_page;
  const lastPage = jobs.last_page;

  // Helper function to generate pagination links
  const generatePageNumbers = () => {
    const pages = [];
    if (lastPage <= 7) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(lastPage);
      } else if (currentPage > lastPage - 4) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = lastPage - 4; i <= lastPage; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(lastPage);
      }
    }
    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href={jobs.prev_page_url || '#'}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          href={jobs.next_page_url || '#'}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{jobs.from}</span> to{' '}
            <span className="font-medium">{jobs.to}</span> of{' '}
            <span className="font-medium">{jobs.total}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <Link
              href={jobs.prev_page_url || '#'}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </Link>
            {pages.map((page, index) =>
              page === 'ellipsis' ? (
                <span
                  key={index}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                >
                  ...
                </span>
              ) : (
                <Link
                  key={index}
                  href={`${jobs.path}?page=${page}`}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    page === currentPage
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  } focus:z-20 focus:outline-offset-0`}
                >
                  {page}
                </Link>
              )
            )}
            <Link
              href={jobs.next_page_url || '#'}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
