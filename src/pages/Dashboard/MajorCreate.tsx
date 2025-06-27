import { Input } from "antd"
import CreateCaption from "../../components/CreateCaption"
import UploadImg from "../../components/UploadImg"
import { useContext, useEffect, useState, type FormEvent } from "react"
import type { UpdateImgType, UploadType } from "../../types/UploadType"
import { instance } from "../../hooks/instance"
import { useNavigate, useParams } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { Context } from "../../context/Context"
import { API } from "../../hooks/getEnv"

const MajorCreate = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { token } = useContext(Context)
  const [loading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<UploadType | any>()
  const [name, setName] = useState<string>("")
  const [updateData, setUpdateData] = useState<UpdateImgType>()

  function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const data = { image: image.filename, name }
    if (id) {
      instance.patch(`/stacks/${id}`, data, {headers: { "Authorization": `Bearer ${token}` }}).then(() => {
        toast.success("O'zgartirildi")
        setIsLoading(false)
        setTimeout(() => navigate(-1), 600)
      }).catch(() => {
        setIsLoading(false)
        toast.error("Xatolik bor")
      })
    }
    else {
      instance.post("/stacks", data, {
        headers: { "Authorization": `Bearer ${token}` }
      }).then(() => {
        toast.success("Yaratildi")
        setIsLoading(false)
        setTimeout(() => navigate(-1), 600)
      }).catch(() => {
        setIsLoading(false)
        toast.error("Xatolik bor")
      })
    }
  }

  useEffect(() => {
    if (id) {
      instance(`/stacks/${id}`, { headers: { "Authorization": `Bearer ${token}` } }).then(res => {
        const type = res.data.image.split(".")[res.data.image.split(".").length - 1]
        const data: UpdateImgType = {
          uid: '-1',
          name: `image.${type}`,
          status: "done",
          url: `${API}/file/${res.data.image}`,
        }
        setUpdateData(data)
        setName(res.data.name)
      })
    }
  }, [])
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className="bg-white rounded-md p-5">
          <CreateCaption loading={loading} title={id ? "Yo'nalish tahrirlash" : "Yo'nalish qo'shish"} />
          <div className="mt-[30px]">
            <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-5 !w-[60%]" size="large" name="name" placeholder="Yo'nalish nomini kiriting" allowClear />
            <UploadImg updateData={updateData} setImage={setImage} />
          </div>
        </div>
      </form>
    </>
  )
}

export default MajorCreate