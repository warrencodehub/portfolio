"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const pdfViewerUrl = isMobile 
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`
    : `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent 
        className={cn(
          "p-0 gap-0",
          isFullscreen 
            ? "max-w-full w-screen h-screen m-0 rounded-none" 
            : "max-w-4xl w-full h-[90vh]"
        )}
      >
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b shrink-0">
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="flex items-center gap-2 h-8 px-3"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </Button>
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
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-2 md:p-4 overflow-hidden">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
            {isMobile ? (
              <iframe
                src={pdfViewerUrl}
                className="w-full h-full border-0"
                title={title}
                style={{ 
                  minHeight: "400px",
                  background: "white"
                }}
                allow="autoplay"
              />
            ) : (
              <iframe
                src={pdfViewerUrl}
                className="w-full h-full border-0"
                title={title}
                style={{ 
                  minHeight: isFullscreen ? "calc(100vh - 80px)" : "600px",
                  background: "white"
                }}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}