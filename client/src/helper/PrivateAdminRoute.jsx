import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateAdminRoute({ children }) {
    let isAuthenticated = false;
    let isadmin = false;
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
        isAuthenticated = true;
        if (role == 'admin') {
            isadmin = true;
        }
    }

    if (isAuthenticated && isadmin) {
        return children;
    }

    return <Navigate to="/login" />;
}

PrivateAdminRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivateAdminRoute;
