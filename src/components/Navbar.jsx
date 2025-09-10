import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#d9b48f] shadow-md">
      <Link to="/" style={{marginLeft: "0"}}><h1 className="text-2xl font-bold text-[#3e2f1c]">Pavya</h1></Link>
      <div className="space-x-6">
        <Link className="text-[#3e2f1c]" to="/">Home</Link>
        <Link className="text-[#3e2f1c]" to="/about">About</Link>
        <Link className="text-[#3e2f1c]" to="/products">Products</Link>
        <Link className="text-[#3e2f1c]" to="/cart">Cart</Link>
      </div>
    </nav>
  );
}