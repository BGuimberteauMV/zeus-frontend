import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import TitleContent from "./TitleContent";

const titles = [
  { pathname: "/", title: "Applications" },
  { pathname: "/sciences", title: "Sciences" },
];

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-full">
      <NavigationBar />
      <div className="py-10">
        <TitleContent
          title={titles.find((title) => title.pathname === location.pathname)?.title || ""}
          heroicIconName="Squares2X2Icon"
        />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
