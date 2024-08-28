import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import Menu from '../page/Menu';
import PjkDocument from '../page/PjkDocument';
import PjkDocumentLayout from '../component/PjkDocumentLayout';
import TablePage from '../page/TablePage';
import PjkDocumentTable from '../page/tablePage/PjkDocumentTable';
import NotFound from '../page/NotFound';
import LoginPage from '../page/userPage/LoginPage';
import PrivateRoute from '../helper/PrivateRoute';
import AdminMenu from '../page/adminPage/AdminMenu';
import PrivateAdminRoute from '../helper/PrivateAdminRoute';
import UserConfiguration from '../page/adminPage/UserConfiguration';
import UserInput from '../page/adminPage/UserInput';
import EditUser from '../page/adminPage/EditUser';
import DataPribadiConfiguration from '../page/adminPage/DataPribadiConfiguration';
import EditDataPribadi from '../page/adminPage/EditDataPribadi';
import DataPribadiInput from '../page/adminPage/DataPribadiInput';
import DataKadivConfiguration from '../page/adminPage/DataKadivConfiguration';
import EditDataKadiv from '../page/adminPage/EditDataKadiv';
import DataKadivInput from '../page/adminPage/DataKadivInput';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoute>
                        <Menu />
                    </PrivateRoute>
                ),
            },
            {
                path: '/pjk',
                element: (
                    <PrivateRoute>
                        <PjkDocument />
                    </PrivateRoute>
                ),
            },
            {
                path: '/pjk/detail/:nomorpjkparam',
                element: (
                    <PrivateRoute>
                        <PjkDocumentLayout />
                    </PrivateRoute>
                ),
            },
            {
                path: '/tablemenu',
                element: (
                    <PrivateRoute>
                        <TablePage />
                    </PrivateRoute>
                ),
            },
            {
                path: '/tablemenu/pjk/',
                element: (
                    <PrivateRoute>
                        <PjkDocumentTable />
                    </PrivateRoute>
                ),
            },
            {
                path: '*',
                element: <NotFound />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/adminmenu',
                element: (
                    <PrivateAdminRoute>
                        <AdminMenu />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/userconfiguration',
                element: (
                    <PrivateAdminRoute>
                        <UserConfiguration />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/userconfiguration/newuser',
                element: (
                    <PrivateAdminRoute>
                        <UserInput />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/userconfiguration/edituser/:id',
                element: (
                    <PrivateAdminRoute>
                        <EditUser />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datapribadiconfiguration',
                element: (
                    <PrivateAdminRoute>
                        <DataPribadiConfiguration />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datapribadiconfiguration/editdatapribadi/:id',
                element: (
                    <PrivateAdminRoute>
                        <EditDataPribadi />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datapribadiconfiguration/newdatapribadi',
                element: (
                    <PrivateAdminRoute>
                        <DataPribadiInput />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datakadivconfiguration',
                element: (
                    <PrivateAdminRoute>
                        <DataKadivConfiguration />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datakadivconfiguration/editdatakadiv/:id',
                element: (
                    <PrivateAdminRoute>
                        <EditDataKadiv />
                    </PrivateAdminRoute>
                ),
            },
            {
                path: '/datakadivconfiguration/newdatakadiv/',
                element: (
                    <PrivateAdminRoute>
                        <DataKadivInput />
                    </PrivateAdminRoute>
                ),
            },
        ],
    },
]);

export default router;
