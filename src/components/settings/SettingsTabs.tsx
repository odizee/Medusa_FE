import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import UserRolesTab from "./UserRolesTab";

const tabs = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
] as const;

export default function SettingsTabs() {
  return (
    <Tabs defaultValue="roles" className="w-full">
      <TabsList className="w-full h-auto bg-transparent flex justify-start overflow-y-auto">
        {tabs.map((tab, idx: number) => (
          <TabsTrigger
            key={tab}
            value={tab.toLowerCase().replace(" ", "-")}
            className={`data-[state=active]:bg-[#F9FAFB] data-[state=active]:shadow-none flex items-center justify-center px-2 w-max h-8 text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 rounded-none ${
              idx === 0
                ? "border border-e-0 border-gray-300 rounded-s-lg"
                : idx === tabs.length - 1
                ? "border border-gray-300 rounded-e-lg"
                : "border border-gray-300"
            }`}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="roles" className="mt-6">
        <UserRolesTab />
      </TabsContent>
    </Tabs>
  );
}
