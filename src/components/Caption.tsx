import { Button } from 'antd'
import { type FC, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const Caption:FC<{title:string, count:number, icon:ReactNode}> = ({title, count, icon}) => {
    const navigate = useNavigate()

    return (
        <div className="  flex items-center justify-between">
            <div>
                <h2 className="text-[20px] font-bold">{title}</h2>
                <span className="text-slate-400 text-[15px]">({count}) ta {title.toLowerCase()}</span>
            </div>
            <Button onClick={() => navigate('create')} icon={icon} size="large" type="primary">Qo'shish</Button>
        </div>
    )
}

export default Caption