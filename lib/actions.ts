"use server";

import { delay } from ".";

export const getJobsResult = async () => {
  await delay(1000);
  return [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120,000 - $160,000",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCo",
      location: "New York, NY",
      salary: "$100,000 - $130,000",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignHub",
      location: "Remote",
      salary: "$80,000 - $110,000",
      type: "Contract",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataDrive",
      location: "Boston, MA",
      salary: "$90,000 - $120,000",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "GrowthGenius",
      location: "Chicago, IL",
      salary: "$60,000 - $80,000",
      type: "Part-time",
    },
  ];
};
