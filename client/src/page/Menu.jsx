import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className="grid grid-cols-4 p-7 gap-4">
                <Link to={'pjk'}>
                    <div className="flex flex-col justify-center items-center border-2 rounded-lg border-blue-500">DOCUMENT PJK</div>
                </Link>
            </div>
        </>
    );
}

export default Menu;
