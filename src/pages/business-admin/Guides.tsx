import React from "react";
import { GuidesPage } from "@/components/content";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

const Guides = () => {
  return (
    <DashboardLayout>
      <GuidesPage
        type="business-admin"
        header="Admin Guides"
        description="Comprehensive guides to help you manage your AIRefine business account"
      />
    </DashboardLayout>
  );
};

export default Guides;