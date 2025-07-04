import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";

interface UserDetailModalProps {
  showDetailsDialog: boolean;
  setShowDetailsDialog: (show: boolean) => void;
  selectedUser: any;
}
const UserDetailModal = (props: UserDetailModalProps) => {
  const { showDetailsDialog, setShowDetailsDialog, selectedUser } = props;
  return (
    <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
      <DialogContent className="max-w-3xl">
        {selectedUser && (
          <>
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-1">Name</h4>
                  <p>{selectedUser.name}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p>{selectedUser.email}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Role</h4>
                  <p>{selectedUser.role}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Status</h4>
                  <Badge className="bg-green-500/20 text-green-500">{selectedUser.status}</Badge>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Credit Overview</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Total Credits</h4>
                    <div className="text-2xl font-semibold">{selectedUser.totalCredits}</div>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Used Credits</h4>
                    <div className="text-2xl font-semibold">{selectedUser.creditsUsed}</div>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Remaining</h4>
                    <div className="text-2xl font-semibold">
                      {selectedUser.totalCredits - selectedUser.creditsUsed}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Active Jobs</h3>
                <p className="text-muted-foreground">
                  Currently working on {selectedUser.activeJobs} jobs
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailModal;
