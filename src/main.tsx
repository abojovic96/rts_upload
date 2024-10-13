import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UploadProvider } from "./context/UploadContext"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UploadProvider>
        <App />
      </UploadProvider>
    </BrowserRouter>
  </StrictMode>,
)
