import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";
import {LangSwitcher} from "@/widgets/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {AppLink} from "@/shared/ui/AppLink/AppLink.tsx";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import MainIcon from '@/shared/assets/icons/nav/home.svg?react'
import AboutIcon from '@/shared/assets/icons/nav/about.svg?react'
import {useTranslation} from "react-i18next";


interface SideBarProps{
    className?:string;
}

export const SideBar=({className}:SideBarProps)=>{

    const [collapsed,setCollapsed]=useState(false)

    const {t} = useTranslation();

    const onToggle=()=>{
        setCollapsed(prev=>!prev)
    }


    return(
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                onClick={onToggle}
                className={classNames(cls.collapsBtn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.link_items}>
                    <AppLink to={RoutePath.home} className={cls.link_item} >
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link} >
                            {t("Главная страница")}
                        </span>
                    </AppLink>

                    <AppLink to={RoutePath.about} className={cls.link_item} >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t("О сайте")}
                        </span>
                    </AppLink>



            </div>

            <div className={cls.switchers}>

                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </div>
    )
}