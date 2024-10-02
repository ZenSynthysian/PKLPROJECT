import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PtdPng from './../assets/ptd.png';
// import { numberToWord } from '../helper/numberConverter';

function PjkDocument() {
    let { tahunPjk } = useParams();
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
    const [interactive, setInteractive] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios
                .get(`${import.meta.env.VITE_SERVER_API}api/pjk/getnomorpjk`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .catch((error) => console.log(error)); // Endpoint API
            const result = response.data;

            // Dapatkan tahun dan bulan saat ini
            const today = new Date();
            const currentYear = today.getFullYear() % 100; // Ambil 2 digit terakhir
            const currentMonth = today.getMonth() + 1; // Bulan 0-11, tambahkan 1

            // Periksa apakah tahun atau bulan berbeda
            if (result.tahun != currentYear || result.bulan != `0${currentMonth}`) {
                // Ubah tahun dan bulan, reset urutan ke 1
                result.tahun = currentYear;
                result.bulan = String(currentMonth).padStart(2, '0'); // Format dua digit
                result.urutan = '00001'; // Reset urutan ke 1
            }

            let finalResult = `${result.kode}-${result.unitOrganisasi}-${result.tahun}${result.bulan}-${result.urutan}`; // Format nomor PJK
            setNomorPjk(finalResult);
        } catch (err) {
            console.log(err || err.message);
        }
    };

    console.log(nomorPjk);
    useEffect(() => {
        fetchData();
        // console.log(nomorPjk);
    }, []);

    useEffect(() => {
        setJumlahSetor(jumlah_pengambilan - jumlah_pjk);
    }, [jumlah_pengambilan, jumlah_pjk]);

    function handleInteractive() {
        setInteractive(!interactive);
    }

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

            data['valuta'] = 'IDR';
            data['valuta2'] = 'IDR';
            data['valuta3'] = 'IDR';
            data['valuta4'] = 'IDR';
            data['folder'] = tahunPjk;

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
            console.log('Error on submit: PjkDocument.jsx' + error.message || error);
        }
    };

    if (interactive) {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center w-screen p-3 gap-5">
                        <button
                            onClick={handleInteractive}
                            className="bg-blue-500 p-3 text-white rounded-full border-blue-900 border-2">
                            Non Interactive Mode
                        </button>
                        <input
                            className="bg-blue-500 p-3 text-white rounded-full border-blue-900 border-2"
                            type="submit"
                            value="SUBMIT"
                        />
                    </div>
                    <div className="relative pb-10 flex printme justify-center w-screen items-center border-black">
                        <div className={'border-[1mm] border-black w-[8.5in] bg-white h-[11in] text-[11px]'}>
                            <div className="border-b-[1mm] border-black flex flex-col justify-center items-center p-3">
                                <div className="absolute w-[8.5in] translate-x-3">
                                    <img
                                        className="w-16"
                                        src={PtdPng}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <strong className="">PertanggungJawaban Uang Muka</strong>
                                </div>
                                <span>
                                    Nomor :{' '}
                                    <input
                                        className="relative printme z-20 outline-none border border-blue-500 w-32"
                                        type="text"
                                        name="nomor_pjk"
                                        value={nomorPjk}
                                        onChange={handleNomorPjkChange}
                                        required
                                    />
                                </span>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col justify-center p-1 pl-8  border-r-[1mm] border-black w-[66%]">
                                    <div className="">Kepada Yth</div>
                                    <div>
                                        <strong className="text-[13px]">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                onChange={handleKepadaChange}
                                                value={kepada}
                                                type="text"
                                                name="kepada"
                                            />
                                        </strong>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-16 p-1 pl-8 ">
                                    <table className="">
                                        <tr className="">
                                            <td className="w-28">Anggaran</td>
                                            <td className="w-10">:</td>
                                            <td className="border h-[1rem] w-8 border-blue-500">
                                                <input
                                                    className="relative z-20 outline-none w-6"
                                                    type="text"
                                                    name="kode_anggaran"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="absolute flex gap-4 translate-x-20 translate-y-8">
                                            <td className="text-end">SN</td>
                                            <td className="pr-5">:</td>
                                            <td>
                                                <input
                                                    className="border border-blue-500 w-8 h-4 translate-y-[0.1rem]"
                                                    type="text"
                                                    name="sn"
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="border-t-[1mm] pl-8 border-black pt-2">
                                <table>
                                    <tr>
                                        <td className="pr-7">1</td>
                                        <td className="">WBS/CC/10</td>
                                        <td className="pl-7">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="wbs_cc"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pr-7">2</td>
                                        <td>Refrensi</td>
                                        <td className="pl-7">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="refrensi"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pl-4">a.</td>
                                        <td>No. Permohonan Uang Muka</td>
                                        <td className="pl-7">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="no_permohonan_uang_muka"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pl-4">b.</td>
                                        <td>Nomor Tanda Terima Uang</td>
                                        <td className="pl-7">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="nomor_tanda_terima_uang"
                                            />
                                        </td>
                                    </tr>
                                </table>

                                <br />
                                <span>kami sampaikan pertanggung jawaban uang muka yang telah dipergunakan oleh penanggung jawab uang muka</span>
                            </div>
                            <br />
                            <div className="pl-[67px]">
                                <table>
                                    <tr>
                                        <td>Nama</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={handleNamaChange}
                                                value={nama}
                                                name="nama"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>No Rekening</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={(e) => setNoRek(e.target.value)}
                                                value={noRek}
                                                name="no_rekening"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nama & Alamat Bank</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={(e) => setNamaDanAlamatBank(e.target.value)}
                                                value={namaDanAlamatBank}
                                                name="nama_dan_alamat_bank"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Unit Organisasi</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={(e) => setUnitOrganisasi(e.target.value)}
                                                value={unitOrganisasi}
                                                name="unit_organisasi"
                                            />
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>Pelaksanaan</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">Dari Tanggal</td>
                                        <td className="pl-7">Sampai Tanggal</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="pl-7"></td>
                                        <td className="pl-7 w-[2in]">
                                            <div className="flex items-center pl-1 w-full border border-blue-500">
                                                <input
                                                    type="date"
                                                    name="awal_pelaksanaan"
                                                    className="outline-none border-none bg-transparent"
                                                />
                                            </div>
                                        </td>
                                        <td className="pl-7 w-[2in]">
                                            <div className="flex items-center pl-1 w-full border border-blue-500">
                                                <input
                                                    type="date"
                                                    name="akhir_pelaksanaan"
                                                    className="outline-none border-none bg-transparent"
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="text-[9px]">
                                        <td></td>
                                        <td className="pl-7"></td>
                                        <td className="pl-7">Valuta</td>
                                        <td className="pl-7">Nilai</td>
                                    </tr>

                                    <tr>
                                        <td>Jumlah Pengambilan</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="valuta"
                                            />
                                        </td>
                                        <td className="pl-7 w-[2in]">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={handleJumlahPengambilanChange}
                                                value={jumlah_pengambilan}
                                                name="jumlah_pengambilan"
                                            />
                                        </td>
                                    </tr>

                                    <br />

                                    <tr>
                                        <td>Terbilang</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7 absolute w-[35.7rem]">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full ab h-3 border border-black border-b-transparent">
                                                    {/* <div className="-translate-y-[0.14rem]">{numberToWord(jumlah_pengambilan) + ` ${Number.isInteger(jumlah_pengambilan) ? mataUang : ''}`}</div> */}
                                                </div>
                                                <div className="w-full border border-black">
                                                    <div className="h-4"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pl-7"></td>
                                    </tr>

                                    <br />

                                    <tr className="-translate-y-1 text-[9px]">
                                        <td></td>
                                        <td className="pl-7"></td>
                                        <td className="pl-7">Valuta</td>
                                        <td className="pl-7">Nilai</td>
                                    </tr>
                                    <tr className="-translate-y-1">
                                        <td>Jumlah PJK</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="valuta2"
                                            />
                                        </td>
                                        <td className="pl-7 w-[2.in]">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={handleJumlahPjkChange}
                                                value={jumlah_pjk}
                                                name="jumlah_pjk"
                                            />
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>Terbilang</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7 absolute w-[35.7rem]">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full ab h-3 border border-black border-b-transparent">
                                                    <div className="-translate-y-[0.14rem]">{/* {numberToWord(jumlah_pjk)} {Number.isInteger(jumlah_pjk) ? mataUang2 : ''} */}</div>
                                                </div>
                                                <div className="w-full border border-black">
                                                    <div className="h-4"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pl-7"></td>
                                    </tr>
                                    <br />
                                    <br />
                                    <tr className="-translate-y-1 text-[9px]">
                                        <td></td>
                                        <td className="pl-7"></td>
                                        <td className="pl-7">Valuta</td>
                                        <td className="pl-7">Nilai</td>
                                    </tr>
                                    <tr className="-translate-y-1">
                                        <td>Jumlah Setor</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="valuta3"
                                            />
                                        </td>
                                        <td className="pl-7 w-[2.in]">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                onChange={handleJumlahSetorChange}
                                                value={jumlah_setor}
                                                name="jumlah_setor"
                                            />
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>Terbilang</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7 absolute w-[35.7rem]">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full ab h-3 border border-black border-b-transparent">
                                                    {/* <div className="-translate-y-[0.14rem]">{numberToWord(docData.jumlah_setor)} {Number.isInteger(docData.jumlah_setor) ? mataUang3 : ''}</div> */}
                                                </div>
                                                <div className="w-full border border-black">
                                                    <div className="h-4"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pl-7"></td>
                                    </tr>

                                    <br />

                                    <tr className="-translate-y-1 text-[9px]">
                                        <td></td>
                                        <td className="pl-7"></td>
                                        <td className="pl-7">Valuta</td>
                                        <td className="pl-7">Nilai</td>
                                    </tr>
                                    <tr className="-translate-y-1">
                                        <td>Saldo</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="valuta4"
                                            />
                                        </td>
                                        <td className="pl-7 w-[2.in]">
                                            <input
                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                type="text"
                                                name="saldo"
                                            />
                                        </td>
                                    </tr>
                                    <tr className="translate-y-2">
                                        <td>Terbilang</td>
                                        <td className="pl-16">:</td>
                                        <td className="pl-7 absolute w-[35.7rem]">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full ab h-3 border border-black border-b-transparent">
                                                    {/* <div className="-translate-y-[0.14rem]">{numberToWord(docData.saldo)} {Number.isInteger(docData.saldo) ? mataUang4 : ''}</div> */}
                                                </div>
                                                <div className="w-full border border-black">
                                                    <div className="h-4"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pl-7"></td>
                                    </tr>
                                </table>
                            </div>
                            <p className="pt-6 pl-8">Dokumen pendukung PertanggungJawaban :</p>
                            {/* gap-28 on parrent div */}
                            <div className="flex flex-col ">
                                <div className="pl-[67px]">
                                    <div className="flex gap-6">
                                        <div>a.</div>
                                        <div>INVOICE</div>
                                    </div>
                                </div>

                                <div className="pr-14">
                                    <div className="flex justify-end">
                                        <div className="flex flex-col gap-[4.1rem]">
                                            <div>
                                                <input
                                                    className="relative z-20 outline-none border border-blue-500 w-14"
                                                    type="text"
                                                    name="tempat"
                                                />
                                                ,<span className="pr-4" />
                                                <input
                                                    className="relative z-20 outline-none border border-blue-500 w-32"
                                                    type="text"
                                                    name="tempat_tanggal_tanda_tangan"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <div className="flex flex-col">
                                                    <input
                                                        className="relative z-20 outline-none border border-blue-500 w-32"
                                                        type="text"
                                                        onChange={handlePejabatYangBerwenangChange}
                                                        value={pejabatYangBerwenang}
                                                        name="pejabat_yang_berwenang"
                                                    />
                                                    <div className="border-b-2 border-black w-44"></div>
                                                    <div>
                                                        <p>
                                                            NIK :{' '}
                                                            <input
                                                                className="relative z-20 outline-none border border-blue-500 w-32"
                                                                type="text"
                                                                onChange={setNik}
                                                                value={nik}
                                                                name="nik"
                                                            />
                                                        </p>
                                                    </div>
                                                    <div className="italic">Pejabat yang berwenang</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col pl-9 gap-2 -translate-y-7">
                                        <div className="flex translate-y-">
                                            <div className="border border-black w-7 h-4"></div>
                                            <div className="pl-[35px]">Disetujui</div>
                                        </div>
                                        <div className="flex translate-y-">
                                            <div className="border border-black w-7 h-4"></div>
                                            <div className="pl-[35px]">Dikembalikan</div>
                                        </div>
                                        <div className="flex flex-col gap-16">
                                            <div>
                                                <div>Catatan</div>
                                                <input
                                                    className="relative z-20 outline-none border border-blue-500 w-32"
                                                    type="text"
                                                    name="catatan_kadiv"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className="relative z-20 outline-none border border-blue-500 w-32"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    } else {
        return (
            <>
                <div className="h-screen w-screen">
                    <div className="flex justify-end translate-y-10 -translate-x-10">
                        <button
                            onClick={handleInteractive}
                            className="bg-blue-500 p-3 text-white rounded-full border-blue-900 border-2">
                            Interactive Mode
                        </button>
                    </div>
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
                                    value={nomorPjk}
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
                                    <div className="flex">
                                        <input
                                            type="text"
                                            name="tempat"
                                            placeholder="Bandung"
                                            className="text-center w-[100%] h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                        />
                                        <input
                                            type="text"
                                            name="tempat_tanggal_tanda_tangan"
                                            placeholder="September 2024"
                                            className="text-center w-[100%] h-10 outline-none placeholder:text-center border-b-2 border-blue-700 focus:border-blue-400 focus:border-b-4 rounded transition-all duration-75"
                                        />
                                    </div>
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
}

export default PjkDocument;
