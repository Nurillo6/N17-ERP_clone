import { useContext, useEffect, useState } from "react"
import { instance } from "../hooks/instance"
import { Context } from "../context/Context"
import {MoreOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { formatTime } from "../hooks/formatTime"
import type { MajorType } from "../types/MajorType"

export const getGroup = (url:string, stackId?:undefined | string) => {
    const [data, setData] = useState<any>([])
    const navigate = useNavigate()
    const {token} = useContext(Context)

    useEffect(() => {
        instance(url, {
            params:{stackId},
            headers:{"Authorization":`Bearer ${token}`}
        }).then(res => {
            res.data.data.sort((a:MajorType,b:MajorType) => a.id - b.id)
            res.data.data.map((item:any) => {
                item.createdAt = formatTime(item.createdAt)  
                item.key = item.id
                item.roomName = item.room.name
                item.status = item.status ? <Button className="!bg-green-500 !rounded-2xl !p-3" size="small" type="primary">Faol</Button> : <Button className="!bg-red-500 !rounded-2xl !p-3" size="small" type="primary">Faol emas</Button>
                item.action = <Button onClick={() => navigate(`${item.id}`)} className="w-[25px] h-[25px]"  size="small"> <MoreOutlined/> </Button>
                return item
            })
            setData(res.data.data)
        })
    },[])

    return data
}