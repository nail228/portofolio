import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/app/providers/ThemeProvider/ui/ThemeProvider.tsx";
import "@/shared/config/i18n/i18n.ts";
import {StoreProvider} from "@/app/providers/StoreProvider";

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <StrictMode>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </StrictMode>
    </StoreProvider>
 ,
)
