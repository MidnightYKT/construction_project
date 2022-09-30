import { api } from './api'

export const login = api.injectEndpoints({
    endpoints: (build) => ({
        loginEmail: build.mutation({
            query(body) {
                return {
                    url: `users/login`,
                    method: 'POST',
                    body,
                }
            },
        }),
        login: build.mutation({
            query(body) {
                return {
                    url: `users/login`,
                    method: 'POST',
                    body,
                }
            },
        }),
        register: build.mutation({
            query(body) {
                return {
                    url: `users/`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const { useLoginEmailMutation, useLoginMutation, useRegisterMutation } = login
