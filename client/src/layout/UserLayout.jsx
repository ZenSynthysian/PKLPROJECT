import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';

function UserLayout() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Outlet></Outlet>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default UserLayout;
