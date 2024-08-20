function PjkDocument() {
    return (
        <>
            <div className="h-screen">
                <div className="h-full flex justify-center items-center w-full">
                    <div className="border-2 border-blue-900 p-3 w-[80%]">
                        <form
                            action=""
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
                                name="pejabat_yang_menjabat"
                                placeholder="PEJABAT YANG BERWENANG"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PjkDocument;
