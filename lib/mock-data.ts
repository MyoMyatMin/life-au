// Mock data for applications and news

// Define interfaces based on the WordPress types structure
export interface Application {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  advisor: string;
  developer_1: string;
  developer_2?: string;
  developer_3?: string;
  thumbnail_image?: string;
  images?: string[];
  category: "Campus" | "Productivity" | "Academic";
  url?: string;
}

export interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  short_description: string;
  thumbnail_image?: string;
  image?: string;
  category: string;
}

export const applications: Application[] = [
  {
    id: 1,
    name: "Stepture",
    short_description:
      "A productivity app for tracking daily activities and goals",
    long_description:
      "Stepture is a comprehensive productivity application designed to help users track their daily activities, set achievable goals, and maintain a healthy work-life balance. With intuitive interfaces and smart notifications, Stepture makes productivity management effortless.",
    thumbnail_image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?_gl=1*1lkqfkd*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE1ODEkajUxJGwwJGgw",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Productivity",
    developer_1: "John Smith",
    advisor: "Dr. Sarah Johnson",
    url: "https://life.au/stepture",
  },
  {
    id: 2,
    name: "TramStracker",
    short_description: "Real-time tram tracking for campus transportation",
    long_description:
      "TramStracker provides real-time information about tram arrivals and departures across the campus. Students can plan their journeys efficiently with live updates, route planning, and service disruption notifications.",
    thumbnail_image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?_gl=1*1lkqfkd*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE1ODEkajUxJGwwJGgw",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Campus",
    developer_1: "Emma Wilson",
    advisor: "Prof. Michael Brown",
  },
  {
    id: 3,
    name: "SJO",
    short_description: "Student Job Opportunities platform",
    long_description:
      "SJO connects students with part-time job opportunities both on and off campus. The platform features job matching algorithms, application tracking, and employer communication tools.",
    thumbnail_image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?_gl=1*1lkqfkd*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE1ODEkajUxJGwwJGgw",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Campus",
    developer_1: "Alex Chen",
    advisor: "Dr. Lisa Wang",
  },
  {
    id: 4,
    name: "AU Program Search",
    short_description: "Comprehensive academic program discovery tool",
    long_description:
      "AU Program Search helps prospective and current students discover academic programs that match their interests and career goals. Features include program comparisons, prerequisite tracking, and career outcome statistics.",
    thumbnail_image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?_gl=1*1lkqfkd*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE1ODEkajUxJGwwJGgw",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Academic",
    developer_1: "David Rodriguez",
    advisor: "Prof. Jennifer Lee",
  },
];

export const news: News[] = [
  {
    id: 1,
    title: "Revolutionary Tech Innovation Unveiled at AU",
    short_description:
      "Students present groundbreaking AI solutions at annual tech showcase",
    content: `The Annual Technology Showcase at AU revealed remarkable innovations from our computer science students. This year's event featured cutting-edge AI applications, sustainable technology solutions, and revolutionary mobile applications.

The highlight of the event was the presentation of several student-developed applications that are now being used across campus. These projects demonstrate the practical application of classroom learning and the innovative spirit of our student body.

From productivity apps to campus navigation tools, our students continue to push the boundaries of what's possible with technology. The showcase attracted attention from industry leaders and potential investors, highlighting the commercial viability of student innovations.

Faculty advisors praised the quality of work and the collaborative approach taken by students across different disciplines. The interdisciplinary nature of many projects showcased the importance of diverse perspectives in technology development.`,
    thumbnail_image:
      "https://images.pexels.com/photos/7972514/pexels-photo-7972514.jpeg?_gl=1*1hw96a8*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE4NTckajUzJGwwJGgw",
    image: "/placeholder.svg?height=400&width=800",
    date: "2025-01-15",
    category: "Technology",
  },
  {
    id: 2,
    title: "Outstanding Student Achievements in 2024",
    short_description:
      "Celebrating remarkable accomplishments across all departments",
    content: `The year 2024 marked exceptional achievements for AU students across various disciplines. From academic excellence to innovative research projects, our students have consistently demonstrated their commitment to learning and growth.

Notable achievements include multiple app launches, research publications, and successful startup ventures initiated by students. The collaborative environment at AU has fostered creativity and practical application of theoretical knowledge.

Industry partnerships have grown significantly, providing students with real-world experience and networking opportunities. Many students have secured internships and full-time positions with leading technology companies.

The university's commitment to hands-on learning and industry collaboration continues to prepare students for successful careers in their chosen fields.`,
    thumbnail_image:
      "https://images.pexels.com/photos/7972514/pexels-photo-7972514.jpeg?_gl=1*1hw96a8*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE4NTckajUzJGwwJGgw",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-12-20",
    category: "Achievements",
  },
  {
    id: 3,
    title: "Campus Infrastructure Updates for Spring Semester",
    short_description:
      "New facilities and technology upgrades enhance student experience",
    content: `Spring semester brings exciting infrastructure updates to the AU campus. New technology labs, updated library facilities, and improved transportation options are now available to students.

The technology upgrades include state-of-the-art development environments, enhanced Wi-Fi coverage, and new collaborative spaces designed for project work. These improvements support the hands-on learning approach that AU is known for.

Transportation improvements include the new TramStracker system, developed by our own students, which provides real-time information about campus transportation. This student-led initiative demonstrates the practical impact of academic projects.

Library renovations have created more study spaces and quiet zones, supporting diverse learning preferences. The new facilities are designed to accommodate both individual study and group collaboration.`,
    thumbnail_image:
      "https://images.pexels.com/photos/7972514/pexels-photo-7972514.jpeg?_gl=1*1hw96a8*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTQyODE1NzIkbzIkZzEkdDE3NTQyODE4NTckajUzJGwwJGgw",
    image: "/placeholder.svg?height=400&width=800",
    date: "2025-02-01",
    category: "Campus Updates",
  },
];

export const getApplicationsByCategory = (category: string) => {
  return applications.filter((app) => app.category === category);
};

export const getApplicationById = (id: number) => {
  return applications.find((app) => app.id === id);
};

export const getNewsById = (id: number) => {
  return news.find((item) => item.id === id);
};

export const getFeaturedApplications = (count: number = 3) => {
  return applications.slice(0, count);
};

export const getFeaturedNews = (count: number = 2) => {
  return news.slice(0, count);
};
