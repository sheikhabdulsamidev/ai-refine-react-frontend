import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface JobDetailModalProps {
  showDetailsDialog: boolean;
  setShowDetailsDialog: (show: boolean) => void;
  selectedJob: any;
}
const JobDetailModal = ({
  showDetailsDialog,
  setShowDetailsDialog,
  selectedJob,
}: JobDetailModalProps) => {
  return (
    <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#1a1e37] border-[#282f52] text-white">
        {selectedJob && (
          <>
            <DialogHeader>
              <DialogTitle className="text-white">{selectedJob.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Description</h3>
                <p className="text-muted-foreground">{selectedJob.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-1 text-gray-300">Client</h4>
                  <p className="text-white">{selectedJob.client}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-300">Payment</h4>
                  <p className="text-[#c1ff00] font-semibold">{selectedJob.credits} credits</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-300">Type</h4>
                  <p className="text-white">{selectedJob.type}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-300">Deadline</h4>
                  <p className="text-white">{selectedJob.deadline}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Prompt</h3>
                <div className="bg-[#131729] rounded-lg p-4">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-gray-300">
                    {selectedJob.prompt}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Generated Content</h3>
                <div className="bg-[#131729] rounded-lg p-4">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-gray-300">
                    {selectedJob.generatedContent || "No content generated yet"}
                  </pre>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailModal;
