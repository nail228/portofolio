
type Mods=Record<string,string|boolean>

export function classNames(cls:string,mods:Mods={},additional:(string|undefined)[]=[]):string{

    console.log([
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_,value])=>Boolean(value))
            .map(([className])=>className)
    ])

    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_,value])=>Boolean(value))
            .map(([className])=>className).join(' ')
    ]
        .join(' ')
}