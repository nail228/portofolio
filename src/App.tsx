import './styles/index.scss'
import {Route, Routes} from "react-router-dom";
import {HomePageAsync} from "@/pages/home/home.async.tsx";
import {AboutPageAsync} from "@/pages/about/about.async.tsx";
import {Suspense, useContext} from "react";
import Loading from "@/widgets/Loading/Loading.tsx";
import {useTheme} from "@/theme/useTheme.ts";
import {classNames} from "@/helpers/classnames/classNames.ts";


function App() {

  const {theme,toggleTheme}=useTheme()

  return (
      <div className={classNames('app',{},[theme])}>
          <button onClick={toggleTheme}>
              dark/light
          </button>
          <Suspense fallback={Loading()}>
              <Routes>
                  <Route path="/" Component={HomePageAsync} />
                  <Route path="/about" Component={AboutPageAsync} />
              </Routes>
          </Suspense>
      </div>


  )
}

export default App
