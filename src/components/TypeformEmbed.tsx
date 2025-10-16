import type { IframeHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TypeformEmbedProps
  extends Omit<IframeHTMLAttributes<HTMLIFrameElement>, "src"> {
  formId: string;
  inline?: boolean;
  wrapperClassName?: string;
}

export function TypeformEmbed({
  formId,
  inline = true,
  wrapperClassName,
  title = "Typeform",
  loading = "lazy",
  ...props
}: TypeformEmbedProps) {
  const src = inline
    ? `https://form.typeform.com/to/${formId}`
    : `https://typeform.com/to/${formId}`;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm",
        wrapperClassName
      )}
    >
      <iframe
        src={src}
        title={title}
        loading={loading}
        className="h-[600px] w-full border-0"
        allow="camera; microphone; autoplay; encrypted-media"
        {...props}
      />
    </div>
  );
}
