import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/project/pages/HomePage.tsx";
import FakeTimeTryPage from "@/project/pages/FakeTimeTryPage.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fake" element={<FakeTimeTryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
