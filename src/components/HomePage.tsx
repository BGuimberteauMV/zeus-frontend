import ApplicationList from "../components/ApplicationList";
import TitleContent from "../layouts/TitleContent";
import { Squares2X2Icon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <>
      <TitleContent title="Applications" heroicIcon={<Squares2X2Icon className="h-6 w-6" aria-hidden="true" />} />
      <ApplicationList />
    </>
  );
}

export default HomePage;
