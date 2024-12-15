import { cn } from "../../lib/utils";
import logo from "@/assets/logomark.svg";
interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <span className="font-semibold text-gray-900">Untitled UI</span>
    </div>
  );
}
