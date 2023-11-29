import {getAccessToken} from "../services/auth.js";
import {createApiResponse} from "../common/helpers.js";
import {addresses} from "./mockDatabase.js";

// Function to simulate getting a user's token and decoding it to get the user ID
// Assuming the token structure is { id: userId, ... }
const getUserIdFromToken = (token) => {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded.id;
    } catch {
        return null;
    }
};

// Simulate getting addresses
export const getAddresses = async () => {
    const accessToken = getAccessToken(); // Assuming this function exists and retrieves the token
    const userId = getUserIdFromToken(accessToken);

    if (!userId) {
        return createApiResponse(401, { message: 'Unauthorized' });
    }

    const userAddresses = addresses.filter(address => address.userId === userId);
    return createApiResponse(200, userAddresses);
};

// Simulate adding an address
export const addAddress = async (address) => {
    const accessToken = getAccessToken();
    const userId = getUserIdFromToken(accessToken);

    if (!userId) {
        return createApiResponse(401, { message: 'Unauthorized' });
    }

    const newAddress = {
        id: addresses.length + 1,
        userId,
        address
    };
    addresses.push(newAddress);

    return createApiResponse(201, { message: 'Address added successfully', address: newAddress });
};