"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const PaymentMethodCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Manage your payment methods and billing information.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="4" fill="#F7FAFC" />
                  <path
                    d="M22 11H10C9.44772 11 9 11.4477 9 12V20C9 20.5523 9.44772 21 10 21H22C22.5523 21 23 20.5523 23 20V12C23 11.4477 22.5523 11 22 11Z"
                    stroke="#4A5568"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15H23"
                    stroke="#4A5568"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-slate-500">Expires 04/2025</p>
              </div>
            </div>
            <div>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Default</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button>Add Payment Method</Button>
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="font-medium mb-4">Billing Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Billing Email</p>
                <p>billing@yourcompany.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Billing Address</p>
                <p>
                  42 High Street
                  <br />
                  Flat 3<br />
                  London, SW1A 1AA
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-4">
              Update Billing Information
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;
