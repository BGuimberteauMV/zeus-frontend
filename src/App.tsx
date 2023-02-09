import "./App.css";
import ApplicationList from "./components/ApplicationList";
import NavigationBar from "./layouts/NavigationBar";
import TitleContent from "./layouts/TitleContent";

function App() {
  return (
    <>
      <div className="min-h-full">
        <NavigationBar />
        <div className="py-10">
          <TitleContent title="Applications" heroicIconName="Squares2X2Icon" />
          <main>
            <ApplicationList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
