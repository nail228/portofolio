import {classNames} from "@/shared/lib/classNames/classNames.ts";
import classes from './Header.module.scss'
import {AppLink} from "@/shared/ui/AppLink/AppLink.tsx";
import {Modal} from "@/shared/ui/Modal";
import {useTranslation} from "react-i18next";
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button.tsx";



interface HeaderProps{
    className?:string,
}

export const Header=({className}:HeaderProps)=>{

    const {t}=useTranslation();
    const [isAuthModal,setIsAuthModal]=useState(false);

    const onToggleModal=useCallback(()=>{
        setIsAuthModal((prev)=>!prev)
    },[])

    return(
        <div className={classNames(classes.header,{},[className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classes.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                <div>
                    lets fucking goooooooo!!!!!
                    lets fucking goooooooo!!!!!
                    lets fucking goooooooo!!!!!
                    lets fucking goooooooo!!!!!
                </div>
            </Modal>

        </div>
    )
}

