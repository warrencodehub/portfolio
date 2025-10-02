"use client"

import * as React from "react"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Download, ExternalLink } from "lucide-react"

interface PdfViewerModalProps {
	trigger: React.ReactNode
	src: string
	title?: string
}

export function PdfViewerModal({ trigger, src, title = "Resume" }: PdfViewerModalProps) {
	const [open, setOpen] = React.useState(false)
	const [isMobile, setIsMobile] = React.useState(false)

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		}
		
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const handleViewPdf = () => {
		if (isMobile) {
			// On mobile, open PDF in new tab
			window.open(src, '_blank')
			setOpen(false)
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="sm:max-w-5xl w-[95vw] h-[80vh] p-2">
				{/* Wrapper to control vertical layout */}
				<div className="flex h-full min-h-0 flex-col gap-2">
					<div className="flex items-center justify-between">
						<DialogTitle className="text-base font-semibold">{title}</DialogTitle>
						<div className="flex items-center gap-2">
							<a href={src} download className="inline-flex" aria-label="Download PDF">
								<Button size="icon" variant="ghost" className="h-8 w-8">
									<Download className="h-4 w-4" />
								</Button>
							</a>
							<Button
								size="icon"
								variant="ghost"
								className="h-8 w-8"
								aria-label="Close"
								onClick={() => setOpen(false)}
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					</div>
					<div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-md bg-muted">
						{isMobile ? (
							// Mobile fallback: Show message and button to open in new tab
							<div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
								<div className="text-muted-foreground">
									<p className="mb-2 text-lg font-medium">PDF Viewer</p>
									<p className="text-sm">
										For the best viewing experience on mobile devices, 
										tap the button below to open the PDF in a new tab.
									</p>
								</div>
								<Button onClick={handleViewPdf} className="gap-2">
									<ExternalLink className="h-4 w-4" />
									Open PDF in New Tab
								</Button>
							</div>
						) : (
							// Desktop: Use iframe with enhanced PDF viewing
							<iframe
								src={`${src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
								className="h-full w-full rounded-sm bg-white border-0"
								title={title}
								loading="lazy"
							/>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default PdfViewerModal

