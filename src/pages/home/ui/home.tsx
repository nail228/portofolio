import {useState} from "react";
import classes from './home.module.scss'
import {useTranslation} from "react-i18next";
import {Counter} from "@/entities/Counter";

export default function HomePage(){


    const {t} = useTranslation();



    return(
        <div>

            <span>
                {t("Главная страница")}
            </span>
            <Counter/>

        </div>
    )

}