// app/components/JobCard.tsx
interface JobCardProps {
    title: string;
    company: string;
    location: string;
  }
  
  const JobCard: React.FC<JobCardProps> = ({ title, company, location }) => {
    return (
      <div className="p-4 border rounded shadow-md">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-sm text-gray-400">{location}</p>
      </div>
    );
  };
  
  export default JobCard;
  