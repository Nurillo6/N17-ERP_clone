import { Button, Modal } from 'antd'
import { useContext, useState, type FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Delete } from '../service/Actions'
import { Context } from '../context/Context'
import { DeleteOutlined } from '@ant-design/icons'

const DeleteModal:FC<{url:string}> = ({url}) => {
    const {id} = useParams()
    const {token} = useContext(Context)
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)

    function handleDelete() {
        setLoading(true)
        Delete(`${url}/${id}`, token, setOpenModal, setLoading, navigate)
    }
    return (
        <>
            <Button onClick={() => setOpenModal(true)} className="w-[40px] h-[30px] !bg-red-600" type="primary" size="middle"> <DeleteOutlined className="text-[20px]" /> </Button>
            <Modal confirmLoading={loading} title="Ishonchinggiz komilmi?" open={openModal} okText="O'chirish" cancelText="Bekor qilish" onCancel={() => setOpenModal(false)} onOk={handleDelete}></Modal>
        </>
    )
}

export default DeleteModal