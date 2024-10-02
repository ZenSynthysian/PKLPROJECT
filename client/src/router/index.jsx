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
import MenuPjk from '../page/MenuPjk';
import MenuPjkInput from '../page/MenuPjkInput';
import MenuTablePjk from '../page/tablePage/MenuTablePjk';
import PjkTahunDocumentTable from '../page/tablePage/PjkTahunDocumentTable';

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
                path: '/pjk/menu',
                element: (
                    <PrivateRoute>
                        <MenuPjk />
                    </PrivateRoute>
                ),
            },
            {
                path: '/pjk/menu/baru',
                element: (
                    <PrivateRoute>
                        <MenuPjkInput />
                    </PrivateRoute>
                ),
            },
            {
                path: '/pjk/menu/:tahunPjk',
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
                path: '/tablemenu/pjk/tahun',
                element: (
                    <PrivateRoute>
                        <MenuTablePjk />
                    </PrivateRoute>
                ),
            },
            {
                path: '/tablemenu/pjk/tahun/semua/:page',
                element: (
                    <PrivateRoute>
                        <PjkDocumentTable />
                    </PrivateRoute>
                ),
            },
            {
                path: '/tablemenu/pjk/tahun/:tahun/:page',
                element: (
                    <PrivateRoute>
                        <PjkTahunDocumentTable />
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
                path: '/userconfiguration/:page',
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
                path: '/datapribadiconfiguration/:page',
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
                path: '/datakadivconfiguration/:page',
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
