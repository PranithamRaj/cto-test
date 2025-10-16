import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  eyebrow?: string;
  align?: "left" | "center" | "right";
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-4xl font-semibold sm:text-5xl lg:text-6xl",
  2: "text-3xl font-semibold sm:text-4xl lg:text-5xl",
  3: "text-2xl font-semibold sm:text-3xl lg:text-4xl",
  4: "text-xl font-semibold sm:text-2xl",
  5: "text-lg font-semibold",
  6: "text-base font-semibold"
};

export function Heading({
  level = 2,
  eyebrow,
  align = "left",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = (`h${level}` as ElementType);

  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        align === "right" && "text-right"
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-forest-500">
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "font-display leading-tight text-ink-900",
          levelStyles[level],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
}
