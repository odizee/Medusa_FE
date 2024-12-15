import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Logo } from "./Logo";
import menu from "../../assets/menu.svg";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { navigation } from "../../lib/data";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <Logo />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div>
            <img src={menu} alt="" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-2 py-10 px-6">
            {navigation.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
