import React, { useState } from 'react'
import { Typography, Form, Input, Button, Modal, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'
import './login.css'

import ROUTES from '../../routes'
import { useLoginEmailMutation, useLoginMutation } from '../../service/AuthService'

const { Text } = Typography

const LoginPass = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState()

    const [postLoginEmail] = useLoginEmailMutation()

    const onFinish = (values) => {
        postLoginEmail({
            email: values.email,
            password: values.password,
        }).then((res) => {
            if (res?.error) {
                message.error(res?.error?.data?.errors[0])
            } else {
                cookie.set('jwttoken', res.data.token)
                navigate(ROUTES.USERS)
            }
        })
    }

    return (
        <div>
            <div className="background_style">
                <div className="form h-96">
                    <Text
                        style={{
                            fontWeight: 400,
                            fontSize: 18,
                            fontStyle: 'normal',
                        }}
                    >
                        АВТОРИЗАЦИЯ
                    </Text>
                    <Form style={{ width: '100%' }} onFinish={onFinish}>
                        <Form.Item
                            label={<Text style={{ fontWeight: 600, fontSize: 16 }}>Email</Text>}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите ваш Email',
                                },
                            ]}
                            labelCol={{ span: 24 }}
                        >
                            <Input
                                style={{
                                    borderRadius: 4,
                                }}
                                placeholder="Логин"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            label={<Text style={{ fontWeight: 600, fontSize: 16 }}>Пароль</Text>}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите ваш Пароль',
                                },
                            ]}
                            labelCol={{ span: 24 }}
                        >
                            <Input
                                style={{
                                    borderRadius: 4,
                                }}
                                placeholder="Логин"
                                size="large"
                            />
                        </Form.Item>
                        <Button
                            style={{
                                background: '#0D6EFD',
                                width: '100%',
                                borderRadius: 4,
                            }}
                            type="primary"
                            htmlType="submit"
                            size="large"
                            // onClick={info}
                        >
                            Войти
                        </Button>
                        <Link
                            to={ROUTES.LOGIN}
                            style={{
                                marginTop: 12,
                                float: 'right',
                                marginBottom: 24,
                            }}
                        >
                            Забыли пароль?
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPass
