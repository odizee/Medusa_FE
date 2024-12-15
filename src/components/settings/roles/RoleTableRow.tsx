import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Check, CloudDownload } from "lucide-react";
import type { UserRole } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

interface RoleTableRowProps {
  role: UserRole;
}

export function RoleTableRow({ role }: RoleTableRowProps) {
  return (
    <TableRow className="bg-white">
      <TableCell className="font-medium text-gray-900">
        <Checkbox />
      </TableCell>
      <TableCell className="font-medium text-gray-900 text-sm">
        {role.name}
      </TableCell>
      <TableCell className="text-gray-500 text-sm">{role.type}</TableCell>
      <TableCell className="text-gray-500 text-sm">
        {role.dateCreated}
      </TableCell>
      <TableCell>
        <Badge
          variant={role.status === "Active" ? "default" : "secondary"}
          className="font-medium flex items-center justify-between gap-x-2 w-max"
        >
          {role.status === "Active" && <Check size={12} />}
          {role.status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex -space-x-2">
          {role.users.map((user, i) => (
            <Avatar key={i} className="border-2 border-white w-6 h-6">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="icon" className="ml-auto bg-transparent">
          <CloudDownload className="w-4 h-4" color="#667085" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
