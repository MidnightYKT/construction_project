import React, { useState, useRef } from 'react'
import { DownOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'
import { Button, ConfigProvider, Tag, Tooltip } from 'antd'
import arEGIntl from 'antd/es/locale/ru_RU'
import 'moment/locale/ru'

// import { useGetCityOrderQuery, useGetStatsCourierBoolQuery } from '../../../service/CompanyService'

const tableListDataSource = []

for (let i = 0; i < 10; i += 1) {
    tableListDataSource.push({
        key: i,
        name: 'AppName',
        weight: '7',
        degree: 4,
        timing: '22.12.2023',
        createdAt: 'ИП Игнатьева А.А.',
        estimate: '',
        negotiable: '5.100.000',
        paid: '2.000.000',

        // containers: Math.floor(Math.random() * 20),
        // creator: creators[Math.floor(Math.random() * creators.length)],
        // status: statusMap[Math.floor(Math.random() * 10) % 5],
        // createdAt: Date.now() - Math.floor(Math.random() * 100000),
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
                dataIndex: 'weight',
                key: 'weight',
                width: 100,
            },
            {
                title: 'Степень готовности фактическая, %',
                dataIndex: 'degree',
                key: 'degree',
                width: 100,
            },
            {
                title: 'Сроки выполнения',
                dataIndex: 'timing',
                key: 'timing',
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
        width: 110,
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
                dataIndex: 'estimate',
                key: 'estimate',
                width: 100,
            },
            {
                title: 'Договорная',
                dataIndex: 'negotiable',
                key: 'negotiable',
                width: 100,
            },
            {
                title: 'Оплачено (аванс)',
                dataIndex: 'paid',
                key: 'paid',
                width: 100,
            },
        ],
    },
    {
        title: 'Примечание',
        width: 120,
        key: 'option',
        valueType: 'option',
    },
]

const expandedRowRender = () => {
    const data = []
    for (let i = 0; i < 3; i += 1) {
        data.push({
            key: i,
            date: 'Планирование территории',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
        })
    }
    return (
        <ProTable
            columns={[
                { title: 'Наименование работ', dataIndex: 'date', key: 'date' },
                {
                    title: 'Удельные веса укрупненных конструктивных элементов по сб. №28, %',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Степень готовности фактическая, %',
                    dataIndex: 'upgradeNum',
                    key: 'upgradeNum',
                },
                { title: 'Сроки выполнения', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                { title: 'Подрядчики', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                { title: 'Всего по сметам', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                { title: 'Договорная', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                { title: 'Оплачено (аванс)', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                // {
                //     title: 'Action',
                //     dataIndex: 'operation',
                //     key: 'operation',
                //     valueType: 'option',
                //     // render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
                // },
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
                scroll={{ x: 800 }}
                pagination={{
                    pageSize: 5,
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
