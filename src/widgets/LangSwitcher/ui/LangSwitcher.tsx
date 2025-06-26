import {Button, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useTranslation} from "react-i18next";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps{
    className?:string;
    short?:boolean;
}

export const LangSwitcher=({className,short}:LangSwitcherProps)=>{

    const [t,i18n]=useTranslation();

    const toggle=()=>{
        i18n.changeLanguage(i18n.language==='ru'?'en':'ru')
    }

    return(
            <Button
                className={classNames(cls.LangSwitcher,{},[className])}
                onClick={toggle}
                theme={ButtonTheme.CLEAR}
            >
                {t(short?"Короткий язык":"Язык")}
            </Button>

    )

}