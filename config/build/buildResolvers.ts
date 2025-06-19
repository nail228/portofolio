import path from "node:path";


export function buildResolvers(rootDir:string){

    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(rootDir, 'src')
        }

    }
}