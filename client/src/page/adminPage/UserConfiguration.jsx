import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function UserConfiguration() {
    const [table, setTable] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                await axios
                    .get(`${import.meta.env.VITE_SERVER_API}api/user`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                    .then((response) => {
                        setTable(response.data.data);
                    })
                    .catch((error) => {
                        if (error.response) {
                            alert(error.response.data.message);
                        }
                    });
            } catch (error) {
                console.log(error.message || error);
            }
        }
        fetchData();
    }, [table]); // Dependency array includes searchValue

    async function handleDelete(nomor_pjk) {
        try {
            Swal.fire({
                title: 'Data akan dihapus permanen?',
                showDenyButton: true,
                confirmButtonText: 'Hapus',
                denyButtonText: `Batal`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${import.meta.env.VITE_SERVER_API}api/user/${nomor_pjk}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
                    Swal.fire('Data Terhapus!', '', 'success');

                    // Update the table state to reflect the deletion
                    setTable((prevTable) => prevTable.filter((item) => item.nomor_pjk !== nomor_pjk));
                    window.location.replace('/userconfiguration');
                } else if (result.isDenied) {
                    Swal.fire('Data Batal di Hapus', '', 'info');
                }
            });
        } catch (error) {
            console.log(error.message || error);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center pt-32 overflow-auto pl-32 pr-32 w-full">
                <div className="flex justify-center w-full p-6">
                    <Link
                        to={'/userconfiguration/newuser'}
                        className="border-2 p-1 bg-white text-center border-blue-500 rounded w-64 cursor-grab hover:bg-blue-50 transition-all ease-in-out duration-100">
                        <span>New User</span>
                    </Link>
                </div>
                <div className="border-2 border-blue-400 bg-white">
                    <table id="table-main">
                        <thead className="bg-indigo-950 text-gray-300">
                            <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">No.</th>
                            <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Nama</th>
                            <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Nik</th>
                            <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Role</th>
                            <th className="p-1 whitespace-nowrap">Tools</th>
                        </thead>
                        <tbody>
                            {/* <tr className="bg-indigo-950 text-gray-300"> */}
                            {/* </tr> */}

                            {/* t body area */}
                            {table.map((data, index) => {
                                return (
                                    <tr
                                        className="transition-all duration-100 ease-in-out hover:bg-gray-200"
                                        key={data.id}>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{index + 1}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.name}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.nik}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.role}</td>
                                        <td className="border-blue-400 whitespace-nowrap text-center flex gap-3">
                                            <Link
                                                to={`/userconfiguration/edituser/${data?.id}`}
                                                className="p-3 hover:bg-indigo-950 hover:text-white transition-all ease-in-out duration-100">
                                                <div>Edit</div>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(data?.id)}
                                                className="p-3 hover:bg-indigo-950 bg-transparent hover:text-white transition-all ease-in-out duration-100">
                                                <div className="text-red-600">Delete</div>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>{' '}
        </>
    );
}

export default UserConfiguration;
