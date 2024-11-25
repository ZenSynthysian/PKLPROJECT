import { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function PjkDocumentTable() {
    const { page } = useParams();
    const tableRef = useRef(null);
    const [table, setTable] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [totalPage, setTotalPage] = useState([]);
    const [currentPageGroup, setCurrentPageGroup] = useState(0);
    const pagesPerGroup = 20;

    const exportToExcel = () => {
        // Get the HTML table element
        const table = tableRef.current;

        // Extract headers
        const headers = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent);

        // Extract data rows
        const rows = Array.from(table.querySelectorAll('tbody tr')).map((tr) => {
            return Array.from(tr.children).map((td) => td.textContent || '-'); // Use '-' for empty cells
        });

        // Define rows to exclude (e.g., exclude rows with indices 19 and 20)
        const rowsToExclude = [19, 20]; // Indices of rows to exclude
        const filteredRows = rows.filter((_, index) => !rowsToExclude.includes(index));

        // Define columns to export (e.g., exporting only the 1st and 3rd columns)
        let columnsToExport = Array.from({ length: 18 }, (_, i) => i);
        // let columnsToExport = [];

        // Filter headers and rows to include only the specified columns
        const filteredHeaders = columnsToExport.map((index) => headers[index] || ''); // Ensure headers array length is handled
        const filteredDataRows = filteredRows.map((row) => columnsToExport.map((index) => row[index] || '-')); // Use '-' for missing data

        // Create worksheet and workbook
        const ws = XLSX.utils.aoa_to_sheet([filteredHeaders, ...filteredDataRows]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'table.xlsx');
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pjk?page=${page}`, {
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
        }

        fetchData();
    }, [searchValue, page]); // Dependency array includes searchValue

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

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    async function handleClear() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pjk`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setTable(response.data.data.data);
        } catch (error) {
            console.log(error.message || error);
        }
    }

    async function handleDelete(nomor_pjk) {
        try {
            Swal.fire({
                title: 'Data akan dihapus permanen?',
                showDenyButton: true,
                confirmButtonText: 'Hapus',
                denyButtonText: `Batal`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${import.meta.env.VITE_SERVER_API}api/pjk/${nomor_pjk}`, {
                        withCredentials: true,
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    });
                    Swal.fire('Data Terhapus!', '', 'success');

                    // Update the table state to reflect the deletion
                    setTable((prevTable) => prevTable.filter((item) => item.nomor_pjk !== nomor_pjk));
                } else if (result.isDenied) {
                    Swal.fire('Data Batal di Hapus', '', 'info');
                }
            });
        } catch (error) {
            console.log(error.message || error);
        }
    }

    async function handleBulkDelete() {
        if (selectedIds.length === 0) {
            Swal.fire('No items selected', '', 'warning');
            return;
        }

        try {
            Swal.fire({
                title: 'Data akan dihapus permanen?',
                showDenyButton: true,
                confirmButtonText: 'Hapus',
                denyButtonText: `Batal`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // Perform bulk delete
                    await axios.post(
                        `${import.meta.env.VITE_SERVER_API}api/pjk/bulk-delete`,
                        {
                            ids: selectedIds,
                        },
                        {
                            withCredentials: true,
                            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                        }
                    );

                    Swal.fire('Data Terhapus!', '', 'success');

                    // Update the table state to reflect the deletion
                    setTable((prevTable) => prevTable.filter((item) => !selectedIds.includes(item.nomor_pjk)));
                    setSelectedIds([]);
                } else if (result.isDenied) {
                    Swal.fire('Data Batal di Hapus', '', 'info');
                }
            });
        } catch (error) {
            console.log(error.message || error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pjk/${searchValue}`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setTable(response.data.data.data);
        } catch (error) {
            console.log(error.message || error);
        }
    }

    const handleCheckboxChange = (e, nomor_pjk) => {
        if (e.target.checked) {
            setSelectedIds((prevSelectedIds) => [...prevSelectedIds, nomor_pjk]);
        } else {
            setSelectedIds((prevSelectedIds) => prevSelectedIds.filter((id) => id !== nomor_pjk));
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(table.map((item) => item.nomor_pjk));
        } else {
            setSelectedIds([]);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center pt-32 overflow-auto pl-32 pr-32 w-fit">
                <div className="flex justify-start w-full">
                    <form
                        action=""
                        onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="search"
                                placeholder="Nomor PJK"
                                onChange={handleChange}
                                className="border-2 border-blue-500 m-1 w-72"
                            />
                            <input
                                type="submit"
                                value="Search"
                                className="border-2 border-blue-500 rounded w-24 cursor-grab animate-pulse hover:bg-blue-50 transition-all ease-in-out duration-100"
                            />
                        </div>
                    </form>
                    <button
                        onClick={handleClear}
                        className="border-2 border-blue-500 rounded w-24 cursor-grab hover:bg-blue-50 transition-all ease-in-out duration-100 m-1">
                        Clear
                    </button>
                    <div className="flex justify-center items-center ">
                        <button
                            className="pl-4 pr-4 border-2 border-blue-500 rounded hover:text-pink-700 transition-all ease-in-out duration-100"
                            onClick={exportToExcel}>
                            Export Semua
                        </button>
                    </div>
                    {localStorage.getItem('role') === 'admin' && (
                        <div className="flex justify-center items-center ">
                            <button
                                onClick={handleBulkDelete}
                                className="pl-4 pr-4 border-2 border-blue-500 rounded hover:text-pink-700 transition-all ease-in-out duration-100">
                                Delete Selected
                            </button>
                        </div>
                    )}
                </div>
                <div className="border-2 border-blue-400 bg-white">
                    <table
                        id="table-main"
                        ref={tableRef}>
                        <thead className="bg-indigo-950 text-gray-300">
                            <tr>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectedIds.length === table.length}
                                    />
                                </th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">No.</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Nomor Pjk</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Kepada</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Anggaran</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">WBS/CC/IO</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Refrensi</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">No. Permohonan Uang Muka</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Jumlah Pencairan</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Nama</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">No. Rek</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Nama & Alamat Bank</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Unit Organisasi</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Pelaksanaan</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Jumlah Pengambilan</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Jumlah PJK</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Jumlah Setor</th>
                                <th className="p-1 border-r-2 border-blue-400 whitespace-nowrap">Saldo</th>
                                <th className="p-1 border-r-2 whitespace-nowrap">Pejabat yang Berwenang</th>
                                <th className="p-1 whitespace-nowrap">Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((data, index) => (
                                <tr
                                    className="transition-all duration-100 ease-in-out hover:bg-gray-200"
                                    key={data.nomor_pjk}>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(data.nomor_pjk)}
                                            onChange={(e) => handleCheckboxChange(e, data.nomor_pjk)}
                                        />
                                    </td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{index + 1}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.nomor_pjk}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.kepada}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.kode_anggaran}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.wbs_cc}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.refrensi}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.no_permohonan_uang_muka}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.jumlah_pencairan}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.nama}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.no_rekening}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.nama_dan_alamat_bank}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.unit_organisasi}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{`${data?.awal_pelaksanaan} s/d ${data?.akhir_pelaksanaan}`}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.jumlah_pengambilan}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.jumlah_pjk}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.jumlah_setor}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.saldo}</td>
                                    <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center">{data?.pejabat_yang_berwenang}</td>
                                    <td className="border-blue-400 whitespace-nowrap text-center flex gap-3">
                                        <Link
                                            to={`/pjk/detail/${data?.nomor_pjk}`}
                                            className="p-3 hover:bg-indigo-950 hover:text-white transition-all ease-in-out duration-100">
                                            <div>Open</div>
                                        </Link>
                                        {localStorage.getItem('role') !== 'admin' ? null : (
                                            <button
                                                onClick={() => handleDelete(data?.nomor_pjk)}
                                                className="p-3 hover:bg-indigo-950 bg-transparent hover:text-white transition-all ease-in-out duration-100">
                                                <div className="text-red-600">Delete</div>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
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
                            to={`/tablemenu/pjk/tahun/semua/${data}`}>
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
            </div>
        </>
    );
}

export default PjkDocumentTable;
