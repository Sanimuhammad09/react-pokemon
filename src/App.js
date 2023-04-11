import Home from "./Pages/Home/Home"
import Single from "./Pages/Single/Single"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/single/:id",
      element: <Single />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
