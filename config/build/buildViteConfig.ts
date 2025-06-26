import {BuildOptions, MinifyOptions} from "./types/config";
import {buildPlugin} from "./buildPlugin";
import {buildResolvers} from "./buildResolvers";
import {buidlLoaders} from "./buildLoaders";
import {loadEnv} from "vite";


export function buildViteConfig(options:BuildOptions) {

    const {mode,paths}=options
    const env=loadEnv(mode,process.cwd(),'')
    const isProd=mode==="production"
    const isDev=mode==="development"
    const minifyOp:MinifyOptions=isProd?'terser':false;

    return {
        plugins:buildPlugin(),
        build:{
            outDir:paths.build,
            minify:minifyOp,
            rollupOptions:{
                input:paths.entry,
                output:{
                    entryFileNames:isProd?'assets/[name].[hash].js':'assets/[name].js',
                    chunkFileNames:isProd?'assets/[name].[hash].js':'assets/[name].js',
                    assetFileNames:isProd?'assets/[name].[hash].[ext]':'assets/[name].[ext]'
                }

            }
        },
        define:{
            __APP_ENV__:JSON.stringify(env.APP_ENV__),
            __IS_DEV__:JSON.stringify(isDev)
        },
        resolve:buildResolvers(paths.root),
        server:{
            port:7321,
            open:true,
            hmr:true
        },
        esbuild:buidlLoaders(),
        css:{
            modules:{
                scopeBehaviour: 'local' as const,
                generateScopedName: mode === 'development'
                    ? '[local]'
                    : '[hash:base64]',
                localsConvention: 'camelCase' as const
            }
        }
    }
}