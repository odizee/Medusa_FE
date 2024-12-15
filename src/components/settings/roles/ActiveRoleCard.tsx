import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ActiveRole } from "@/types";

interface ActiveRoleCardProps {
  role: ActiveRole;
}

export function ActiveRoleCard({ role }: ActiveRoleCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-gray-100 text-gray-600">
            {role.name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{role.name}</p>
          <p className="text-sm text-gray-500">Last active {role.lastActive}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {role.isDefault && (
          <Badge variant="secondary" className="font-medium">
            Default
          </Badge>
        )}
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>
    </div>
  );
}
