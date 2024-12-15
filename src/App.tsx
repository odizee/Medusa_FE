import Sidebar from "../src/components/layout/Sidebar";
import SettingsTabs from "../src/components/settings/SettingsTabs";
import MobileNavbar from "../src/components/layout/MobileNavbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden w-full">
        <MobileNavbar />
      </div>
      <div className="md:pl-64">
        <div className=" mx-auto py-10 px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Settings
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your team and preferences here.
            </p>
          </div>
          <SettingsTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
