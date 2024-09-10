import axios from 'axios';
import { useEffect, useState } from 'react';

function PjkDocument() {
    const [kepada, setKepada] = useState('');
    const [pejabatYangBerwenang, setPejabatYangBerwenang] = useState('');
    const [nama, setNama] = useState('');
    const [noRek, setNoRek] = useState('');
    const [namaDanAlamatBank, setNamaDanAlamatBank] = useState('');
    const [unitOrganisasi, setUnitOrganisasi] = useState('');
    const [pejabatYangBerwenangDiDivisi, setPejabatYangBerwenangDiDivisi] = useState('');
    const [nik, setNik] = useState('');
    const [nomorPjk, setNomorPjk] = useState('');
    const [jumlah_pengambilan, setJumlahPengambilan] = useState('');
    const [jumlah_pjk, setJumlahPjk] = useState('');
    const [jumlah_setor, setJumlahSetor] = useState('');

    useEffect(() => {
        setJumlahSetor(jumlah_pengambilan - jumlah_pjk);
    }, [jumlah_pengambilan, jumlah_pjk]);

    function handleJumlahPengambilanChange(e) {
        setJumlahPengambilan(e.target.value);
    }

    function handleJumlahPjkChange(e) {
        setJumlahPjk(e.target.value);
    }

    function handleJumlahSetorChange(e) {
        setJumlahSetor(e.target.value);
    }

    useEffect(() => {
        try {
            axios
                .get(`${import.meta.env.VITE_SERVER_API}api/datauser/${nama}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    setNoRek(response.data.data.no_rek);
                    setNamaDanAlamatBank(response.data.data.nama_alamat_bank);
                    setUnitOrganisasi(response.data.data.unit_organisasi);
                })
                .catch(() => {
                    setNoRek('');
                    setNamaDanAlamatBank('');
                    setUnitOrganisasi('');
                });
        } catch (error) {
            console.log(error.message || error);
        }
    }, [nama]);

    useEffect(() => {
        try {
            axios
                .get(`${import.meta.env.VITE_SERVER_API}api/kadiv/${kepada}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(kepada);
                    console.log(response.data);
                    setPejabatYangBerwenangDiDivisi(response.data.data.nama);
                })
                .catch(() => {
                    setPejabatYangBerwenangDiDivisi('');
                });
        } catch (error) {
            console.log(error.message || error);
        }
    }, [kepada]);

    useEffect(() => {
        try {
            axios
                .get(`${import.meta.env.VITE_SERVER_API}api/kadiv/${pejabatYangBerwenang}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    setNik(response.data.data.nik);
                })
                .catch(() => {
                    setNik('');
                });
        } catch (error) {
            console.log(error.message || error);
        }
    }, [pejabatYangBerwenang]);

    function handleNikChange(e) {
        setNik(e.target.value);
    }

    function handleKepadaChange(e) {
        setKepada(e.target.value);
    }
    function handlePejabatYangBerwenangChange(e) {
        setPejabatYangBerwenang(e.target.value);
    }

    function handleNamaChange(e) {
        setNama(e.target.value);
    }

    function handlePejabatDivisiChange(e) {
        setPejabatYangBerwenangDiDivisi(e.target.value);
    }

    function handleNomorPjkChange(e) {
        setNomorPjk(e.target.value);
        if (nomorPjk.match(/[<>]/)) {
            setNomorPjk('Nomor Pjk Tidak dapat di isi dengan simbol <>!*');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);

            axios
                .post(
                    `${import.meta.env.VITE_SERVER_API}api/datauser`,
                    {
                        nama: nama,
                        no_rek: noRek,
                        nama_alamat_bank: namaDanAlamatBank,
                        unit_organisasi: unitOrganisasi,
                    },
                    { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                )
                .then((response) => {
                    console.log(response.data.message);
                })
                .catch((error) => {
                    if (error.response) {
                        console.error('ERROR ON POST api/datauser ' + error.response.data.message);
                    }
                });

            axios
                .post(
                    `${import.meta.env.VITE_SERVER_API}api/kadiv`,
                    {
                        divisi: kepada,
                        nama: pejabatYangBerwenangDiDivisi,
                    },
                    { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                )
                .then((response) => {
                    console.log(response.data.message);
                })
                .catch((error) => {
                    if (error.response) {
                        console.error('ERROR ON POST api/kadiv ' + error.response.data.message);
                    }
                });

            axios
                .post(
                    `${import.meta.env.VITE_SERVER_API}api/kadiv`,
                    {
                        nama: pejabatYangBerwenang,
                        nik: nik,
                    },
                    { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                )
                .then((response) => {
                    console.log(response.data.message);
                })
                .catch((error) => {
                    if (error.response) {
                        console.error('ERROR ON POST api/kadiv ' + error.response.data.message);
                    }
                });

            axios
                .post(`${import.meta.env.VITE_SERVER_API}api/pjk`, data, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then(() => {
                    window.location.replace(`/pjk/detail/${data.nomor_pjk}`);
                })
                .catch((error) => {
                    console.error('ERROR ON POST api/pjk ' + error.response.data.message || error);
                });
        } catch (error) {
            console.log(error.message || error);
        }
    };

    return (
        <>
            <div className="h-screen w-screen">
                <div className="h-full flex justify-center items-center w-full">
                    <div className="bg-white shadow-2xl flex flex-col border-2 border-blue-900 p-3 rounded w-[80%]">
                        <div className="flex justify-center pb-10">
                            <span className="text-4xl text-blue-950">INPUT DATA DOKUMEN</span>
                        </div>
                        {nomorPjk == 'Nomor Pjk Tidak dapat di isi dengan simbol <>!*' ? (
                            <div className="flex justify-center pb-10">
                                <span className="text-red-600">{'Nomor PJK Tidak dapat di isi dengan simbol <>!*'}</span>
                            </div>
                        ) : null}
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="grid p-2 grid-cols-4 gap-3">
                            <input
                                type="text"
                                name="nomor_pjk"
                                onChange={handleNomorPjkChange}
                                placeholder="NOMOR PJK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                required
                            />
                            <input
                                type="text"
                                name="kepada"
                                placeholder="KEPADA"
                                onChange={handleKepadaChange}
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
                                name="nomor_tanda_terima_uang"
                                placeholder="NO TANDA TERIMA UANG"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="nama"
                                onChange={handleNamaChange}
                                placeholder="NAMA"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="no_rekening"
                                value={noRek}
                                onChange={(e) => setNoRek(e.target.value)}
                                placeholder="NO. REK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="nama_dan_alamat_bank"
                                value={namaDanAlamatBank}
                                onChange={(e) => setNamaDanAlamatBank(e.target.value)}
                                placeholder="NAMA & ALAMAT BANK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="unit_organisasi"
                                value={unitOrganisasi}
                                onChange={(e) => setUnitOrganisasi(e.target.value)}
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
                                type="number"
                                name="jumlah_pengambilan"
                                onChange={handleJumlahPengambilanChange}
                                value={jumlah_pengambilan}
                                placeholder="JUMLAH PENGAMBILAN"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="number"
                                name="jumlah_pjk"
                                onChange={handleJumlahPjkChange}
                                value={jumlah_pjk}
                                placeholder="JUMLAH PJK"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="number"
                                name="jumlah_setor"
                                onChange={handleJumlahSetorChange}
                                value={jumlah_setor}
                                placeholder="JUMLAH SETOR"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="number"
                                name="saldo"
                                placeholder="SALDO"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="pejabat_yang_berwenang"
                                onChange={handlePejabatYangBerwenangChange}
                                placeholder="PEJABAT YANG BERWENANG"
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="text"
                                name="nik"
                                onChange={handleNikChange}
                                value={nik}
                                placeholder={`NIK ${pejabatYangBerwenang}`}
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center text-xs">TANGGAL TANDA TANGAN {`${pejabatYangBerwenang}`}</div>
                                <input
                                    type="date"
                                    name="tempat_tanggal_tanda_tangan"
                                    placeholder="TANGGAL TANDA TANGAN"
                                    className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                />
                            </div>
                            <input
                                type="text"
                                onChange={handlePejabatDivisiChange}
                                name="nama_catatan_kadiv"
                                value={pejabatYangBerwenangDiDivisi}
                                placeholder={`PEJABAT BERWENANG DI ${kepada}`}
                                className="text-center h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                            />
                            <input
                                type="submit"
                                value="SUBMIT"
                                className="cursor-grab bg-blue-50 rounded border-2 border-blue-300 animate-pulse"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PjkDocument;
