import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {StoreProvider} from "./contexts/storeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <StoreProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </StoreProvider>
  </React.StrictMode>,
)
