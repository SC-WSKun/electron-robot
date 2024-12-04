import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import './demos/ipc'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Communicate } from './pages/Communicate'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/communicate" element={<Communicate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
