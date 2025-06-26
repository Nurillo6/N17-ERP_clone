import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { Home, SignIn } from "../pages/Auth"

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path={paths.home} element={<Home/>}/>
        <Route path={paths.singIn} element={<SignIn/>}/>
    </Routes>
  )
}

export default AuthRoutes