import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className="flex justify-center pt-10 text-3xl">MENU DOCUMENT</div>
            <div className="grid grid-cols-4 p-7 pl-32 gap-4">
                <Link to={'pjk'}>
                    <div className="flex group flex-col justify-center items-center border-2 rounded-lg border-blue-500">
                        <div className="group-hover:bg-blue-100 transition-all duration-100 ease-in-out text-center group-hover:w-full rounded-lg">DOCUMENT PJK</div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Menu;
