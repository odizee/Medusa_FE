import { LogOut } from "lucide-react";
import avatar from "../../assets/avatar.svg";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function UserNav() {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start px-2 bg-transparent hover:bg-transparent"
    >
      <Avatar className="h-8 w-8 mr-2">
        <img src={avatar} alt="img" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>
      <div className="flex gap-x-2">
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-gray-900">Olivia Rhye</p>
          <p className="text-xs text-gray-500">olivia@untitledui.com</p>
        </div>
        <LogOut className="h-4 w-4 text-gray-500 mt-1" />
      </div>
    </Button>
  );
}
