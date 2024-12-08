import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/services" element={<div>Services</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
