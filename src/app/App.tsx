import {useTheme} from "@/app/providers/ThemeProvider/lib/useTheme.ts";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {AppRouter} from "@/app/providers/router";
import {Header} from "@/widgets/Header";
import {SideBar} from "@/widgets/SideBar";
import {Suspense, useState} from "react";
import {PageLoader} from "@/widgets/PageLoader";
import {ErrorBoundary} from "@/app/providers/ErrorBoundary";
import {Modal} from "@/shared/ui/Modal";

// Test component that throws error during render


function App() {
    const {theme} = useTheme();


    return (
        <Suspense fallback={<PageLoader/>}>
            <ErrorBoundary>
                <div className={classNames('app', { }, [theme])}>
                    <Header/>
                    <div className="content-page">
                        <SideBar/>
                        <AppRouter/>
                    </div>
                </div>
            </ErrorBoundary>
        </Suspense>
    );
}

export default App;