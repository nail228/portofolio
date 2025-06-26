
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import classes from './Header.module.scss'
import {AppLink} from "@/shared/ui/AppLink/AppLink.tsx";



interface HeaderProps{
    className?:string,
}

export const Header=({className}:HeaderProps)=>{

    return(
        <div className={classNames(classes.header,{},[className])}>
            <div className={classes.links}>

            </div>

        </div>
    )
}

