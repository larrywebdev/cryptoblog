import { BrowserRouter, Route, Routes } from "react-router-dom";
import LatestNews from "./components/LatestNews";
import AppLayout from "./layout/AppLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LatestNews />} />
          <Route path=":source" element={<LatestNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
