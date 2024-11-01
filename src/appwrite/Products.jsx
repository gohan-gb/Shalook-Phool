import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import MarginWrapper from "../common/MarginWrapper";
import { Link } from "react-router-dom";
import config from "../appwrite/config";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setsubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await config.getAllCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchsubCategories = async () => {
      try {
        const fetchedsubCategories = await config.getAllsubCategories();
        setsubcategories(fetchedsubCategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };
    fetchsubCategories();
  }, []);

  // Fetch products when a category is selected
  const fetchProducts = async (catProduct, category) => {
    try {
      setSelectedCategory(category); // Update selected category
      const fetchedProducts = await config.getProducts(catProduct, category); // Get products for the selected category
      setProducts(fetchedProducts); // Store fetched products in state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="pt-36 pb-12 flex">
      {/* Sidebar for Categories */}
      <aside className="w-1/4 p-4 bg-gray-100 border-r border-gray-300">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li 
              key={category} 
              className={`cursor-pointer ${category === selectedCategory ? 'font-bold' : ''}`}
              onClick={() => fetchProducts("category", category)} 
            >
              {category}
            </li>
          ))}

          <h3 className="text-xl font-semibold mb-4">Sub categories</h3>
          {subcategories.map((category) => (
            <li 
              key={category} 
              className={`cursor-pointer ${category === selectedCategory ? 'font-bold' : ''}`}
              onClick={() => fetchProducts("subCategory", category)} 
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content area for Products */}
      <main className="w-3/4 p-4">
        <MarginWrapper>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard 
                  title={product.title} 
                  price={product.price} 
                  image={product.images[0]} // Adjust to your actual image field
                />
              </Link>
            ))}
          </div>
        </MarginWrapper>
      </main>
    </div>
  );
};

export default Products;
