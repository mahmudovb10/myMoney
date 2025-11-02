import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { GlobalProvider } from "./context/GlobalContext";
import Addprice from "./components/Addprice";
import Profile from "./pages/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/addprice",
      element: <Addprice />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
