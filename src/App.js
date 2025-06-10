import Home from "../src/assets/Home";
import Shope from "../src/assets/Shope";
import Stores from "../src/assets/Stores";
import Menu from "../src/assets/Menu";
import Cart from "../src/assets/Cart";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shope" element={<Shope/>}/>
      <Route path="/store" element={<Stores/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
}
