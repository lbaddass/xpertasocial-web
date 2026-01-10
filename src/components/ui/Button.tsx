import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  iconRight?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moneyGreen disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-techWhite text-grafito px-6 py-3 shadow-glow-money hover:shadow-glow-money-strong hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/20 text-techWhite px-6 py-3 hover:border-moneyGreen hover:text-moneyGreen hover:shadow-glow-money",
  ghost: "text-techWhite px-4 py-2 hover:text-moneyGreen",
};

export const Button = ({
  variant = "primary",
  children,
  iconRight,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
      {iconRight && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </button>
  );
};

export default Button;
