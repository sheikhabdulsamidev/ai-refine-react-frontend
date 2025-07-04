import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
interface UsageOverviewCardProps {
  type: "monthly-credit" | "credit-usage";
}
const UsageOverviewCard = ({ type }: UsageOverviewCardProps ) => {
    const totalCredits = 2500;
    const remainingCredits = 1930;
    const creditPercentage = (remainingCredits / totalCredits) * 100;
  return (
    <Card className="dark-card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className={cn("font-semibold", type === "monthly-credit" && "text-xl")}>
            {type === "monthly-credit" ? "Monthly Credit Overview" : "Credit Usage Overview"}
          </h3>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48 -rotate-90 transform">
              <circle
                className="text-[#191C44] stroke-current"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="96"
                cy="96"
              />
              <circle
                className="text-[#ABFF2E] stroke-current"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="96"
                cy="96"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - creditPercentage / 100)}`}
              />
            </svg>
            <div className="absolute text-center">
              <div className="text-2xl font-bold">1930</div>
              <div className="w-12 h-px bg-white mx-auto my-2"></div>
              <div className="text-lg text-muted-foreground">2500</div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Credits renew on <span className="text-[#ABFF2E]">27/04/2025</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UsageOverviewCard;
