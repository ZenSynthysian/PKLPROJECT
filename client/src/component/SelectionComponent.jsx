import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SelectionComponent(props) {
    return (
        <>
            <Link
                to={props.link}
                onClick={props.onClick}>
                <div
                    className={`flex group flex-col justify-center items-center border-2 w-[15rem] bg-white rounded-lg ${
                        props.greenColor == true ? `border-[#0dff00]` : `border-blue-500`
                    } shadow-2xl`}>
                    <img
                        src={props.image}
                        alt={props.tittle}
                        className="w-[8rem] p-2"
                    />
                    <div
                        className={`text-white bg-gradient-to-r from-blue-500 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-950 transition-all duration-100 ease-in-out text-center w-full rounded-b-lg`}>
                        {props.tittle}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SelectionComponent;

SelectionComponent.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    tittle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    greenColor: PropTypes.bool,
};
