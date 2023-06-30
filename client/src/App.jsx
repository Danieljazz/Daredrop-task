import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import StreamerPage from "./pages/StreamerPage/StreamerPage";
import { useEffect } from "react";
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
    localStorage.getItem("userId") &&
      localStorage.setItem("userId", JSON.stringify("sadasa"));
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
