// app/job/[id]/page.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Job {
  title: string;
  company: string;
  description: string;
}

const JobDetail = ({ params }: { params: { id: string } }) => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    axios.get(`/api/jobs/${params.id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error('Error fetching job details:', error));
  }, [params.id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-xl font-semibold">{job.company}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;
