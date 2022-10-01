import ROUTES from '../../routes'
import { BsPeople } from 'react-icons/bs'
import { GiPlagueDoctorProfile } from 'react-icons/gi'

const ADMIN = (navigate) => {
    return [
        {
            label: 'Пользователи',
            key: 'submenu-2',
            icon: <BsPeople />,
            onClick: () => navigate(ROUTES.USERS),
        },
    ]
}

export default ADMIN
