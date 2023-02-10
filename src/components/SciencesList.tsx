import ApplicationList from "../components/ApplicationList";
import TitleContent from "../layouts/TitleContent";
import { BeakerIcon } from "@heroicons/react/24/solid";

function SciencesList() {
  return (
    <>
      <TitleContent title="Sciences" heroicIcon={<BeakerIcon className="h-6 w-6" aria-hidden="true" />} />
      <ApplicationList />
    </>
  );
}

export default SciencesList;
