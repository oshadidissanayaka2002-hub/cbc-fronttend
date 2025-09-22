import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus, FaTrash } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function AdminProductPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      console.log(res.data)
      setProducts(res.data)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Product Page
      </h1>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="py-3 px-4">Product ID</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Last Price</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-gray-700 font-medium">
                  {product.productId}
                </td>
                <td className="py-3 px-4 text-gray-800 font-semibold">
                  {product.productName}
                </td>
                <td className="py-3 px-4 text-green-600 font-bold">
                  Rs. {product.price}
                </td>
                <td className="py-3 px-4 text-red-500 line-through">
                  Rs. {product.lastPrice}
                </td>
                <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
                  {product.description}
                </td>
                <td className="py-3 px-4 flex items-center justify-center gap-3">
                  <button className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition">
                    <FaTrash size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                    <FaPencil size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Add Button */}
      <Link to="/admin/products/addProduct" className="fixed bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition">
        <FaPlus size={20} />
      </Link>
    </div>
  )
}
