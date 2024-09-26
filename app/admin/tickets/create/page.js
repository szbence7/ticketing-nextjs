"use client";

import React, { useState } from 'react';
import { Input, Button, Select, SelectItem, Textarea, Divider, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const [category, setCategory] = useState(new Set([]));
  const [tags, setTags] = useState(new Set([]));
  const [priority, setPriority] = useState(new Set([]));

  const categories = ["Technology", "Science", "Arts", "Sports"];
  const tagOptions = ["Trending", "Popular", "New", "Featured"];
  const priorityOptions = [
    { value: "Low", color: "success" },
    { value: "Medium", color: "warning" },
    { value: "High", color: "danger" },
    { value: "Urgent", color: "error" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ 
      name, 
      email, 
      company,
      subject, 
      issue, 
      category: Array.from(category)[0], 
      tags: Array.from(tags),
      priority: Array.from(priority)[0]
    });
  };

  return (
    <>
      <Card className="max-w-md mx-auto mt-8 p-8 bg-white rounded-xl shadow-md" style={{ minWidth: '60%' }}>
        <CardHeader>
          <p className="text-md font-semibold mb-4">Customer details</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4 px-8">
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
                className="w-full"
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                className="w-full"
              />
            </div>
            <Input
              label="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-8"
            />
            <Divider />
            <p className="text-md font-semibold mb-4">Ticket details</p>
          
            <Input
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              isRequired
              className="w-full px-8"
            />
            <Select
              label="Category"
              placeholder="Select a category"
              selectedKeys={category}
              onSelectionChange={setCategory}
              className="w-full px-8"
              isRequired
            >
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              label="Issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              isRequired
              className="w-full px-8"
            />
            <Select
              label="Tags"
              placeholder="Select tags"
              selectionMode="multiple"
              selectedKeys={tags}
              onSelectionChange={setTags}
              className="w-full px-8"
            >
              {tagOptions.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Priority"
              placeholder="Select priority"
              selectedKeys={priority}
              onSelectionChange={setPriority}
              className="w-full px-8"
              isRequired
            >
              {priorityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className={`bg-${option.color}-100`}>
                  {option.value}
                </SelectItem>
              ))}
            </Select>
            <Button type="submit" color="primary" className="w-full mt-4">
              Submit Ticket
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
