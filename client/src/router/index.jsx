import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import Menu from '../page/Menu';
import PjkDocument from '../page/PjkDocument';
import PjkDocumentLayout from '../component/PjkDocumentLayout';

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
        ],
    },
]);

export default router;
