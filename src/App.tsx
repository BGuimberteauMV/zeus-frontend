import "./App.css";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./components/HomePage";
import SciencesList from "./components/SciencesList";
import NewsList from "./components/NewsList";
import News from "./components/News";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sciences" element={<SciencesList />} />
        <Route path="/news">
          <Route path="" element={<NewsList />} />
          <Route path="/news/new" element={<News />} />
          <Route path="/news/:newsId/edit" element={<News />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
