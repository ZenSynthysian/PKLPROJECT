import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
    let isAuthenticated = false;
    const token = localStorage.getItem('token');

    if (token) {
        isAuthenticated = true;
    }

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivateRoute;
