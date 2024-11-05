import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import './index.scss'


const root = document.getElementById('app');
createRoot(root!).render(<App />)