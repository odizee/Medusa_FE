import { Button } from "@/components/ui/button";
import { CloudDownload } from "lucide-react";

export function RoleTableHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-md font-medium text-gray-900">User Roles</h3>
      <Button variant="outline" size="sm">
        <CloudDownload className="w-4 h-4 mr-2" />
        Download all
      </Button>
    </div>
  );
}
