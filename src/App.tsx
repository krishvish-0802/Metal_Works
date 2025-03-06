import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoading);

    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
