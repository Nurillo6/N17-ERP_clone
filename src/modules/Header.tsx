import { BellOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Badge, Button, Modal } from "antd"
import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useCookies } from "react-cookie"

const Header = () => {
  const {showNavbar, setShowNavbar, setToken} = useContext(Context)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [_cookie,_setCookie,removeCookie] = useCookies(['token'])
  const [loading, setIsLoading] = useState<boolean>(false)

  function logOut():void{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setToken(null)
      removeCookie("token")
      location.pathname = "/"
    },1000)
  }
  return (
    <>
    <div className="bg-[#031529] p-2 py-[12px] border-b-[0.5px] border-slate-600 flex items-center justify-between">
      <button onClick={() => setShowNavbar(!showNavbar)} className="text-white cursor-pointer">
        {showNavbar ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <div className="flex items-center gap-[5px]">
        <Badge size="small" count={50} overflowCount={9}>
          <Button size="small" className="w-[28px] h-[30px]" type="default"> <BellOutlined /> </Button>
        </Badge>
        <Button onClick={() => setShowModal(true)} icon={<LogoutOutlined />} iconPosition="end" className="!text-white" type="text">Chiqish</Button>
      </div>
    </div>
    <Modal confirmLoading={loading} open={showModal} okText="Chiqish" cancelText="Bekor qilish" onOk={() => logOut()} onCancel={() => setShowModal(false)} title="Tizimdan chiqish"></Modal>
    </>
  )
}

export default Header