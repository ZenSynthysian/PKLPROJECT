import { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function PjkDocumentTable() {
    const tableRef = useRef(null);
    const [table, setTable] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const exportToExcel = () => {
        // Get the HTML table element
        const table = tableRef.current;

        // Extract headers
        const headers = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent);

        // Extract data rows
        const rows = Array.from(table.querySelectorAll('tbody tr')).map((tr) => {
            return Array.from(tr.children).map((td) => td.textContent);
        });

        // Define rows to exclude (e.g., exclude rows with indices 1 and 2)
        const rowsToExclude = [19, 20]; // Indices of rows to exclude
        const filteredRows = rows.filter((_, index) => !rowsToExclude.includes(index));

        // Define columns to export (e.g., exporting only the 1st and 3rd columns)
        let columnsToExport = Array.from({ length: 18 }, (_, i) => i);
        // let columnsToExport = [];

        // Filter headers and rows to include only the specified columns
        const filteredHeaders = columnsToExport.map((index) => headers[index]);
        const filteredDataRows = filteredRows.map((row) => columnsToExport.map((index) => row[index]));

        // Create worksheet and workbook
        const ws = XLSX.utils.aoa_to_sheet([filteredHeaders, ...filteredDataRows]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'table.xlsx');
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pkl`, { withCredentials: true });
                setTable(response.data.data);
            } catch (error) {
                console.log(error.message || error);
            }
        }

        fetchData();
    }, [searchValue]); // Dependency array includes searchValue

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    async function handleClear() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pkl`, { withCredentials: true });
            setTable(response.data.data);
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
                    await axios.delete(`${import.meta.env.VITE_SERVER_API}api/pkl/${nomor_pjk}`, { withCredentials: true });
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

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await axios.get(`${import.meta.env.VITE_SERVER_API}api/pkl/${searchValue}`, { withCredentials: true }).then((response) => {
                const a = [];
                a.push(response.data.data);

                setTable(a);
            });
        } catch (error) {
            console.log(error.message || error);
        }
    }

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
                </div>
                <div className="border-2 border-blue-400">
                    <table
                        id="table-main"
                        ref={tableRef}>
                        <thead className="bg-indigo-950 text-gray-300">
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
                            <th>
                                <div className="flex justify-center items-center ">
                                    <button
                                        className="h-full p-2 border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-100"
                                        onClick={exportToExcel}>
                                        Export Semua
                                    </button>
                                </div>
                            </th>
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
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.nomor_pjk}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.kepada}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.kode_anggaran}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.wbs_cc}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.refrensi}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.no_permohonan_uang_muka}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.jumlah_pencairan}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.nama}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.no_rekening}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.nama_dan_alamat_bank}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.unit_organisasi}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{`${data.awal_pelaksanaan} s/d ${data.akhir_pelaksanaan}`}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.jumlah_pengambilan}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.jumlah_pjk}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.jumlah_setor}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.saldo}</td>
                                        <td className="p-1 border-r-2 border-blue-400 whitespace-nowrap text-center ">{data.pejabat_yang_berwenang}</td>
                                        <td className="border-blue-400 whitespace-nowrap text-center flex gap-3">
                                            <button className="p-3 hover:bg-indigo-950 hover:text-white transition-all ease-in-out duration-100">
                                                <Link to={`/pjk/detail/${data.nomor_pjk}`}>
                                                    <div>Open</div>
                                                </Link>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(data.nomor_pjk)}
                                                className="p-3 hover:bg-indigo-950 hover:text-white transition-all ease-in-out duration-100">
                                                <div className="text-red-600">Delete</div>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PjkDocumentTable;
