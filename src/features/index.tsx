import { useContext } from "react"
import Header from "../modules/Header"
import Navbar from "../modules/Navbar"
import { DashboardRoute } from "../routes"
import { Context } from "../context/Context"

const DashboardLayout = () => {
  const {showNavbar} = useContext(Context)
  return (
    <div className="flex">
      <Navbar />
      <div className={` ${showNavbar ? "w-full" : "w-[82%]"} duration-300`}>
        <Header />
        <DashboardRoute />
      </div>
    </div>
  )
}

export default DashboardLayout