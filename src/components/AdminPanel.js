import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/productSlice";
import ProductForm from "./ProductForm";
import Spinner from "./Spinner";
import { MdDashboard } from "react-icons/md";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center gap-2 justify-center">
  <MdDashboard className="text-2xl text-blue-500" />
  Admin Dashboard
</h2>


      <ProductForm />

      {status === "loading" && <Spinner />}
      {error && <p className="text-red-500">Error fetching products: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-red p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
            <h3 className="font-bold">{product.title}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
