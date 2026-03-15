import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist.</p>
        <a href="/" className="text-primary hover:underline">Go back home</a>
      </div>
    ),
  }
])
