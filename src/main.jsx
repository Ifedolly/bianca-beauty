import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-8482XPSN0K"); // Replace with your actual Measurement ID
ReactGA.send("pageview");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
