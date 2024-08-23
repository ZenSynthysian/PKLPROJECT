import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import Menu from '../page/Menu';
import PjkDocument from '../page/PjkDocument';
import PjkDocumentLayout from '../component/PjkDocumentLayout';
import TablePage from '../page/TablePage';
import PjkDocumentTable from '../page/tablePage/PjkDocumentTable';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Menu />,
            },
            {
                path: '/pjk',
                element: <PjkDocument />,
            },
            {
                path: '/pjk/detail/:nomorpjkparam',
                element: <PjkDocumentLayout />,
            },
            {
                path: '/tablemenu',
                element: <TablePage />,
            },
            {
                path: '/tablemenu/pjk/',
                element: <PjkDocumentTable />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
