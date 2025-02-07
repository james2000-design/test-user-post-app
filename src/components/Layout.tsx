import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { Navbar } from "./Navbar";
import { FileText, Globe } from "lucide-react";

export default function DashboardLayout() {
  const location = useLocation();

  const pageTitle = location.pathname.includes("report")
    ? "Analytics - Reports"
    : "Analytics";

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <SideBar />
      <main className="pl-20 pr-5 sm:pl-10 ml-[120px] mt-[6rem] w-full">
        <div className="w-full py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">{pageTitle}</h1>
          </div>
          <div className="w-full ">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between border-gray-300  border-b-[1.5px] pb-4 ">
              <div className="flex space-x-2">
                <button
                  onClick={() => (window.location.href = "/dashboard/report")}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm ${
                    location.pathname.includes("/dashboard/report")
                      ? "bg-[#E0B7BB] text-black"
                      : "bg-white border-white hover:bg-gray-50"
                  }`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Reports
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-white border-white rounded-md hover:bg-gray-50 text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Live View
                </button>
              </div>

              <div className="flex items-center justify-between flex-nowrap overflow-x-scroll space-x-2">
                {!location.pathname.includes("report") && (
                  <>
                    <button className="px-4 py-2 bg-white border-white rounded-md hover:bg-gray-50 text-sm">
                      Today
                    </button>
                    <button className="px-4 py-2 bg-white border-white rounded-md hover:bg-gray-50 text-sm">
                      Compare to: Yesterday
                    </button>
                  </>
                )}
                <label className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm flex ">Auto refresh</span>
                </label>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
