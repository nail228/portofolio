import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/app/providers/ThemeProvider/lib/ThemeContext.ts";
import {useContext} from "react";

interface userThemeResult{
    toggleTheme:()=>void;
    theme:Theme;
}

export function useTheme():userThemeResult{

    const {theme,setTheme}=useContext(ThemeContext)

    const toggleTheme=()=>{
        const newTheme=theme===Theme.DARK?Theme.LIGHT:Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)
    }

    return{
        toggleTheme,
        theme
    }

}