import React, { ReactNode, HTMLAttributes } from "react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Carousel({ children, className = "", ...rest }: CarouselProps) {
  return (
    <div className={`overflow-hidden ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CarouselContent({ children, className = "", ...rest }: CarouselProps) {
  return (
    <div className={`flex gap-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CarouselItem({ children, className = "", ...rest }: CarouselProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
