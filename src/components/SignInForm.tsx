import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Toaster } from 'react-hot-toast';
import { Login } from '../service/Auth';
import { Context } from '../context/Context';
import { useCookies } from 'react-cookie';

export interface ValueType { username: string, password: string }

const SignInForm: React.FC = () => {
    const { setToken } = useContext(Context)
    const [_cookie, setCookie] = useCookies(['token'])
    const [disable, setDisable] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onFinish = (values: ValueType) => {
        setIsLoading(true)
        Login(values, setIsLoading, setToken, setCookie)
    };
    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value.length >= 8 && e.target.value.length <= 16) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Form
                autoComplete='off'
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Iltimos foydalanuvchi nomini kiriting!' }]}
                >
                    <Input name='username' allowClear size='large' prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password onChange={handlePasswordChange} minLength={8} name='password' allowClear size='large' prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button disabled={disable} loading={isLoading} size='large' block type="primary" htmlType="submit">
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignInForm;