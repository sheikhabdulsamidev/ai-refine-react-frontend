"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contentTypes, jobStatus } from "@/utils/constants";
import { BusinessAdminInitialJobs } from "@/utils/mock/data";
import JobCard from "@/components/cards/JobCard";
import { JobDetailModal } from "@/components/dialog";
import Link from "next/link";
export default function JobPage() {
  const [jobs, setJobs] = useState(BusinessAdminInitialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState<(typeof BusinessAdminInitialJobs)[0] | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleViewDetails = (job: (typeof BusinessAdminInitialJobs)[0]) => {
    setSelectedJob(job);
    setShowDetailsDialog(true);
  };

  return (
    <div className="p-8 bg-[#070c1c] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white">My Jobs</h1>
          </div>
          <Button asChild className="bg-[#c1ff00] hover:bg-[#b2ee00] text-black font-semibold">
            <Link href="/business-admin/create">Create Job</Link>
          </Button>
        </div>

        <div className="bg-[#1a1e37] rounded-xl shadow-sm border border-[#282f52] mb-6">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#131729] border-[#282f52]"
                />
              </div>
              <div className="flex gap-4">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px] bg-[#131729] border-[#282f52]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1e37] border-[#282f52]">
                    <SelectItem value="all">All Statuses</SelectItem>
                    {jobStatus.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[180px] bg-[#131729] border-[#282f52]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1e37] border-[#282f52]">
                    <SelectItem value="all">All Types</SelectItem>
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} handleViewDetails={handleViewDetails} />
          ))}
        </div>

        <JobDetailModal
          showDetailsDialog={showDetailsDialog}
          setShowDetailsDialog={setShowDetailsDialog}
          selectedJob={selectedJob}
        />
      </div>
    </div>
  );
}
