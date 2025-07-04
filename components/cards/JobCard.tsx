import { Clock, Send } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    client: string;
    clientLogo: string;
    description: string;
    deadline: string;
    type: string;
    credits: number;
    status: string;
    prompt: string;
    generatedContent: string;
  };
  handleViewDetails: (job: JobCardProps["job"]) => void;
}
const JobCard = ({ job, handleViewDetails }: JobCardProps) => {
  return (
    <div
      key={job.id}
      className="bg-[#1a1e37] p-6 rounded-lg border border-[#282f52] hover:border-[#c1ff00]/50 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-white">{job.title}</h3>
            <Badge
              variant={
                job.status === "Submitted to Network"
                  ? "secondary"
                  : job.status === "Draft"
                  ? "outline"
                  : job.status === "With Editor"
                  ? "secondary"
                  : "outline"
              }
              className={`${
                job.status === "Submitted to Network"
                  ? "bg-orange-500/20 text-orange-400"
                  : job.status === "Draft"
                  ? "bg-blue-500/20 text-blue-400"
                  : job.status === "With Editor"
                  ? "bg-purple-500/20 text-purple-400"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {job.status}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">{job.description}</p>
        </div>
        <div className="text-right">
          <img src="/fintech-logo.png" alt="Fintech" className="h-8 w-auto object-contain mb-2" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Due: {job.deadline}</span>
        </div>
        <Badge variant="secondary" className="bg-[#282f52] text-gray-300">
          {job.type}
        </Badge>
      </div>

      <div className="mt-4 flex gap-2">
        <Button
          variant="outline"
          className="border-[#282f52] hover:bg-[#282f52] text-white"
          onClick={() => handleViewDetails(job)}
        >
          View Details
        </Button>
        {job.status === "Draft" && (
          <Button className="bg-[#c1ff00] hover:bg-[#b2ee00] text-black font-semibold">
            <Send className="h-4 w-4 mr-2" /> Submit to Network
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
