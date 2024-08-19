import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import Menu from '../page/Menu';
import PjkDocument from '../page/PjkDocument';
import PjkDocumentLayout from '../component/PjkDocumentLayout';
import TablePage from '../page/TablePage';
import PjkDocumentTable from '../page/tablePage/PjkDocumentTable';

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
                path: '/pjk/test',
                element: <PjkDocumentLayout />,
            },
            {
                path: '/tablemenu',
                element: <TablePage />,
            },
            {
                path: '/tablemenu/pjk',
                element: <PjkDocumentTable />,
            },
        ],
    },
]);

export default router;
