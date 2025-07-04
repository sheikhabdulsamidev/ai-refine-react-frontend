import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { businessUsers } from "@/utils/mock/data";
import { User } from "lucide-react";

const DashboardUsersCard = () => {
  return (
    <Card className="dark-card">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Users</h3>
          <Link href="/business-admin/users">
            <Button variant="outline" size="sm">
              View/Manage Users
            </Button>
          </Link>
        </div>
        <div className="space-y-3 mt-4">
          {businessUsers.slice(0, 4).map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span>{user.name}</span>
              </div>
              <span className="font-medium">{user.creditsUsed} credits</span>
            </div>
          ))}
          {businessUsers.length > 4 && (
            <p className="text-xs text-muted-foreground text-center pt-2">
              + {businessUsers.length - 4} more users...
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DashboardUsersCard;
