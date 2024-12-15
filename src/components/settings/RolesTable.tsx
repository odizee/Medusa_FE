import { Download, MoreHorizontal } from "lucide-react";
import type { UserRole } from "@/types";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface RolesTableProps {
  roles: UserRole[];
}

export default function RolesTable({ roles }: RolesTableProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">User Roles</h3>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download all
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role users</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.type}</TableCell>
                <TableCell>{role.dateCreated}</TableCell>
                <TableCell>
                  <Badge
                    variant={role.status === "Active" ? "default" : "secondary"}
                  >
                    {role.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {role.users.map((user, i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
