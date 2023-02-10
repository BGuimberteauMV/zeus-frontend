import { Outlet } from "react-router-dom";
import { XMarkIcon, Squares2X2Icon, BeakerIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import NavigationBar from "./NavigationBar";
import TitleContent from "./TitleContent";

// const titles = [
//   { pathname: "/", title: "Applications", icon: <Squares2X2Icon className="h-6 w-6" aria-hidden="true" /> },
//   { pathname: "/sciences", title: "Sciences", icon: <BeakerIcon className="h-6 w-6" aria-hidden="true" /> },
//   { pathname: "/news", title: "News", icon: <NewspaperIcon className="h-6 w-6" aria-hidden="true" /> },
// ];

function Layout() {
  return (
    <div className="min-h-full">
      <NavigationBar />
      <div className="py-10">
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
