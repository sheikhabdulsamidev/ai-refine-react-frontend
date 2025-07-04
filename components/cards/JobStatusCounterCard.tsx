import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { jobStatusCounts } from "@/utils/constants";
import { getStatusStyle } from "@/utils/globals";
const jobItems = [
  { label: "Open Jobs", count: 8, color: "text-blue-500" },
  { label: "Ready for Review", count: 3, color: "text-yellow-500" },
  { label: "With Editor", count: 3, color: "text-green-500" },
  { label: "Drafts", count: 2, color: "text-gray-500" },
];

interface JobStatusCounterCardProps {
  type?: "business" | "business-admin";
}

const JobStatusCounterCard = ({ type = "business-admin" }: JobStatusCounterCardProps) => {
  return (
    <>
      {type === "business-admin" && (
        <Card className="dark-card">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Job Status Counter</h3>
              <Link href="/business-admin/jobs?status=all">
                <Button variant="outline" size="sm">
                  View All Jobs
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {jobStatusCounts.map((statusCount) => (
                <Link
                  key={statusCount.status}
                  href={`/business-admin/jobs?status=${statusCount.status.replace(/ /g, "-")}`}
                >
                  <div className="bg-muted p-4 rounded-lg text-center hover:bg-muted/80 transition-colors">
                    <div className="text-3xl font-bold text-primary">{statusCount.count}</div>
                    <div
                      className={`text-xs font-medium mt-1 ${getStatusStyle(
                        statusCount.status
                      )} px-2 py-0.5 rounded-full inline-block`}
                    >
                      {statusCount.status}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      )}
      {type === "business" && (
        <Card className="dark-card">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Job Counter</h2>
            <div className="grid grid-cols-2 gap-4">
              {jobItems.map((item, index) => (
                <div key={index + 1} className="bg-muted p-4 rounded-lg text-center">
                  <div className={`text-3xl font-bold ${item.color}`}>{item.count}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default JobStatusCounterCard;
