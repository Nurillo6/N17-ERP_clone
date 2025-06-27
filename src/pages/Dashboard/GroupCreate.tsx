import { useEffect, useState } from "react"
import CreateCaption from "../../components/CreateCaption"
import { Input} from "antd"
import CustomSelect from "../../components/CustomSelect"
import ConvertSelect from "../../components/ConvertSelect"

const GroupCreate = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [stackId, setStackId] = useState<number | null>(null)
  const [roomId, setRoomId] = useState<number | null>(null)
  const [teacherId, setTeacherId] = useState<number | null>(null)
  const [supportId, setSupportId] = useState<number | null>(null)
  const stackList = ConvertSelect("/stacks")
  const roomList = ConvertSelect("/rooms")
  const teachersList = ConvertSelect(`/teachers${stackId ? `?stackId=${stackId}` : ""}`, stackId)
  const supportList = ConvertSelect(`/teachers${stackId ? `?stackId=${stackId}` : ""}`, stackId)
  
  return (
    <div className="p-5">
      <form className="bg-white p-5 rounded-md">
        <CreateCaption title="Guruh qo'shish" loading={loading} />
        <div className="flex justify-between">
          <div className="w-[49%]">
            <Input onChange={(e) => setName(e.target.value)} value={name} className="w-full" placeholder="Guruh nomi" size="large" />
            <CustomSelect options={stackList} placeholder="Yo'nalish tanlang" setValue={setStackId} value={stackId}/>
            <CustomSelect options={roomList} placeholder="Xona tanlang" setValue={setRoomId} value={roomId}/>
          </div>
          <div className="w-[49%]">
            <CustomSelect options={teachersList} placeholder="Ustoz tanlang" setValue={setTeacherId} value={teacherId}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GroupCreate