import React from "react";
import { Card } from "../ui/card";
import { pricingPlans } from "@/utils/mock/data";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";

const AvailablePlansCard = () => {
  return (
    <Card className="dark-card">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
        <div className="space-y-4">
          {pricingPlans.map((plan, index) => (
            <div key={index + 9999} className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{plan.name}</h3>
                <Badge variant="secondary">
                  {typeof plan.credits === "number" ? plan.credits : plan.credits}
                </Badge>
              </div>
              <p className="text-2xl font-bold mb-2">
                £{plan.price}
                <span className="text-sm text-muted-foreground">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex + 9999}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AvailablePlansCard;
