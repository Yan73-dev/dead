"use client"
import Home from "./page";

export default function Layout({ children }) {
    return ( <html lang = "en" >
        <head>
        <meta charSet = "UTF-8" / >
        <meta name = "viewport"
        content = "width=device-width, initial-scale=1.0" / >
  
        </head> 
        <body > { children } { /* Cambia <Home /> por {children} */ } 
        </body>
        </html>
    );
}