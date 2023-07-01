import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import StreamerPage from "./pages/StreamerPage/StreamerPage";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/streamers/:streamerId",
      element: <StreamerPage />,
    },
  ]);
  useEffect(() => {
    !localStorage.getItem("userId") &&
      localStorage.setItem("userId", JSON.stringify(uuidv4()));
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
