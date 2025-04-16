import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom" // Switch to HashRouter
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App.jsx" // Make sure to use App.jsx explicitly
import "./styles/globals.css"

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)