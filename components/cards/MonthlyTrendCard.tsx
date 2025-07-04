import React from "react";
import { Card } from "../ui/card";
import { monthlyUsage } from "@/utils/mock/data";
import { ArrowUpRight } from "lucide-react";

const MonthlyTrendCard = () => {
  return (
    <Card className="dark-card">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Trend</h2>
        <div className="space-y-4">
          {monthlyUsage.map((month, index) => (
            <div key={index + 9999} className="flex items-center justify-between">
              <span className="text-sm">{month.month}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{month.credits}</span>
                {index === monthlyUsage.length - 1 && (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MonthlyTrendCard;
