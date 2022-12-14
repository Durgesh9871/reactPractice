import React from "react";

const AddProduct = () => {
    return (
        <div>
            <h3>Add Product</h3>
            <div
                className="add-product-wrapper">
                <div className="form-element-div">
                    <label className="form-label">Product title</label>
                    <input data-cy="add-product-title" type="text" />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Category</label>
                    <select data-cy="add-product-category">
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Image</label>
                    <input
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input data-cy="add-product-price" type="text" />
                </div>
                <div style={{ textAlign: "right" }}>
                    <button data-cy="add-product-button">Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
