import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "@/app/providers/ThemeProvider";
import LightIcon from '@/shared/assets/icons/theme/light.svg?react'
import DarkIcon from '@/shared/assets/icons/theme/dark.svg?react'
import {Button, ButtonTheme} from "@/shared/ui/Button/Button.tsx";

interface ThemeSwitcherProps{
    className?:string;
}

export const ThemeSwitcher=({className}:ThemeSwitcherProps)=>{

    const {theme,toggleTheme}=useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher,{},[className])} onClick={toggleTheme}>
            {theme===Theme.DARK?<DarkIcon width={32} height={32}/>:<LightIcon width={32} height={32}/>}
        </Button>
    )

}