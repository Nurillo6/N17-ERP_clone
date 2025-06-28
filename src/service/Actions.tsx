import toast from "react-hot-toast"
import { instance } from "../hooks/instance"
import type { Dispatch, SetStateAction } from "react"
import type { NavigateFunction } from "react-router-dom"


export const Delete = (url: string, token: string | null, setOpenModal: Dispatch<SetStateAction<boolean>>, setLoading: Dispatch<SetStateAction<boolean>>, navigate: NavigateFunction) => {
    instance.delete(url, { headers: { "Authorization": `Bearer ${token}` } }).then(() => {
        toast.success("O'chirildi")
        setTimeout(() => {
            setLoading(false)
            setOpenModal(false)
            navigate(-1)
        }, 1000)
    }).catch(() => {
        setTimeout(() => {
            setLoading(false)
            setOpenModal(false)
            toast.error("Xatolik bor!")
        }, 800)
    })
}

export const Create = (url:string, token:string | null, data:any, setIsLoading:Dispatch<SetStateAction<boolean>>, navigate:NavigateFunction) => {
    instance.post(url, data, {headers:{"Authorization":`Bearer ${token}`}}).then(() => {
        setIsLoading(false)
        toast.success("Qo'shildi")
        setTimeout(() => navigate(-1), 1000)
    })
}