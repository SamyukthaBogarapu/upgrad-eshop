import { orders } from './mockdatabase'; // Adjust the import path as necessary
import { getAccessToken } from "../services/auth.js";
import {createApiResponse, getUserIdFromToken} from "../common/helpers.js";




export const addOrder = async ({ quantity, addressId, productId }) => {
    const accessToken = getAccessToken();
    const userId = getUserIdFromToken(accessToken);

    if (!userId) {
        return createApiResponse(401, { message: 'Unauthorized' });
    }

    const newOrder = {
        id: orders.length + 1, // Assign a new ID
        userId,
        quantity,
        addressId,
        productId
    };

    orders.push(newOrder);

    return createApiResponse(201, { message: 'Order added successfully', order: newOrder });
};
