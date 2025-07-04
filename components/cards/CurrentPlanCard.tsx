import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface CurrentPlanCardProps {
  totalCredits: number;
  usedCredits: number;
  remainingCredits: number;
  creditPercentage: number;
}

const CurrentPlanCard = (props: CurrentPlanCardProps) => {
  const { totalCredits, usedCredits, remainingCredits, creditPercentage } = props;
  return (
    <Card className="dark-card lg:col-span-2">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge className="bg-primary/20 text-primary mb-2">Silver</Badge>
            <p className="text-3xl font-bold">
              £{5000}
              <span className="text-sm text-muted-foreground">/month</span>
            </p>
          </div>
          <Button>Upgrade Plan</Button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Credits Usage</span>
              <span>
                {usedCredits} / {totalCredits}
              </span>
            </div>
            <Progress value={creditPercentage} className="h-2" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Credits</p>
              <p className="text-2xl font-bold mt-1">{totalCredits}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Used Credits</p>
              <p className="text-2xl font-bold mt-1">{usedCredits}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-2xl font-bold mt-1">{remainingCredits}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentPlanCard;
