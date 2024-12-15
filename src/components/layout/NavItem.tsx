import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  count?: string;
  isActive?: boolean;
}

export function NavItem({ icon: Icon, label, count, isActive }: NavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
        isActive
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
      )}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="font-medium">{label}</span>
      {count && (
        <span className="ml-auto bg-gray-100 px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600">
          {count}
        </span>
      )}
    </div>
  );
}
