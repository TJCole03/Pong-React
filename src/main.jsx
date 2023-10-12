import StrictMode from "react";
import createRoot from "react-dom/client";
import ReactDOM from "react";
import React from "react";
import App from './App.jsx'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


// const root = createRoot(document.getElementById("root"))
// root.render(<StrictMode><App /></StrictMode>)

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)