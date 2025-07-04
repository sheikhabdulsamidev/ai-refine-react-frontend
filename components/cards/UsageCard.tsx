"use client";
import { MONTHLY_USAGE } from "@/utils/mock/data";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const UsageCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Usage</CardTitle>
        <CardDescription>View your usage and cost breakdown by month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>API Calls</TableHead>
              <TableHead>Storage (GB)</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MONTHLY_USAGE.map((usage, idx) => (
              <TableRow key={idx}>
                <TableCell>{usage.month}</TableCell>
                <TableCell>{usage.apiCalls.toLocaleString()}</TableCell>
                <TableCell>{usage.storage} GB</TableCell>
                <TableCell className="text-right font-medium">£{usage.cost.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsageCard;
