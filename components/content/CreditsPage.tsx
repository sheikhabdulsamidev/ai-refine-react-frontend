"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CreditCard, Users, Download } from "lucide-react";
import {
  AvailablePlansCard,
  CurrentPlanCard,
  MonthlyTrendCard,
  TeamAllocationCard,
} from "@/components/cards";

export default function CreditsPage() {
  const totalCredits = 5250;
  const usedCredits = 3800;
  const remainingCredits = totalCredits - usedCredits;
  const creditPercentage = (usedCredits / totalCredits) * 100;

  return (
    <div className="p-8 gradient-bg min-h-screen">
      <div className="max-w-[1400px] mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Manage Credits</h1>
            <p className="text-muted-foreground mt-2">
              Monitor and manage your organization&apos;s credit usage
            </p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CurrentPlanCard
            totalCredits={totalCredits}
            usedCredits={usedCredits}
            remainingCredits={remainingCredits}
            creditPercentage={creditPercentage}
          />

          <MonthlyTrendCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TeamAllocationCard />
          <div className="space-y-6">
            <Card className="dark-card">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Purchase Credits
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Adjust Allocations
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Usage Report
                  </Button>
                </div>
              </div>
            </Card>

            <AvailablePlansCard />
          </div>
        </div>
      </div>
    </div>
  );
}
