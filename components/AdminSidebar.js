import React from 'react';
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <nav className="bg-gray-100 w-full h-auto md:h-screen fixed md:static top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0">
      <ul className="space-y-2 p-4 w-full">
        <li><Link href="/tickets" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 w-full">Tickets</Link></li>
        <li><Link href="/categories" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 w-full">Categories</Link></li>
        <li><Link href="/knowledge-base" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 w-full">Knowledge base</Link></li>
        <li><Link href="/tools" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 w-full">Tools</Link></li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
