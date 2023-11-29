import { jwtDecode } from "jwt-decode";
import { getRoles } from "../services/auth";

export const convertAccessTokenToUser = (accessToken) => {
  const decodedToken = jwtDecode(accessToken);
  const email = decodedToken.email;

  const roles = getRoles();

  return {
    username: email,
    roles: [roles]
  };
};

export const createApiResponse = (status, data) => {
  return Promise.resolve({
    status,
    json: () => Promise.resolve(data)
  });
};

// Function to simulate JWT token creation
export const createFakeToken = (user) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ id: user.id, email: user.email, role: user.role }));
  const signature = 'signature'; // Mock signature for testing

  return `${header}.${payload}.${signature}`;
};

// Function to simulate getting a user's token and decoding it to get the user ID
export const getUserIdFromToken = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.id;
  } catch {
    return null;
  }
};