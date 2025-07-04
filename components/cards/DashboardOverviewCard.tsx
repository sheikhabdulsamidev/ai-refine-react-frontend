import Image from "next/image";
import React from "react";

interface DashboardOverviewCardProps {
  type: "business" | "business-admin";
}

const DashboardOverviewCard = ({ type="business-admin" }: DashboardOverviewCardProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">Hello, Sarah</h1>
        {type === "business-admin" && <p className="text-muted-foreground mt-2">Business Admin Dashboard</p>}
      </div>
      <Image
        src="/fintech-logo.png"
        alt="Fintech Solutions Logo"
        width={200}
        height={100}
        className="h-14 w-auto"
      />
    </div>
  );
};

export default DashboardOverviewCard;
