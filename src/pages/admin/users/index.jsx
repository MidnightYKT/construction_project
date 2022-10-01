import React, { useState, useRef } from 'react'
import { DownOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'
import { Button, ConfigProvider, Tag, Tooltip } from 'antd'
import arEGIntl from 'antd/es/locale/ru_RU'
import 'moment/locale/ru'

// import { useGetCityOrderQuery, useGetStatsCourierBoolQuery } from '../../../service/CompanyService'

const tableListDataSource = []
const creators = ['1', '2', '3', '4', '5']

const statusMap = {
    0: {
        color: 'blue',
        text: 'text1',
    },
    1: {
        color: 'green',
        text: 'text2',
    },
    2: {
        color: 'volcano',
        text: 'text3',
    },
    3: {
        color: 'red',
        text: 'text4',
    },
    4: {
        color: '',
        text: 'text5',
    },
}

for (let i = 0; i < 10; i += 1) {
    tableListDataSource.push({
        key: i,
        name: 'AppName',
        containers: Math.floor(Math.random() * 20),
        creator: creators[Math.floor(Math.random() * creators.length)],
        status: statusMap[Math.floor(Math.random() * 10) % 5],
        createdAt: Date.now() - Math.floor(Math.random() * 100000),
    })
}

const columns = [
    {
        title: 'Наименование работ',
        width: 120,
        dataIndex: 'name',
        render: (_) => <a>{_}</a>,
    },
    {
        title: 'Выполнение',
        children: [
            {
                title: 'Удельные веса укрупненных конструктивных элементов по сб. №28, %',
                dataIndex: 'years',
                key: 'years',
                width: 100,
            },
            {
                title: 'Степень готовности фактическая, %',
                dataIndex: 'months',
                key: 'months',
                width: 100,
            },
            {
                title: 'Сроки выполнения',
                dataIndex: 'months',
                key: 'months',
                width: 100,
            },
        ],
    },
    {
        title: (
            <>
                Подрядчики
                <Tooltip placement="top" title="Информация">
                    <QuestionCircleOutlined style={{ marginInlineStart: 4 }} />
                </Tooltip>
            </>
        ),
        width: 140,
        key: 'since',
        dataIndex: 'createdAt',
        valueType: 'date',
        // sorter: (a, b) => a.createdAt - b.createdAt,
    },
    {
        title: 'Стоимость, руб',
        children: [
            {
                title: 'Всего по сметам',
                dataIndex: 'years',
                key: 'years',
                width: 100,
            },
            {
                title: 'Договорная',
                dataIndex: 'months',
                key: 'months',
                width: 100,
            },
            {
                title: 'Оплачено (аванс)',
                dataIndex: 'months',
                key: 'months',
                width: 100,
            },
        ],
    },
    {
        title: 'Примечание',
        width: 120,
        key: 'option',
        valueType: 'option',
        // render: () => [
        //     <a key="1">链路</a>,
        //     <a key="2">报警</a>,
        //     <a key="3">监控</a>,
        //     <a key="4">
        //         <EllipsisOutlined />
        //     </a>,
        // ],
    },
]

const expandedRowRender = () => {
    const data = []
    for (let i = 0; i < 3; i += 1) {
        data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
        })
    }
    return (
        <ProTable
            columns={[
                { title: 'Date', dataIndex: 'date', key: 'date' },
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                {
                    title: 'Action',
                    dataIndex: 'operation',
                    key: 'operation',
                    valueType: 'option',
                    render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
                },
            ]}
            headerTitle={false}
            search={false}
            options={false}
            dataSource={data}
            pagination={false}
        />
    )
}

const Users = () => {
    const [open, setOpen] = useState()
    const [dataChange, setDataChange] = useState()
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef()

    return (
        <ConfigProvider locale={arEGIntl}>
            <ProTable
                columns={columns}
                request={(params, sorter, filter) => {
                    // 表单搜索项会从 params 传入，传递给后端接口。
                    console.log(params, sorter, filter)
                    return Promise.resolve({
                        data: tableListDataSource,
                        success: true,
                    })
                }}
                rowKey="key"
                pagination={{
                    pageSize: 5,
                    showQuickJumper: true,
                }}
                expandable={{ expandedRowRender }}
                search={false}
                dateFormatter="string"
                headerTitle="Пользователи"
                options={false}
            />
        </ConfigProvider>
    )
}

export default Users
