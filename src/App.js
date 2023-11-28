import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, Login } from "./components";
import Signup from "./components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "sign-up",
        element: <Signup />
      }
    ]
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
