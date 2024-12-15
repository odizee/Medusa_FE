import {
  BarChart2,
  CheckSquare,
  Home,
  Layers,
  LifeBuoy,
  PieChart,
  Settings,
  Users,
} from "lucide-react";

export const navigation = [
  { label: "Home", icon: Home },
  { label: "Dashboard", icon: BarChart2, count: "10" },
  { label: "Projects", icon: Layers },
  { label: "Tasks", icon: CheckSquare },
  { label: "Reporting", icon: PieChart },
  { label: "Users", icon: Users },
  { label: "Support", icon: LifeBuoy },
  { label: "Settings", icon: Settings, isActive: true },
];
