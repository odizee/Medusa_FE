import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UserNav } from "./UserNav";
import { Input } from "../ui/input";
import Feature from "./Feature";
import { navigation } from "../../lib/data";

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-200 bg-white h-screen fixed left-0 top-0 flex flex-col overflow-y-auto">
      <div className="p-6">
        <Logo className="mb-6" />
        <Input placeholder="Search" className="mb-6" />
        <div className="space-y-2">
          {navigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-auto p-6 border-gray-200">
        <Feature />
      </div>
      <div className="mt-auto p-6 border-t border-gray-200">
        <UserNav />
      </div>
    </div>
  );
}
