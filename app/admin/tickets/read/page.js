"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function ViewTicket() {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Fetch a single ticket from your API
    // This is a placeholder. Replace with actual API call
    const fetchTicket = async () => {
      // const response = await fetch('/api/tickets/1');
      // const data = await response.json();
      // setTicket(data);
      
      // Placeholder data
      setTicket({
        id: 1,
        name: "John Doe",
        subject: "Technical Issue",
        category: "Technology",
        status: "Open",
        description: "I'm having trouble accessing my account. The login page keeps refreshing without letting me in.",
        createdAt: "2023-06-15T10:30:00Z"
      });
    };

    fetchTicket();
  }, []);

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">View Ticket</h1>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Ticket #{ticket.id}</p>
            <p className="text-small text-default-500">{ticket.name}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p><strong>Subject:</strong> {ticket.subject}</p>
          <p><strong>Category:</strong> {ticket.category}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
          <Divider className="my-2"/>
          <p><strong>Description:</strong></p>
          <p>{ticket.description}</p>
        </CardBody>
      </Card>
    </div>
  );
}
