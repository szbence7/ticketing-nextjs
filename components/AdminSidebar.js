import React from 'react';
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <nav className="admin-sidebar">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/orders">Orders</Link></li>
        <li><Link href="/analytics">Analytics</Link></li>
        <li><Link href="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
