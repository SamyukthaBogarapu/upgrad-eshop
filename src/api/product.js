import { products } from './mockdatabase';
import {createApiResponse} from "../common/helpers.js";

export const getProducts = async () => {
    return createApiResponse(200, products);
};

export const addProduct = async (productData) => {
    const newProduct = {
        id: products.length + 1,
        ...productData
    };

    products.push(newProduct);
    return createApiResponse(201, newProduct);
};

export const getProduct = async (id) => {
    const product = products.find(p => p.id === id);
    return product ? createApiResponse(200, product) : createApiResponse(404, { message: 'Product not found' });
};

export const removeProduct = async (productId) => {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
        return createApiResponse(204, { message: 'Product removed successfully' });
    } else {
        return createApiResponse(404, { message: 'Product not found' });
    }
};

export const modifyProduct = async (productId, updatedData) => {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const updatedProduct = { ...products[productIndex], ...updatedData };
        products[productIndex] = updatedProduct;
        return createApiResponse(200, updatedProduct);
    } else {
        console.log('Product not found', productId, updatedData)
        return createApiResponse(404, { message: 'Product not found' });
    }
};

export const getProductCategories = async () => {
    const categories = [...new Set(products.map(product => product.category))];
    return createApiResponse(200, categories);
};
