import { SettingsHeader } from "./SettingsHeader";
import EmailSection from "./email/EmailSection";
import ActiveRolesList from "./roles/ActiveRolesList";
import RolesTable from "./roles/RolesTable";
import { Separator } from "../ui/separator";
import { Oval } from "react-loader-spinner";
import { useRoles } from "../../hooks/use-roles";

export default function UserRolesTab() {
  const { data: roles, isLoading: isLoadingRoles } = useRoles();

  return (
    <div className="space-y-6">
      <SettingsHeader
        title="User Roles"
        description="Update your roles details and information."
      />
      <Separator />
      <div className="space-y-8">
        <EmailSection />
        <Separator />
        <ActiveRolesList />
      </div>
      {isLoadingRoles ? (
        <div className="grid gap-y-4 mt-4 h-full">
          <div className="flex h-full flex-col justify-center gap-y-6 items-center mt-10">
            <Oval
              height={50}
              width={50}
              color="#7F56D9"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#222b882b"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        </div>
      ) : (
        <RolesTable roles={roles} />
      )}
    </div>
  );
}
