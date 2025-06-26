import cls from '@/widgets/PageError/ui/PageError.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useTranslation} from "react-i18next";
import {Button} from "@/shared/ui/Button/Button.tsx";


interface PageErrorProps{
    className?:string;
}

export const PageError=(props:PageErrorProps) => {

    const {className}=props

    const {t}=useTranslation();

    const reloadPage=()=>{
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError,{},[className])}>
            <p>
                {t('Произошла непревиденная ошибка')}
            </p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )

}