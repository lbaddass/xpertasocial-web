import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/20 backdrop-blur-md transition-all duration-300 hover:border-techCyan/50 hover:shadow-glow-red ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
