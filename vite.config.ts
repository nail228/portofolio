import {ConfigEnv, defineConfig, UserConfig} from 'vite'
import * as path from "node:path";
import {buildViteConfig} from "./config/build/buildViteConfig";
import {BuildPaths} from "./config/build/types/config";

// https://vite.dev/config/
export default defineConfig(({mode}:ConfigEnv):UserConfig=>{
    const paths:BuildPaths={
        root:path.resolve(__dirname),
        entry:path.resolve(__dirname,'index.html'),
        build:path.resolve(__dirname,'build')
    }

    return buildViteConfig({
        mode:mode==='production'?'production':'development',
        paths
    })
})


