import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RoleTableHeader } from "./RoleTableHeader";
import { RoleTableRow } from "./RoleTableRow";
import type { UserRole } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

interface RolesTableProps {
  roles: UserRole[] | undefined;
}

export default function RolesTable({ roles }: RolesTableProps) {
  return (
    <div>
      <RoleTableHeader />

      <div className="rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-10">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[300px] text-xs">Name</TableHead>
              <TableHead className="text-xs">Type</TableHead>
              <TableHead className="text-xs">Date created</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Role users</TableHead>
              <TableHead className="w-[50px] text-xs"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-[#F9FAFB]">
            {roles?.map((role) => (
              <RoleTableRow key={role.id} role={role} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
