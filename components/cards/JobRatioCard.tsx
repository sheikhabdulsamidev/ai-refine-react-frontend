"use client";
import React from "react";
import { Card } from "../ui/card";
import { jobTypeData } from "@/utils/constants";
import { useRouter } from "next/navigation";

const JobRatioCard = () => {
  const router = useRouter();
  const totalJobs = 46;
  const otherValue = totalJobs - jobTypeData.reduce((sum, jt) => sum + jt.value, 0);
  const chartData =
    otherValue > 0
      ? [...jobTypeData, { label: "Other", value: otherValue, color: "#8884d8" }]
      : jobTypeData;
  const circumference = 2 * Math.PI * 25;
  let offset = 0;
  return (
    <Card className="dark-card cursor-pointer" onClick={() => router.push("/business-admin/jobs")}>
      <div className="p-5">
        <h3 className="font-semibold mb-3">Job Ratio</h3>
        <div className="flex items-center gap-8">
          {/* Dynamic Donut Chart SVG */}
          <svg width="140" height="140" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="25" fill="none" stroke="#222A44" strokeWidth="6" />
            {chartData.map((jt, i) => {
              const dash = (jt.value / totalJobs) * circumference;
              const dashArray = `${dash} ${circumference - dash}`;
              const el = (
                <circle
                  key={jt.label}
                  cx="28"
                  cy="28"
                  r="25"
                  fill="none"
                  stroke={jt.color}
                  strokeWidth="6"
                  strokeDasharray={dashArray}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dasharray 0.3s" }}
                />
              );
              offset -= dash;
              return el;
            })}
          </svg>
          {/* Legend */}
          <div>
            <div className="text-lg font-bold">{totalJobs}</div>
            <div className="text-xs text-muted-foreground mb-2">Totals Jobs</div>
            <div className="flex flex-col gap-1">
              {chartData.map((jt) => (
                <span key={jt.label} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: jt.color }}
                  ></span>
                  {jt.label} / {jt.value}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <button
                className="text-primary underline cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/business-admin/jobs");
                }}
              >
                More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobRatioCard;
