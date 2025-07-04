import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronRight, Users } from "lucide-react";
import { teamMembers } from "@/utils/mock/data";
import { Progress } from "../ui/progress";

const TeamAllocationCard = () => {
  return (
    <Card className="dark-card lg:col-span-2">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Team Allocation</h2>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Manage Team
          </Button>
        </div>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index + 9999} className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                </div>
                <Button variant="ghost" size="sm">
                  Adjust <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Usage</span>
                  <span>
                    {member.used} / {member.allocated}
                  </span>
                </div>
                <Progress value={(member.used / member.allocated) * 100} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TeamAllocationCard;
