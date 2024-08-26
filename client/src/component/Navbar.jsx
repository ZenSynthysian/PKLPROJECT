import { useState } from 'react';
import { Link } from 'react-router-dom';
import ptdImage from './../assets/ptd.png';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed flex z-20 no-printme">
                <div
                    className={`fixed transition-all backdrop-blur-sm duration-100 flex flex-col items-center ${
                        open ? 'w-80' : 'w-0'
                    } border-r-4 border-blue-700 h-screen overflow-scroll scrollbar-hide`}>
                    <div>
                        <img
                            src={ptdImage}
                            alt=""
                        />
                    </div>
                    <div className="group w-full flex justify-center items-center">
                        <Link
                            to={'/'}
                            className="flex border-b-4 w-24 group-hover:w-full p-5 items-center ease-in-out transition-all duration-100 hover:bg-blue-400 hover:bg-opacity-30 justify-center border-blue-400">
                            <div>
                                <span>Menu</span>
                            </div>
                        </Link>
                    </div>
                    <div className="group w-full flex justify-center items-center">
                        <Link
                            to={'/tablemenu'}
                            className="flex border-b-4 w-24 group-hover:w-full p-5 items-center ease-in-out transition-all duration-100 hover:bg-blue-400 hover:bg-opacity-30 justify-center border-blue-400">
                            <div>
                                <span>Table</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`fixed ${open ? 'translate-x-[22rem]' : 'translate-x-[2rem]'} transition-all duration-100 translate-y-5 text-2xl border-2 rounded border-blue-500`}>
                        <div className={`${open ? '' : 'rotate-180'} p-3 flex justify-center items-center`}>
                            <span>{'<'}</span>
                        </div>
                    </button>
                </div>
            </div>
            {open ? (
                <>
                    <button
                        className="absolute bg-transparent z-10 w-screen h-[100vh]"
                        onClick={() => setOpen(false)}></button>
                </>
            ) : null}
        </>
    );
}

export default Navbar;
