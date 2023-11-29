// Fake user data
import {createApiResponse, createFakeToken} from "../common/helpers.js";
import {users} from "./mockDatabase.js";

// Fake login function
export const login = async ({ username, password }) => {
    // Find user by email and password
    const user = users.find(user => user.email === username && user.password === password);
    if (!user) {
        return createApiResponse(401, { message: 'Invalid username or password' });
    }

    // Simulate a successful login response
    const fakeToken = createFakeToken(user);
    console.log(fakeToken)
    return createApiResponse(200, {
        token: fakeToken, // Simulated JWT token
        roles: user.role
    });
};

// Fake sign up function
export const signUp = async ({ firstName, lastName, email, contactNumber, password }) => {
    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        return createApiResponse(400, { message: 'Email already exists' });
    }

    // Add new user
    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        email,
        contactNumber,
        password,
        role: 'user' // Default role is 'user'
    };
    users.push(newUser);

    // Simulate a successful sign up response
    return createApiResponse(200, { message: 'Sign up successful' });
};