import React, { useState } from 'react';
import FileUploadForm from './FileUploadForm';
import config from './config';

function AdminPanel() {
    const [activeForm, setActiveForm] = useState(null);

    const handleFormOpen = (formType) => {
        setActiveForm(formType);
    };

    // const FetchProducts = async (category) => {
    //     try {
    //         const products = await config.getproductsforsubCategories(category); // Await the async call
    //         console.log("Fetched products:", products.documents); // Log after the promise resolves
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // };

    // const FetchAllCategories = async () => {
    //     try {
    //         const categories = await config.getAllCategories();
    //         console.log("Fetched categories:", categories);
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //     }
    // };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
            
            <div className="space-x-4 mb-8">
                <button 
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFormOpen('add')}
                >
                    Add Product
                </button>
            </div>
            {/* <div className="space-x-4 mb-8">
                <button 
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    // onClick={() => FetchProducts("women")}
                    onClick={FetchAllCategories}
                >
                    Fetch
                </button>
            </div> */}

            <div className="w-full max-w-lg">
                {activeForm === 'add' && <FileUploadForm />}
            </div>
        </div>
    );
}

export default AdminPanel;
