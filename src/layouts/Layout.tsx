import { Outlet, useLocation } from "react-router-dom";
import { XMarkIcon, Squares2X2Icon, BeakerIcon } from "@heroicons/react/24/solid";
import NavigationBar from "./NavigationBar";
import TitleContent from "./TitleContent";

const titles = [
  { pathname: "/", title: "Applications", icon: <Squares2X2Icon className="h-6 w-6" aria-hidden="true" /> },
  { pathname: "/sciences", title: "Sciences", icon: <BeakerIcon className="h-6 w-6" aria-hidden="true" /> },
];

function Layout() {
  const location = useLocation();
  const element = titles.find((title) => title.pathname === location.pathname);

  return (
    <div className="min-h-full">
      <NavigationBar />
      <div className="py-10">
        <TitleContent
          title={element?.title || ""}
          heroicIcon={element?.icon || <XMarkIcon className="h-6 w-6" aria-hidden="true" />}
        />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
