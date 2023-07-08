import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./component/Navbar";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
