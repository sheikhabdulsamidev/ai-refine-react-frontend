"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
const DemoForm = () => {
  const router = useRouter();

  const handleBusinessLogin = () => {
    router.push("/business");
  };

  const handleEditorLogin = () => {
    router.push("/editor");
  };

  const handleBusinessAdminLogin = () => {
    router.push("/business-admin");
  };

 
  return (
    <div>
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#191942] px-2 text-muted-foreground">Test Accounts</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium">Business Admin Account</h3>
              <p className="text-sm text-muted-foreground">admin@airefine.com</p>
            </div>
            <Button variant="link" className="text-primary" onClick={handleBusinessAdminLogin}>
              Use Account
            </Button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium">Business Account</h3>
              <p className="text-sm text-muted-foreground">business@airefine.com</p>
            </div>
            <Button variant="link" className="text-primary" onClick={handleBusinessLogin}>
              Use Account
            </Button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium">Editor Account</h3>
              <p className="text-sm text-muted-foreground">editor@airefine.com</p>
            </div>
            <Button variant="link" className="text-primary" onClick={handleEditorLogin}>
              Use Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
