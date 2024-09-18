import { delay } from "@/lib";

export const getSavedJobs = async (): Promise<
  savedJobCardType[] | undefined
> => {
  try {
    await delay(1000);
    return [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp",
        location: "San Francisco, CA",
        salary: "$120,000 - $160,000",
        type: "Full-time",
        dateAdded: "2023-06-15",
      },
      {
        id: 2,
        title: "Product Manager",
        company: "InnovateCo",
        location: "New York, NY",
        salary: "$100,000 - $130,000",
        type: "Full-time",
        dateAdded: "2023-06-14",
      },
      {
        id: 3,
        title: "UX Designer",
        company: "DesignHub",
        location: "Remote",
        salary: "$80,000 - $110,000",
        type: "Contract",
        dateAdded: "2023-06-13",
      },
      {
        id: 4,
        title: "Data Scientist",
        company: "DataDrive",
        location: "Boston, MA",
        salary: "$90,000 - $120,000",
        type: "Full-time",
        dateAdded: "2023-06-12",
      },
      {
        id: 5,
        title: "Marketing Specialist",
        company: "GrowthGenius",
        location: "Chicago, IL",
        salary: "$60,000 - $80,000",
        type: "Part-time",
        dateAdded: "2023-06-11",
      },
    ];
  } catch (error) {}
};
