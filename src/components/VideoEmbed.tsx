import type { IframeHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const aspectMap = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square"
} as const;

type AspectRatio = keyof typeof aspectMap;

export interface VideoEmbedProps
  extends Omit<IframeHTMLAttributes<HTMLIFrameElement>, "className"> {
  wrapperClassName?: string;
  aspect?: AspectRatio;
}

export function VideoEmbed({
  wrapperClassName,
  aspect = "16:9",
  src,
  title,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen = true,
  loading = "lazy",
  ...props
}: VideoEmbedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-ink-900/90 shadow-lift",
        aspectMap[aspect],
        wrapperClassName
      )}
    >
      <iframe
        src={src}
        title={title}
        allow={allow}
        allowFullScreen={allowFullScreen}
        loading={loading}
        className="absolute inset-0 h-full w-full border-0"
        {...props}
      />
    </div>
  );
}
