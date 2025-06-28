import type { Dispatch, SetStateAction } from "react";

export interface SelectType{
    options:Array<{label:string, value:string | number}>,
    extraClass?:string,
    placeholder:string,
    value:any,
    setValue:Dispatch<SetStateAction<any>>,
    disabled?:boolean
}