"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { getStatusStyle } from "@/utils/globals";
import Link from "next/link";
import { Button } from "../ui/button";
import { recentJobs } from "@/utils/mock/data";

const RecentJobTable = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredJobs = recentJobs.filter(
    (job) => statusFilter === "all" || job.status === statusFilter
  );
  return (
    <Card className="dark-card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Jobs</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter by status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] bg-muted">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Submitted to Network">Submitted to Network</SelectItem>
                <SelectItem value="With Editor">With Editor</SelectItem>
                <SelectItem value="Ready for Review">Ready for Review</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-5 text-sm text-muted-foreground pb-2 font-medium">
            <div>Job Title</div>
            <div>Submitted By</div>
            <div>Type</div>
            <div>Status</div>
            <div className="text-right">Credits</div>
          </div>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="grid grid-cols-5 text-sm py-3 border-t border-border items-center"
              >
                <div className="font-medium text-white">{job.title}</div>
                <div>{job.user}</div>
                <div>{job.type}</div>
                <div>
                  <Badge className={getStatusStyle(job.status)}>{job.status}</Badge>
                </div>
                <div className="text-right font-medium text-primary">{job.credits}</div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">
              No jobs match the current filter.
            </p>
          )}
        </div>
        <Link href="/business-admin/jobs">
          <Button variant="link" className="text-primary mt-4">
            View All Jobs
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default RecentJobTable;
