

export type BuildMode= 'production'|'development'
export type MinifyOptions=boolean|'terser'|'esbuild'

export interface BuildPaths{
    root:string;
    entry:string;
    build:string;

}

export interface BuildOptions{
    mode:BuildMode
    paths:BuildPaths;
}