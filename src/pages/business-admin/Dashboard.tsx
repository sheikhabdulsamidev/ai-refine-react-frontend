import React from "react";
import {
  DashboardOverviewCard,
  JobRatioCard,
  JobStatusCounterCard,
  DashboardUsersCard,
} from "@/components/cards";
import { RecentJobTable } from "@/components/table";
import UsageOverviewCard from "@/components/cards/CreditUsageOverviewCard";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function BusinessAdminDashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 gradient-bg min-h-screen">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <DashboardOverviewCard type="business-admin" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobRatioCard />
            <DashboardUsersCard />
            <UsageOverviewCard type="credit-usage" />
          </div>
          <JobStatusCounterCard />
          <RecentJobTable />
        </div>
      </div>
    </DashboardLayout>
  );
}