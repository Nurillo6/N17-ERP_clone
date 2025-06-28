import { ArrowLeftOutlined,EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Link, useNavigate, useParams } from "react-router-dom"
import DeleteModal from "../../components/DeleteModal"
import { Toaster } from "react-hot-toast"
import MoreItem from "../../components/MoreItem"
import { useContext, useState } from "react"
import type { GroupType } from "../../types/GroupType"
import getSingleData from "../../components/getSingleData"
import { Context } from "../../context/Context"
import { formatTime } from "../../hooks/formatTime"

const GroupMore = () => {
    const {groupId} = useParams()
    const navigate = useNavigate()
    const {token} = useContext(Context)
    const [groupData, setGroupData] = useState<GroupType | null>(null)

    getSingleData('/groups', groupId, token, setGroupData)
    return (
        <div className="p-5">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="bg-white p-5 rounded-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer hover:scale-[1.2] duration-300" onClick={() => navigate(-1)}> <ArrowLeftOutlined className="text-[25px]" /> </button>
                        <h2 className="text-[25px]">{groupData?.name ? groupData?.name : "Loading..."}</h2>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <DeleteModal url="/groups"/>
                        <Button onClick={() => navigate(`edit`)} className="w-[40px] h-[30px] " type="primary" size="middle"><EditOutlined className="text-[20px]" /></Button>
                    </div>
                </div>
                <div className="mt-5 flex justify-between">
                    <ul className="w-[49%] flex flex-col p-2 space-y-3 rounded-md border-[1px] border-slate-400">
                        <MoreItem label="ID" title={`#${groupId}`}/>
                         <Link className="inline-block text-[var(--clr-gold)] duration-300 hover:scale-[1.01]" to={`/major/${groupData?.stack.id}`}>
                            <MoreItem label="Yo'nalish" title={groupData?.stack.name}/>
                         </Link>
                        <Link className="inline-block text-[var(--clr-gold)] duration-300 hover:scale-[1.01]" to={"#"}>
                            <MoreItem label="Ustoz" title={`${groupData?.mainTeachers[0].name} ${groupData?.mainTeachers[0].surname}`}/>
                        </Link>
                         <Link className="inline-block text-[var(--clr-gold)] duration-300 hover:scale-[1.01]" to={"#"}>
                            <MoreItem label="Yordamchi ustoz" title={`${groupData?.supportTeachers[0].name} ${groupData?.supportTeachers[0].surname}`}/>
                         </Link>
                    </ul>
                    <ul className="w-[49%] p-2 space-y-3 rounded-md border-[1px] border-slate-400">
                        <MoreItem label="Xona" title={groupData?.room.name}/>
                        <MoreItem label="O'quvchi soni" title={groupData?.Students?.length}/>
                        <MoreItem label="Holati" title={groupData?.status ? "Faol" : "Faol emas"}/>
                        <MoreItem label="Yaratilgan vaqt" title={formatTime(groupData?.createdAt)}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GroupMore