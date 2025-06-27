import { useContext, useEffect, useState } from "react"
import { instance } from "../hooks/instance"
import { Context } from "../context/Context"

const ConvertSelect = (url:string, id?:number | null) => {
    const [data, setData] = useState<any[]>([])
    const {token} = useContext(Context)

    useEffect(() => {
        instance(url, {headers:{"Authorization":`Bearer ${token}`}}).then(res => {
           setData(res.data.data.map((item:any) => {
                let list = {
                    label:item.name,
                    value:item.id
                }
                return list
            }))
        })
    },[id])
    return data
}

export default ConvertSelect