import React, { useState } from 'react'
import { Typography, Form, Input, Button, Modal, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'
import './login.css'

import ROUTES from '../../routes'
import { useLoginEmailMutation, useLoginMutation } from '../../service/AuthService'

const { Text } = Typography

const Login = () => {
    const navigate = useNavigate()

    const [postLoginEmail] = useLoginEmailMutation()

    const onFinish = (values) => {
        postLoginEmail({
            email: values.email,
        }).then((res) => {
            if (res?.error) {
                message.error(res?.error?.data?.errors[0])
            } else {
                cookie.set('jwttoken', res.data.token)
                // window.location.href = ROUTES.LOGINPASS
                navigate(ROUTES.LOGINPASS)
            }
        })
    }

    return (
        <div>
            <div className="background_style">
                <div className="form h-64">
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
                                placeholder="Введите ваш Email"
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
                            to={ROUTES.LOGINPASS}
                            style={{
                                marginTop: 12,
                                float: 'left',
                                marginBottom: 24,
                            }}
                        >
                            Имеется пароль?
                        </Link>
                        {/* <Button
                            style={{
                                background: '#09304A',
                                width: '100%',
                                borderRadius: 4,
                                color: 'white',
                            }}
                            htmlType="submit"
                            size="large"
                            onClick={() => navigate(ROUTES.REGISTRATION)}
                        >
                            Зарегистрироваться
                        </Button> */}
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
