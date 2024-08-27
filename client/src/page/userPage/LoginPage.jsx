import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            window.location.replace('/');
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            axios
                .post(`${import.meta.env.VITE_SERVER_API}api/loginuser`, data, { withCredentials: true })
                .then((response) => {
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('nik', response.data.nik);
                    window.location.replace('/');
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    }
                });
        } catch (error) {
            return console.log(error.message || error);
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="border-2 rounded-xl border-blue-500 p-3 flex flex-col gap-16 shadow-2xl bg-white">
                    <div className="text-3xl text-center p-10">LOG IN</div>
                    <form
                        className="flex flex-col gap-10 items-center"
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="NIK"
                            type="text"
                            name="nik"
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start"
                            />
                            <div className="p-1">
                                <input
                                    type="checkbox"
                                    className="cursor-grab accent-pink-500 appearance-auto"
                                    name="showPassword"
                                    id="showPassword"
                                    onClick={toggleShowPassword}
                                />{' '}
                                <label htmlFor="showPassword">Show Password</label>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Log In"
                            className="w-full border-2 rounded-full p-1 h-10 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-500 hover:to-blue-950  hover:h-12 transition-all ease-in-out duration-150"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
