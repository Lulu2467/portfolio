import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Works from "./pages/Works";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/work/:slug" element={<Work />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
