export default function AddProductForm() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-amber-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-amber-700 mb-6">
          Add Product
        </h1>

        <form className="flex flex-col space-y-4">
          {/* Product ID */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product ID</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Alternative Names */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Alternative Names</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Image URLs */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Image URLs</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Price</label>
            <input
              type="number"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Last Price */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Last Price</label>
            <input
              type="number"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Description</label>
            <textarea
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-amber-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-amber-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
