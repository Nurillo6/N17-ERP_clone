import { useContext, useEffect, useState, type FormEvent } from "react"
import CreateCaption from "../../components/CreateCaption"
import { Input } from "antd"
import CustomSelect from "../../components/CustomSelect"
import ConvertSelect from "../../components/ConvertSelect"
import { useNavigate, useParams } from "react-router-dom"
import { Create } from "../../service/Actions"
import { Context } from "../../context/Context"
import { Toaster } from "react-hot-toast"

const GroupCreate = () => {
  const {id, groupId} = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const {token} = useContext(Context)
  const navigate = useNavigate()

  const [name, setName] = useState<string>("")
  const [stackId, setStackId] = useState<number | null>(id ? Number(id) : null)
  const [roomId, setRoomId] = useState<number | null>(null)
  const [teacherId, setTeacherId] = useState<number | null>(null)
  const [supportId, setSupportId] = useState<number | null>(null)

  const stackList = ConvertSelect("/stacks")
  const roomList = ConvertSelect("/rooms")
  const teachersList = ConvertSelect(`/teachers${stackId ? `?stackId=${stackId}&statusId=1` : ""}`, stackId)
  const supportList = ConvertSelect(`/teachers${stackId ? `?stackId=${stackId}&statusId=2` : ""}`, stackId)

  function handleCreate(e: FormEvent) {
    setLoading(true)
    e.preventDefault()
    const data = {
      name, stackId, roomId,
      status: true,
      mainTeacherIds: [teacherId],
      supportTeacherIds: [supportId]
    }
    Create("/groups", token, data,setLoading, navigate)
  }
  useEffect(() => {
    if(groupId){
      
    }
  },[])
  return (
    <div className="p-5">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} className="bg-white p-5 rounded-md">
        <CreateCaption title="Guruh qo'shish" loading={loading} />
        <div className="flex justify-between mt-5">
          <div className="w-[49%] flex flex-col gap-3">
            <CustomSelect disabled={id ? true : false} options={stackList} placeholder="Yo'nalish tanlang" setValue={setStackId} value={stackId} />
            <CustomSelect options={teachersList} placeholder="Ustoz tanlang" setValue={setTeacherId} value={teacherId} />
            <CustomSelect options={supportList} placeholder="Yordamchi ustoz tanlang" setValue={setSupportId} value={supportId} />
          </div>
          <div className="w-[49%] flex flex-col gap-3">
            <Input onChange={(e) => setName(e.target.value)} value={name} className="w-full" placeholder="Guruh nomi" size="large" />
            <CustomSelect options={roomList} placeholder="Xona tanlang" setValue={setRoomId} value={roomId} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default GroupCreate