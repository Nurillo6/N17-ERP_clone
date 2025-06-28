import { useEffect, type Dispatch, type SetStateAction } from "react"
import { instance } from "../hooks/instance"

const getSingleData = (url:string,id:string | undefined, token:string | null, setData:Dispatch<SetStateAction<any>>) => {
    useEffect(() => {
        if (id) {
            instance(`${url}/${id}`, { headers: { "Authorization": `Bearer ${token}` } }).then(res => setData(res.data))
        }
    }, [])
}

export default getSingleData