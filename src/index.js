import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const link = document.querySelector("link[rel~='icon']");
if (link) {
  const faviconPath = prefersDarkMode ? "/favicon-dark.png" : "/favicon-light.png";
  link.href = process.env.PUBLIC_URL + faviconPath;
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newSchemeIsDark = e.matches;
  const faviconPath = newSchemeIsDark ? "/favicon-dark.png" : "/favicon-light.png";
  link.href = process.env.PUBLIC_URL + faviconPath;
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);