import { Select } from "antd"
import type { ChangeEvent, FC } from "react"
import type { SelectType } from "../types/SelectType"

const CustomSelect:FC<SelectType> = ({options, extraClass, placeholder, value, setValue, disabled}) => {
    function onChange(e:ChangeEvent<HTMLSelectElement>){
        setValue(e)
    }
    return (
        <Select
            disabled={disabled}
            onChange={onChange}
            value={value}
            className={`${extraClass}`}
            showSearch
            allowClear
            size="large"
            style={{ width: "100%" }}
            placeholder={placeholder}
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
    )
}

export default CustomSelect