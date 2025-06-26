import  { type FC } from 'react'

const MoreItem:FC<{label:string, title:string | number | undefined}> = ({label, title}) => {
    return (
        <li>
            <span className="text-[15px] text-slate-400">{label}</span>
            <p>{title}</p>
        </li>
    )
}

export default MoreItem