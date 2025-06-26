import { useContext, useEffect, useState } from "react"
import { Logo } from "../assets/icons"
import { Context } from "../context/Context"
import { instance } from "../hooks/instance"
import NavbarCarusel from "../components/NavbarCarusel"

const Navbar = () => {
  const {token, showNavbar} = useContext(Context)
  const [role, setRole] = useState<string>("")
  useEffect(() => {
    if(token){
      instance("/user/me", {headers:{"Authorization":`Bearer ${token}`}}).then(res => {
        setRole(res.data.role);
      })
    }
  },[])
  return (
    <div className={`${showNavbar ? "w-[87px]" :"w-[18%]"} duration-300  h-[100vh] overflow-y-auto bg-[#031529]`}>
      <div className={`p-2 border-b-[0.5px] px-[15px] border-slate-500 flex ${showNavbar ? "justify-center" :"gap-[10px]"} items-center`}>
        <Logo extraClass="w-[40px] h-[40px] text-[var(--clr-gold)]"/>
        <p className={`${showNavbar ? "opacity-0 w-0" : ""} duration-300 capitalize text-white`}>{role.toLowerCase()}</p>
      </div>
      <NavbarCarusel/>
    </div>
  )
}

export default Navbar