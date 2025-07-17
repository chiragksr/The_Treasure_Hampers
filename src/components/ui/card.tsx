import React, { ReactNode, HTMLAttributes } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={`bg-white rounded-lg ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
