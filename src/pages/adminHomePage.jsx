import { Link, Route, Routes } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductsPage";



export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-start py-6 px-4 space-y-4 text-white font-medium">
        {/* Dashboard */}
        <Link
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded-md transition"
          to="/admin/dashboard"
        >
          <GoGraph className="text-xl" />
          Dashboard
        </Link>

        {/* Products */}
        <Link
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded-md transition"
          to="/admin/products"
        >
          <FaBoxOpen className="text-xl" />
          Products
        </Link>

        {/* Orders */}
        <Link
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded-md transition"
          to="/admin/orders"
        >
          <FaShoppingCart className="text-xl" />
          Orders
        </Link>

        {/* Customer */}
        <Link
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded-md transition"
          to="/admin/customer"
        >
          <FaUsers className="text-xl" />
          Customers
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] h-screen bg-red-400 flex items-center justify-center text-white text-2xl font-semibold">
        <Routes path="/*">
      
        <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
        <Route path="/products" element={<AdminProductPage/>}/>
        <Route path="/orders" element={<h1>Order</h1>}/>
        <Route path="/customer" element={<h1>Customer</h1>}/>
        
      </Routes>
      </div>
    </div>
  );
}
