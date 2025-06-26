import { Input } from "antd"
import CreateCaption from "../../components/CreateCaption"
import UploadImg from "../../components/UploadImg"
import { useContext, useState, type FormEvent } from "react"
import type { UploadType } from "../../types/UploadType"
import { instance } from "../../hooks/instance"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { Context } from "../../context/Context"

const MajorCreate = () => {
  const navigate = useNavigate()
  const {token} = useContext(Context)
  const [loading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<UploadType | any>()
  const [name, setName] = useState<string>("")

  function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const data = { image: image.filename, name }
    instance.post("/stacks", data, {
      headers:{"Authorization":`Bearer ${token}`}
    }).then(() => {
      toast.success("Yaratildi")
      setIsLoading(false)
      setTimeout(() => navigate(-1),600)
    }).catch(() => {
      setIsLoading(false)
      toast.error("Xatolik bor")
    })
  }
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className="bg-white rounded-md p-5">
          <CreateCaption loading={loading} title="Yo'nalish qo'shish" />
          <div className="mt-[30px]">
            <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-5 !w-[60%]" size="large" name="name" placeholder="Yo'nalish nomini kiriting" allowClear />
            <UploadImg setImage={setImage} />
          </div>
        </div>
      </form>
    </>
  )
}

export default MajorCreate