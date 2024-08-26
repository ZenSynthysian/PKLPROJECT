import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import CursorAnimation from '../component/CursorAnimation';

function UserLayout() {
    return (
        <>
            <div className="container relative">
                <CursorAnimation />
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default UserLayout;
