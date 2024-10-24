import React, { useState } from 'react';
import config from './config'; // Import the config file where your methods are defined

function FileUploadForm() {
    const [images, setImages] = useState([]); // Updated to store multiple images
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discountOption, setDiscountOption] = useState('no');
    const [price, setPrice] = useState('');
    const [discPrice, setDiscPrice] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('men');

    // Handle multiple file uploads
    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!images.length || !title || !description || !price || (discountOption === 'yes' && !discPrice) || !category) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            const actualPrice = parseInt(price, 10);
            const discountedPrice = discountOption === 'yes' ? parseInt(discPrice, 10) : null;

            // Call the method to upload multiple files and metadata
            const response = await config.uploadFileWithCategory(
                title,
                actualPrice,
                discountOption,
                discountedPrice,
                images, // Pass array of images
                description,
                category,
                subCategory
            );
            console.log("Product uploaded successfully:", response);
            alert("Product uploaded successfully!");
        } catch (error) {
            console.error("Error uploading product:", error);
            alert("There was an error uploading the product.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Product Name
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product name"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product description"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
                    Discount
                </label>
                <select
                    id="discount"
                    value={discountOption}
                    onChange={(e) => setDiscountOption(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>

            {discountOption === 'yes' && (
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discPrice">
                        Discounted Price
                    </label>
                    <input
                        type="number"
                        id="discPrice"
                        value={discPrice}
                        onChange={(e) => setDiscPrice(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter discounted price"
                        style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                    />
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Actual Price
                </label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter actual price"
                    required
                    style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    Category 1
                </label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter category one"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                    Category 2
                </label>
                <select
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="children">Children</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                    Product Images
                </label>
                <input
                    type="file"
                    id="images"
                    multiple
                    onChange={handleFileChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Upload Product
                </button>
            </div>
        </form>
    );
}

export default FileUploadForm;
