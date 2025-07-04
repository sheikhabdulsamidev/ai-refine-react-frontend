import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { businessJobs } from "@/utils/mock/data";

const AllJobsTable = () => {
  const sortedJobs = [...businessJobs].sort((a, b) => {
    const dateA = new Date(a.deadline.split("/").reverse().join("-")).getTime();
    const dateB = new Date(b.deadline.split("/").reverse().join("-")).getTime();
    return dateA - dateB;
  });
  return (
    <Card className="dark-card">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">All Jobs</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-3 text-sm text-muted-foreground pb-2">
            <div>Work Type</div>
            <div>Status</div>
            <div>Deadline</div>
          </div>
          {sortedJobs.map((job, i) => (
            <div key={i} className="grid grid-cols-3 text-sm py-2 border-t border-border">
              <div>{job.workType}</div>
              <div>
                <span
                  className={`status-badge ${
                    job.status === "Ready for Review"
                      ? "status-review"
                      : job.status === "Submitted to Network"
                      ? "status-submitted"
                      : job.status === "With Editor"
                      ? "status-with-editor"
                      : job.status === "Draft"
                      ? "status-draft"
                      : "status-completed"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <div>{job.deadline}</div>
            </div>
          ))}
        </div>
        <Link href="/business/jobs">
          <Button variant="link" className="text-primary mt-4">
            View More
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AllJobsTable;
