import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function DataPribadiConfiguration() {
    const { page } = useParams();
    const [table, setTable] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [currentPageGroup, setCurrentPageGroup] = useState(0);
    const pagesPerGroup = 8;

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/datauser?page=${page}`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setTable(response.data.data.data);

            // Membuat array totalPage
            const totalPages = response.data.data.last_page;
            setTotalPage(Array.from({ length: totalPages }, (_, index) => index + 1));
        } catch (error) {
            console.log(error.message || error);
        }
    }, [page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const startPage = currentPageGroup * pagesPerGroup;
    const endPage = Math.min(startPage + pagesPerGroup, totalPage.length);

    const handlePrev = () => {
        if (currentPageGroup > 0) {
            setCurrentPageGroup(currentPageGroup - 1);
        }
    };

    const handleNext = () => {
        if (endPage < totalPage.length) {
            setCurrentPageGroup(currentPageGroup + 1);
        }
    };

    async function handleDelete(nomor_pjk) {
        try {
            const result = await Swal.fire({
                title: 'Data akan dihapus permanen?',
                showDenyButton: true,
                confirmButtonText: 'Hapus',
                denyButtonText: `Batal`,
            });

            if (result.isConfirmed) {
                await axios.delete(`${import.meta.env.VITE_SERVER_API}api/datauser/${nomor_pjk}`, {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                Swal.fire('Data Terhapus!', '', 'success');

                // Re-fetch data
                fetchData();
            } else if (result.isDenied) {
                Swal.fire('Data Batal di Hapus', '', 'info');
            }
        } catch (error) {
            console.log(error.message || error);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center pt-32 overflow-auto pl-32 pr-32 w-screen">
                <div className="flex justify-center w-full p-6">
                    <Link
                        to={'/datapribadiconfiguration/newdatapribadi'}
                        className="border-2 p-1 bg-white text-center border-blue-500 rounded w-64 cursor-grab hover:bg-blue-50 transition-all ease-in-out duration-100">
                        <span>New Data</span>
                    </Link>
                </div>
                <div className="border-2 border-blue-400 bg-white">
                    <table id="table-main">
                        <thead className="bg-indigo-950 text-gray-300">
                            <th className="p-3 border-r-2 border-blue-400 whitespace-nowrap">No.</th>
                            <th className="p-1 w-[12rem] border-r-2 border-blue-400 whitespace-nowrap">Nama</th>
                            <th className="p-1 w-[12rem] border-r-2 border-blue-400 whitespace-nowrap">No Rekening</th>
                            <th className="p-1 w-[12rem] border-r-2 border-blue-400 whitespace-nowrap">Nama & Alamat Bank</th>
                            <th className="p-1 w-[12rem] border-r-2 border-blue-400 whitespace-nowrap">Unit Organisasi</th>
                            <th className="p-1 w-[12rem] whitespace-nowrap">Tools</th>
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
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.nama}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.no_rek}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.nama_alamat_bank}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data?.unit_organisasi}</td>
                                        <td className="border-blue-400 whitespace-nowrap text-center flex gap-3">
                                            <Link
                                                to={`/datapribadiconfiguration/editdatapribadi/${data?.id}`}
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
                <div className="flex">
                    <button
                        className="rounded-full border-pink-700 border-2 w-10 h-10 text-2xl text-pink-700 m-5 bg-white text-center items-center justify-center"
                        onClick={handlePrev}
                        hidden={currentPageGroup === 0}>
                        {'<'}
                    </button>
                    {totalPage.slice(startPage, endPage).map((data, index) => (
                        <Link
                            key={index + 1}
                            to={`/datapribadiconfiguration/${data}`}>
                            <div
                                className={`rounded-full border-pink-700 border-2 w-10 h-10 text-2xl  m-5 ${
                                    page == data ? 'bg-pink-700 text-white' : 'bg-white text-pink-700'
                                } text-center items-center justify-center`}>
                                {data}
                            </div>
                        </Link>
                    ))}
                    <button
                        className="rounded-full border-pink-700 border-2 w-10 h-10 text-2xl text-pink-700 m-5 bg-white text-center items-center justify-center"
                        onClick={handleNext}
                        hidden={endPage >= totalPage.length}>
                        {'>'}
                    </button>
                </div>
            </div>{' '}
        </>
    );
}

export default DataPribadiConfiguration;
