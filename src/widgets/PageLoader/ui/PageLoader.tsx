import cls from "./PageLoader.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {Loader} from "@/shared/ui/Loader/Loader.tsx";

interface PageLoaderProps{
    className?:string;
}


export function PageLoader({className}:PageLoaderProps) {
    return(
        <div className={classNames(cls.PageLoader,{},[className])}>
            <Loader/>
        </div>
    )
 }