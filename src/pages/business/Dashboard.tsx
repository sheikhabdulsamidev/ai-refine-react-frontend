import React from "react";
import UsageOverviewCard from "@/components/cards/CreditUsageOverviewCard";
import { DashboardOverviewCard, JobStatusCounterCard } from "@/components/cards";
import AllJobsTable from "@/components/table/AllJobsTable";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function BusinessDashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 gradient-bg min-h-screen">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <DashboardOverviewCard type="business" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AllJobsTable />
            </div>
            <div className="space-y-6">
              <JobStatusCounterCard type="business" />
              <UsageOverviewCard type="monthly-credit" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}