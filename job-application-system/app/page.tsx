// app/page.tsx
"use client"; 

import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './components/JobCard';

// 定义 Job 类型
interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
}

const Home = () => {
  // 使用 Job[] 类型
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {jobs.map((job) => (
          <JobCard
            key={job._id}  // 现在 TypeScript 知道 job 有 _id 属性
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
