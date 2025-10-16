import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  bleed?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  children: ReactNode;
}

export function Section({
  as: Component = "section",
  bleed = false,
  className,
  containerProps,
  children,
  ...props
}: SectionProps) {
  const { className: containerClassName, ...restContainerProps } = containerProps ?? {};

  return (
    <Component className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      <Container
        className={cn(bleed ? "max-w-none px-0" : undefined, containerClassName)}
        {...restContainerProps}
      >
        {children}
      </Container>
    </Component>
  );
}
