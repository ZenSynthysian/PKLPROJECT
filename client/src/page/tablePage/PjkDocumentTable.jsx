import { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PjkDocumentTable() {
    const tableRef = useRef(null);
    const [table, setTable] = useState([]);

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
                await axios.get(`${import.meta.env.VITE_SERVER_API}api/pkl`, { withCredentials: true }).then((response) => {
                    setTable(response.data.data);
                });
            } catch (error) {
                console.log(error.message || error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center pt-32 overflow-auto pl-32 pr-32 w-fit">
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
                                            <button className="p-3 hover:bg-indigo-950 hover:text-white transition-all ease-in-out duration-100">
                                                <div>Print</div>
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
