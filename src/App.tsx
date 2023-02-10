import "./App.css";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./components/HomePage";
import SciencesList from "./components/SciencesList";
import NewsList from "./components/NewsList";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sciences" element={<SciencesList />} />
        <Route path="/news" element={<NewsList />} />
      </Route>
    </Routes>
  );
}

export default App;
