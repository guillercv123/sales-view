import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LoadingProvider} from "@/context/LoadingContext.js";
import GlobalLoader from "@/components/shared/GlobalLoader.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LoadingProvider>
        <GlobalLoader />
        <App />
      </LoadingProvider>
  </StrictMode>,
)
