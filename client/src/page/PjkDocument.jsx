import { useState } from 'react';
import axios from 'axios';

function PjkDocument() {
    const [dataSend, setDataSend] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            setDataSend(data);

            axios.post(`${import.meta.env.VITE_SERVER_API}api/pkl`, dataSend, { withCredentials: true }).then((response) => {
                window.location.href(`/pjk/detail/${dataSend.nomor_pjk}`);
            });
        } catch (error) {
            console.log(error.message || error);
        }
    };

    return (
        <>
            <div className="h-screen">
                <div className="h-full flex justify-center items-center w-full">
                    <div className="flex flex-col border-2 border-blue-900 p-3 rounded w-[80%]">
                        <div className="flex justify-center pb-10">
                            <span className="text-4xl text-blue-950">INPUT DATA DOKUMEN</span>
                        </div>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="grid p-2 grid-cols-4 gap-3">
                            <input
                                type="text"
                                name="nomor_pjk"
                                placeholder="NOMOR PJK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="kepada"
                                placeholder="KEPADA"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="kode_anggaran"
                                placeholder="KODE ANGGARAN"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="wbs_cc"
                                placeholder="WBS/CC/IO"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="refrensi"
                                placeholder="REFRENSI"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="no_permohonan_uang_muka"
                                placeholder="NOMOR PERMOHONAN UANG MUKA"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="jumlah_pencairan"
                                placeholder="JUMLAH PENCAIRAN"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="nama"
                                placeholder="NAMA"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="no_rekening"
                                placeholder="NO. REK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="nama_dan_alamat_bank"
                                placeholder="NAMA & ALAMAT BANK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="unit_organisasi"
                                placeholder="UNIT ORGANISASI"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center text-xs">AWAL PELAKSANAAN</div>
                                <input
                                    type="date"
                                    name="awal_pelaksanaan"
                                    placeholder="PELAKSANAAN"
                                    className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center text-xs">AKHIR PELAKSANAAN</div>
                                <input
                                    type="date"
                                    name="akhir_pelaksanaan"
                                    placeholder="PELAKSANAAN"
                                    className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                />
                            </div>
                            <input
                                type="text"
                                name="jumlah_pengambilan"
                                placeholder="JUMLAH PENGAMBILAN"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="jumlah_pjk"
                                placeholder="JUMLAH PJK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="jumlah_setor"
                                placeholder="JUMLAH SETOR"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="saldo"
                                placeholder="SALDO"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="pejabat_yang_berwenang"
                                placeholder="PEJABAT YANG BERWENANG"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="submit"
                                value="kirim"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PjkDocument;
