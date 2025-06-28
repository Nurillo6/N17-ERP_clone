import { ArrowLeftOutlined, EditOutlined} from "@ant-design/icons"
import { useContext, useState } from "react"
import type { MajorType } from "../../types/MajorType"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../../context/Context"
import { Button } from "antd"
import MoreItem from "../../components/MoreItem"
import { formatTime } from "../../hooks/formatTime"
import { API } from "../../hooks/getEnv"
import { Toaster } from "react-hot-toast"
import GroupData from "../../components/GroupData"
import DeleteModal from "../../components/DeleteModal"
import getSingleData from "../../components/getSingleData"

const MajorMore = () => {
  const { id } = useParams()
  const { token } = useContext(Context)
  const [singleMajor, setSingleMajor] = useState<MajorType>()
  const navigate = useNavigate()
  getSingleData('/stacks', id, token, setSingleMajor)
  return (
    <>
      <div className="p-5">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="p-5 bg-white rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <button className="cursor-pointer" onClick={() => navigate(-1)}> <ArrowLeftOutlined className="text-[25px]" /> </button>
              <h2 className="text-[22px] font-semibold">{singleMajor?.name ? singleMajor?.name : "Loading..."}</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <DeleteModal url="/stacks"/>
              <Button onClick={() => navigate(`edit`)} className="w-[40px] h-[30px] " type="primary" size="middle"><EditOutlined className="text-[20px]" /></Button>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <ul className="w-[48%] space-y-[10px] p-3 rounded-md border-[1px] border-slate-400">
              <MoreItem label="#ID" title={singleMajor?.id} />
              <MoreItem label="Nomi" title={singleMajor?.name} />
              <MoreItem label="Yaratilgan vaqt" title={formatTime(singleMajor?.createdAt)} />
            </ul>
            <ul className="w-[48%] p-3 rounded-md border-[1px] border-slate-400">
              <li>
                <img className="object-contain h-[200px]" src={`${API}/file/${singleMajor?.image}`} alt="" width={300} height={300} />
              </li>
            </ul>
          </div>
        </div>
        <GroupData id={id}/>
      </div>
    </>
  )
}

export default MajorMore