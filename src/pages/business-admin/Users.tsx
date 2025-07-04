import { UserPage } from "@/components/content";
import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

const Users = () => {
  return (
    <DashboardLayout>
      <UserPage />
    </DashboardLayout>
  );
};

export default Users;