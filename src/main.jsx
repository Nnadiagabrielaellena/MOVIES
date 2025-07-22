import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieProvider } from './context/MovieContext'; 
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MovieProvider>
     <App />
    </MovieProvider>
  </React.StrictMode>
);