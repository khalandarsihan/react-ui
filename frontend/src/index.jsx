import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom" // CHANGE THIS TO HASHROUTER
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App.jsx" // EXPLICITLY USE App.jsx
import "./styles/globals.css"

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
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