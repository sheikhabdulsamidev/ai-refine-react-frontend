import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CreditCard, MoreVertical } from "lucide-react";

interface UserCardProps {
  user: any;
  handleViewDetails: (user: any) => void;
}

const UserCard = (props: UserCardProps) => {
  const { user, handleViewDetails } = props;
  return (
    <Card key={user.id} className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-muted-foreground">{user.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{user.role}</Badge>
            <Badge className="bg-green-500/20 text-green-500">{user.status}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2">
            <span className="text-sm text-muted-foreground">Credits: </span>
            <span className="font-medium">{user.creditsUsed}</span>
            <span className="text-muted-foreground">/{user.totalCredits}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="secondary" onClick={() => handleViewDetails(user)}>
          View Details
        </Button>
        <Button variant="outline">
          <CreditCard className="h-4 w-4 mr-2" />
          Adjust Credits
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
