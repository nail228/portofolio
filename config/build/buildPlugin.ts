import react from "@vitejs/plugin-react";
import {PluginOption} from "vite";
import {patchCssModules} from "vite-css-modules";
import svgr from "vite-plugin-svgr";
import { analyzer } from 'vite-bundle-analyzer'


export function buildPlugin():PluginOption[]{

    return [
        react(),
        patchCssModules(),
        svgr(),
        analyzer(
            {
                analyzerPort: 'auto',
                openAnalyzer:false
            }
        )
    ];


}