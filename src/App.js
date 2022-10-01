import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Login, Users, LoginPass } from './pages'
import ROUTES from './routes'
import Layout from './layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route element={<LoginPass />} path={ROUTES.LOGINPASS} />
                    <Route element={<Users />} path={ROUTES.USERS} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
