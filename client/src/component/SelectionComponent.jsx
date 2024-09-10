import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SelectionComponent(props) {
    return (
        <>
            <Link to={props.link}>
                <div className="flex group flex-col justify-center items-center border-2 w-[15  rem] bg-white rounded-lg border-blue-500 shadow-2xl">
                    <img
                        src={props.image}
                        alt={props.tittle}
                    />
                    <div className="text-white bg-gradient-to-r from-blue-500 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-950 transition-all duration-100 ease-in-out text-center w-full rounded-b-lg">
                        {props.tittle}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SelectionComponent;

SelectionComponent.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
    tittle: PropTypes.string.isRequired,
};
