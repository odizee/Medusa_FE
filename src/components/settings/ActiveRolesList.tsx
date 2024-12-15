import { ActiveRole } from "../../types";
import { Plus } from "lucide-react";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface ActiveRolesListProps {
  roles: ActiveRole[];
}

export default function ActiveRolesList({ roles }: ActiveRolesListProps) {
  return (
    <div>
      <Label>Active Role</Label>
      <p className="text-sm text-muted-foreground">
        Select active role available to the user
      </p>

      <div className="space-y-4 mt-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{role.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{role.name}</p>
                <p className="text-sm text-muted-foreground">
                  Last active {role.lastActive}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {role.isDefault && <Badge variant="secondary">Default</Badge>}
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add role to user
        </Button>
      </div>
    </div>
  );
}
