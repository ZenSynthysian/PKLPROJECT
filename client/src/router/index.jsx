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
        ],
    },
]);

export default router;
