import React from 'react'
import { Layout, Menu, Divider } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import ROUTES from '../routes'
import MainLayout from './layouts/MainLayout'
import Admin from './menuItems'

const { Sider } = Layout

const MyLayout = () => {
    const params = useLocation()
    const navigate = useNavigate()

    return (
        <>
            {params.pathname == ROUTES.LOGIN || params.pathname == ROUTES.LOGINPASS ? (
                <div>
                    <Outlet />
                </div>
            ) : (
                <Layout className="min-h-screen">
                    <Sider
                        width={250}
                        breakpoint="lg"
                        collapsedWidth="0"
                        className="bg-white w-full"
                        style={{ background: '#09304A' }}
                    >
                        <Menu
                            mode="inline"
                            items={Admin(navigate)}
                            className="bg-slate-400 mt-5"
                            theme="dark"
                        />
                        <Divider className="bg-white" />
                    </Sider>
                    <MainLayout params={params} />
                </Layout>
            )}
        </>
    )
}

export default MyLayout
