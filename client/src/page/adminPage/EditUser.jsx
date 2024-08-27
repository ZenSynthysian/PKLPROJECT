import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditUser() {
    const { id } = useParams();
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        try {
            axios
                .get(`${import.meta.env.VITE_SERVER_API}api/user/${id}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    setNama(response.data.data.name);
                    setNik(response.data.data.nik);
                    setRole(response.data.data.role);
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    }
                });
        } catch (error) {
            return console.log(error.message || error);
        }
    }, []);

    function handleChangeNama(e) {
        setNama(e.target.value);
    }

    function handleChangeNik(e) {
        setNik(e.target.value);
    }

    function handleChangeRole(e) {
        setRole(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            axios
                .put(`${import.meta.env.VITE_SERVER_API}api/user/${id}`, data, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data);
                    window.location.replace('/userconfiguration');
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

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="border-2 rounded-xl border-blue-500 p-3 flex flex-col gap-16 shadow-2xl bg-white">
                    <div className="text-3xl text-center p-10">Edit User</div>
                    <form
                        className="flex flex-col gap-10 items-center"
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="Nama"
                            type="text"
                            value={nama}
                            name="name"
                            onChange={handleChangeNama}
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <input
                            placeholder="NIK"
                            type="text"
                            value={nik}
                            name="nik"
                            onChange={handleChangeNik}
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <div className="flex gap-3 justify-start w-full">
                            <span>Role: </span>
                            <select
                                name="role"
                                id=""
                                value={role}
                                onChange={handleChangeRole}
                                className="outline-blue-600">
                                <option value="user">User</option>
                                <option
                                    value="admin"
                                    className="text-pink-800">
                                    Admin
                                </option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full border-2 rounded-full p-1 h-10 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-500 hover:to-blue-950  hover:h-12 transition-all ease-in-out duration-150"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditUser;
