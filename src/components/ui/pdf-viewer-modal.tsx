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
import { Maximize2, Minimize2, Download } from "lucide-react"

interface PdfViewerModalProps {
	trigger: React.ReactNode
	src: string
	title?: string
}

export function PdfViewerModal({ trigger, src, title = "Resume" }: PdfViewerModalProps) {
	const [open, setOpen] = React.useState(false)
	const [fullscreen, setFullscreen] = React.useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
					<DialogContent
						className={
							fullscreen
								? "max-w-[95vw] w-[95vw] h-[90vh] p-2"
								: "sm:max-w-5xl w-[95vw] h-[80vh] p-2"
						}
					>
						{/* Wrapper to control vertical layout */}
						<div className="flex h-full min-h-0 flex-col gap-2">
							<div className="flex items-center justify-between">
								<DialogTitle className="text-base font-semibold">{title}</DialogTitle>
								<div className="flex items-center gap-2">
									<a href={src} download className="inline-flex" aria-label="Download PDF">
										<Button size="icon" variant="ghost">
											<Download className="size-4" />
										</Button>
									</a>
									<Button
										size="icon"
										variant="ghost"
										aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
										onClick={() => setFullscreen((v) => !v)}
									>
										{fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
									</Button>
								</div>
							</div>
							<div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-md bg-muted">
								{/* Use iframe for broad browser support (mobile + desktop) */}
								<iframe
									src={`${src}#toolbar=0&navpanes=0&scrollbar=0`}
									className="h-full w-full rounded-sm bg-white border-0"
									title={title}
									loading="lazy"
								/>
							</div>
						</div>
					</DialogContent>
		</Dialog>
	)
}

export default PdfViewerModal

