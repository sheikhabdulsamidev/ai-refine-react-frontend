"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Download, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MOCK_INVOICES } from "@/utils/mock/data";

const InvoiceCard = () => {
  const [expandedInvoice, setExpandedInvoice] = useState<string | null>(null);
  const toggleInvoiceDetails = (invoiceId: string) => {
    if (expandedInvoice === invoiceId) {
      setExpandedInvoice(null);
    } else {
      setExpandedInvoice(invoiceId);
    }
  };
  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real application, this would trigger a download of the invoice PDF
    console.log(`Downloading invoice ${invoiceId}`);
    alert(`Invoice ${invoiceId} is being downloaded`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>View and download your past invoices.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {MOCK_INVOICES.map((invoice) => (
            <div key={invoice.id} className="border rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#0E1232] hover:text-white group transition-colors"
                onClick={() => toggleInvoiceDetails(invoice.id)}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  <div>
                    <h3 className="font-medium">{invoice.id}</h3>
                    <p className="text-sm text-slate-500 group-hover:text-gray-200">
                      {format(invoice.date, "MMMM d, yyyy")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">£{invoice.amount.toFixed(2)}</p>
                    <span className="text-sm px-2 py-1 bg-[#A9FD2D] text-black rounded">
                      {invoice.status}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadInvoice(invoice.id);
                    }}
                    title="Download Invoice"
                    className="group-hover:text-white"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                  {expandedInvoice === invoice.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>

              {expandedInvoice === invoice.id && (
                <div className="p-4 border-t bg-[#000A26] text-white">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-white">Description</TableHead>
                        <TableHead className="text-right text-white">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoice.items.map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="text-white">{item.description}</TableCell>
                          <TableCell className="text-right text-white">
                            £{item.amount.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-bold text-white">Total</TableCell>
                        <TableCell className="text-right font-bold text-white">
                          £{invoice.amount.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
