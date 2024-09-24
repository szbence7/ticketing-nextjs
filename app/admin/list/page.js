"use client";

import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Chip } from "@nextui-org/react";

const tickets = [
  { id: 1, name: "John Doe", email: "john@example.com", subject: "Login Issue", category: "Technology", status: "Open" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", subject: "Payment Problem", category: "Finance", status: "In Progress" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", subject: "Product Inquiry", category: "Sales", status: "Closed" },
  // Add more dummy data as needed
];

export default function TicketList() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(tickets.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return tickets.slice(start, end);
  }, [page, tickets]);

  return (
    <div className="w-full flex flex-col gap-4">
      <Table 
        aria-label="Ticket list table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>SUBJECT</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <Chip color={item.status === 'Open' ? 'primary' : item.status === 'In Progress' ? 'warning' : 'success'}>
                  {item.status}
                </Chip>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
