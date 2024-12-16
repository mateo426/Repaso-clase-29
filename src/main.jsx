import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WorkspaceContextProvider } from './Context/WorkspaceContext.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WorkspaceContextProvider>
      <App />
    </WorkspaceContextProvider>
  </BrowserRouter>
    
)