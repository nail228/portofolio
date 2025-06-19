import react from "@vitejs/plugin-react";
import {PluginOption} from "vite";
import {patchCssModules} from "vite-css-modules";


export function buildPlugin():PluginOption[]{

    return [react(),patchCssModules()];


}