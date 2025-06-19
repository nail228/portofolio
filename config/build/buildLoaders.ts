import {ESBuildOptions} from "vite";


export function buidlLoaders():ESBuildOptions{

    return {
        loader:'tsx',
        include:/\.[jt]sx?$/,
        exclude:/node_modules/
    }

}