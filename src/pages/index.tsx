import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Pages;
