import { Link, Route, Routes, useLocation } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";


export default function AdminHomePage() {
  const location = useLocation(); // to highlight active menu

  const menuItems = [
    { to: "/admin/dashboard", icon: <GoGraph className="text-xl" />, label: "Dashboard" },
    { to: "/admin/products", icon: <FaBoxOpen className="text-xl" />, label: "Products" },
    { to: "/admin/orders", icon: <FaShoppingCart className="text-xl" />, label: "Orders" },
    { to: "/admin/customer", icon: <FaUsers className="text-xl" />, label: "Customers" },
  ];

  return (
    <div className="bg-gray-100 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-600 flex flex-col items-start py-6 px-4 space-y-2 text-white font-medium shadow-lg">
        <h2 className="text-2xl font-bold mb-6 pl-2">Admin Panel</h2>

        {menuItems.map((item, i) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={i}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2 w-full rounded-md transition 
                ${active ? "bg-blue-800" : "hover:bg-blue-700"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] h-screen p-6 overflow-y-auto">
        <div className="bg-white shadow-md rounded-xl p-6 h-full">
          <Routes>
            <Route path="/dashboard" element={<h1 className="text-2xl font-bold text-gray-700">📊 Dashboard</h1>} />
            <Route path="/products" element={<AdminProductPage />} />
            <Route path="/products/addProduct" element={<AddProductForm/>} />
            <Route path="/orders" element={<h1 className="text-2xl font-bold text-gray-700">🛒 Orders</h1>} />
            <Route path="/customer" element={<h1 className="text-2xl font-bold text-gray-700">👥 Customers</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
