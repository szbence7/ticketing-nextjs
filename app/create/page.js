"use client";

import React, { useState } from 'react';
import { Input, Button, Select, SelectItem, Textarea } from "@nextui-org/react";

export default function CreateForm() {
  const [step, setStep] = useState(1);
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Submit a ticket</h1>
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s === step ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {s}
                </div>
                <div className={`mt-2 text-sm ${s === step ? 'text-blue-500 font-semibold' : 'text-gray-500'}`}>
                  Step {s}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
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
              <Input
                label="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full"
              />
              <Button onClick={nextStep} color="primary" className="w-full mt-4">
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Select
                label="Category"
                placeholder="Select a category"
                selectedKeys={category}
                onSelectionChange={setCategory}
                className="w-full"
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
                className="w-full"
              />
              <Select
                label="Tags"
                placeholder="Select tags"
                selectionMode="multiple"
                selectedKeys={tags}
                onSelectionChange={setTags}
                className="w-full"
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
                className="w-full"
                isRequired
              >
                {priorityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className={`bg-${option.color}-100`}>
                    {option.value}
                  </SelectItem>
                ))}
              </Select>
              <div className="flex justify-between mt-4">
                <Button onClick={prevStep} color="secondary" className="w-1/2 mr-2">
                  Previous
                </Button>
                <Button onClick={nextStep} color="primary" className="w-1/2 ml-2">
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-center text-gray-600">Step 3 is empty for now.</p>
              <div className="flex justify-between mt-4">
                <Button onClick={prevStep} color="secondary" className="w-1/2 mr-2">
                  Previous
                </Button>
                <Button type="submit" color="primary" className="w-1/2 ml-2">
                  Submit
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
