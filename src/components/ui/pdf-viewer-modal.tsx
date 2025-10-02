"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PdfViewerModalProps {
  trigger: React.ReactNode;
  pdfUrl: string;
  title?: string;
  description?: string;
}

export function PdfViewerModal({
  trigger,
  pdfUrl,
  title = "Resume",
  description = "View and download my resume",
}: PdfViewerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Warren_Miraflor_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-full h-[85vh] p-0 gap-0">
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2 h-8 px-3"
            >
              <Download className="h-4 w-4" />
              DOWNLOAD
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleOpenInNewTab}
              className="flex items-center gap-2 h-8 px-3"
            >
              <ExternalLink className="h-4 w-4" />
              Open
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-4">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`}
              className="w-full h-full border-0"
              title={title}
              style={{ 
                minHeight: "600px",
                background: "white"
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}