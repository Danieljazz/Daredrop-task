import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/streamers/:streamerId",
      element: (
        <>
          <div>Streamer 1</div>
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
