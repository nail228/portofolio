declare module '*.svg?react' {
    import React from 'react'
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default ReactComponent
}

declare module '*.svg' {
    const content: string
    export default content
}
declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.sass" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}


declare const __IS_DEV__: boolean;