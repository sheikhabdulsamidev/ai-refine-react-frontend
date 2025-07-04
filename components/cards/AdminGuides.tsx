import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { PlayCircle } from "lucide-react";
interface AdminGuidesProps {
  guide: {
    id: string;
    title: string;
    description: string;
    readTime: string;
    icon: React.ElementType;
  };
}
const AdminGuides = ({ guide }: AdminGuidesProps) => {
  const Icon = guide.icon;
  return (
    <Card
      key={guide.id}
      className="bg-card border-border hover:border-primary/50 transition-colors"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
            <p className="text-muted-foreground">{guide.description}</p>

            <div className="flex items-center gap-6 mt-6">
              <p className="text-sm text-muted-foreground">Read time: {guide.readTime}</p>
              <Button className="gap-2">
                <PlayCircle className="h-4 w-4" />
                Watch Tutorial
              </Button>
              <Button variant="link" className="text-primary p-0">
                Read Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminGuides;
