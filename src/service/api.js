import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import cookie from 'js-cookie'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_KEY,
    prepareHeaders: (headers) => {
        const token = cookie.get('jwttoken')
        if (token) {
            headers.set('authorization', `Token ${token}`)
        }
        return headers
    },
})

export const api = createApi({
    reducerPath: 'splitApi',

    baseQuery: baseQuery,

    // tagTypes: ['Types'],

    endpoints: () => ({}),
})
