import ROUTES from '../routes'

export const pathname = (params) => {
    switch (params.pathname) {
        case ROUTES.USERS:
            return 'Информация'
        default:
            return ''
    }
}
