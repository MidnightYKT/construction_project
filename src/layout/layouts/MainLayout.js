import React from 'react'
import { Layout, Typography, Breadcrumb } from 'antd'
import { Outlet } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { pathname } from '../pathname'

const { Content } = Layout
const { Text } = Typography

const MainLayout = ({ params }) => {
    const path = pathname(params)
    const breadcrumbs = useBreadcrumbs()
    console.log(breadcrumbs)
    return (
        <Layout>
            <Content className="m-6">
                <Breadcrumb className="mb-3 text-xl">
                    {breadcrumbs.map(({ breadcrumb }) => (
                        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <div className="bg-white w-full">
                    {/* {path !== '' ? (
                        <div className="mb-4">
                            <Text className="text-2xl">{path}</Text>
                            <div className="bg-black h-0.5 -mx-6 mt-4"></div>
                        </div>
                    ) : (
                        <></>
                    )} */}
                    <Outlet />
                </div>
            </Content>
        </Layout>
    )
}

export default MainLayout
