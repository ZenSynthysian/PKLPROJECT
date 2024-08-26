import { useEffect, useState } from 'react';
import PtdPng from '../assets/ptd.png';
import { numberToWord } from '../helper/numberConverter';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CurrencyFormater } from '../helper/CurrencyFormater';
import { monthNameFormater } from '../helper/monthNameFormater';

function PjkDocumentLayout() {
    const { nomorpjkparam } = useParams();
    const [dataPjk, setDataPjk] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [docData, setDocData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatDate = (dateStr) => {
        const [year, month, day] = String(dateStr).split('-');
        return `${day}/${month}/${year}`;
    };
    const formatDateTandaTangan = (dateStr) => {
        const [year, month, day] = String(dateStr).split('-');
        const nameMonth = monthNameFormater(month).toUpperCase();
        return `${day} ${nameMonth} ${year}`;
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    console.log(docData);

    function handleSave() {
        try {
            setIsLoading(true);
            axios
                .put(`${import.meta.env.VITE_SERVER_API}api/pkl/${nomorpjkparam}`, docData, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data);
                });

            setEditMode(false);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message || error);
        }
    }

    function handleChange(e) {
        setDocData({ ...docData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API}api/pkl/${nomorpjkparam}`, {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setDataPjk(response.data.data[0]);
            } catch (error) {
                console.log(error.message || error);
            }
        }

        console.log('test');

        fetchData();
    }, [nomorpjkparam, editMode]);

    useEffect(() => {
        if (!editMode) {
            setDocData({
                nomor_pjk: dataPjk?.nomor_pjk,
                kepada: dataPjk?.kepada,
                sn: dataPjk?.sn,
                nomor_tanda_terima_uang: dataPjk?.nomor_tanda_terima_uang,
                kode_anggaran: dataPjk?.kode_anggaran,
                wbs_cc: dataPjk?.wbs_cc,
                refrensi: dataPjk?.refrensi,
                no_permohonan_uang_muka: dataPjk?.no_permohonan_uang_muka,
                jumlah_pencairan: dataPjk?.jumlah_pencairan,
                nama: dataPjk?.nama,
                no_rekening: dataPjk?.no_rekening,
                nama_dan_alamat_bank: dataPjk?.nama_dan_alamat_bank,
                unit_organisasi: dataPjk?.unit_organisasi,
                awal_pelaksanaan: dataPjk?.awal_pelaksanaan,
                akhir_pelaksanaan: dataPjk?.akhir_pelaksanaan,
                jumlah_pengambilan: dataPjk?.jumlah_pengambilan,
                jumlah_pjk: dataPjk?.jumlah_pjk,
                jumlah_setor: dataPjk?.jumlah_setor,
                saldo: dataPjk?.saldo,
                pejabat_yang_berwenang: dataPjk?.pejabat_yang_berwenang,
                tempat_tanggal_tanda_tangan: dataPjk?.tempat_tanggal_tanda_tangan,
                valuta: dataPjk?.valuta,
            });
        }
    }, [dataPjk, editMode]);

    return (
        <>
            <div className="w-full flex justify-center items-center gap-4 p-3">
                <button
                    onClick={window.print}
                    className="no-printme p-1 w-[20%] transition-all duration-100 ease-in-out ho16er:border-blue-700 rounded border-2 items-center border-black">
                    Print
                </button>
                <button
                    onClick={toggleEditMode}
                    className="no-printme p-1 w-[20%] transition-all duration-100 ease-in-out ho16er:border-blue-700 rounded border-2 items-center border-black">
                    {editMode ? 'Cancel' : 'Edit'}
                </button>
                {editMode ? (
                    <button
                        onClick={handleSave}
                        className="no-printme p-1 w-[20%] transition-all duration-100 ease-in-out ho16er:border-blue-700 rounded border-2 items-center border-black">
                        Save
                    </button>
                ) : null}
            </div>
            <div className="relative pb-10 flex printme justify-center items-center border-black">
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
                            {editMode ? (
                                <input
                                    className="relative z-20 outline-none border border-black w-32"
                                    type="text"
                                    onChange={handleChange}
                                    value={docData.nomor_pjk}
                                    name="nomor_pjk"
                                />
                            ) : (
                                <span id="nomor_pjk">{docData.nomor_pjk}</span>
                            )}
                        </span>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center p-1 pl-8  border-r-[1mm] border-black w-[66%]">
                            <div className="">Kepada Yth</div>
                            <div>
                                <strong className="text-[13px]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.kepada}
                                            name="kepada"
                                        />
                                    ) : (
                                        <span>{docData.kepada}</span>
                                    )}
                                </strong>
                            </div>
                        </div>
                        <div className="flex flex-row gap-16 p-1 pl-8 ">
                            <table className="">
                                <tr className="">
                                    <td className="w-28">Anggaran</td>
                                    <td className="w-10">:</td>
                                    <td className="border h-1 w-1 border-black">
                                        {editMode ? (
                                            <input
                                                className="relative z-20 outline-none w-6"
                                                type="text"
                                                onChange={handleChange}
                                                value={docData.kode_anggaran}
                                                name="kode_anggaran"
                                            />
                                        ) : (
                                            <span>{docData.kode_anggaran}</span>
                                        )}
                                    </td>
                                </tr>
                                <tr className="absolute flex gap-4 translate-x-20 translate-y-6">
                                    <td className="text-end">SN</td>
                                    <td className="pr-5">:</td>
                                    {editMode ? (
                                        <td>
                                            <input
                                                className="border border-black h-4 translate-y-[0.1rem]"
                                                type="text"
                                                onChange={handleChange}
                                                name="sn"
                                                value={docData.sn}
                                            />
                                        </td>
                                    ) : (
                                        <td className="border w-8 border-black h-4 translate-y-[0.1rem]">{docData.sn}</td>
                                    )}
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="border-t-[1mm] pl-8 border-black">
                        <table>
                            <tr>
                                <td className="pr-7">1</td>
                                <td className="">WBS/CC/10</td>
                                <td className="pl-7">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.wbs_cc}
                                            name="wbs_cc"
                                        />
                                    ) : (
                                        <span>{docData.wbs_cc}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="pr-7">2</td>
                                <td>Refrensi</td>
                                <td className="pl-7">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.refrensi}
                                            name="refrensi"
                                        />
                                    ) : (
                                        <span>{docData.refrensi}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-4">a.</td>
                                <td>No. Permohonan Uang Muka</td>
                                <td className="pl-7">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.no_permohonan_uang_muka}
                                            name="no_permohonan_uang_muka"
                                        />
                                    ) : (
                                        <span>{docData.no_permohonan_uang_muka}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-4">b.</td>
                                <td>Nomor Tanda Terima Uang</td>
                                <td className="pl-7">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.nomor_tanda_terima_uang}
                                            name="nomor_tanda_terima_uang"
                                        />
                                    ) : (
                                        <span>{docData.nomor_tanda_terima_uang}</span>
                                    )}
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
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.nama}
                                            name="nama"
                                        />
                                    ) : (
                                        <span>{docData.nama}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>No Rekening</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.no_rekening}
                                            name="no_rekening"
                                        />
                                    ) : (
                                        <span>{docData.no_rekening}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Nama & Alamat Bank</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.nama_dan_alamat_bank}
                                            name="nama_dan_alamat_bank"
                                        />
                                    ) : (
                                        <span>{docData.nama_dan_alamat_bank}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Unit Organisasi</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.unit_organisasi}
                                            name="unit_organisasi"
                                        />
                                    ) : (
                                        <span>{docData.unit_organisasi}</span>
                                    )}
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
                                    <div className="flex items-center pl-1 w-full border border-black">
                                        {editMode ? (
                                            <input
                                                type="date"
                                                name="awal_pelaksanaan"
                                                value={docData.awal_pelaksanaan}
                                                onChange={handleChange}
                                                className="outline-none border-none bg-transparent"
                                            />
                                        ) : (
                                            <div className="flex items-center">
                                                <div>{formatDate(docData.awal_pelaksanaan)}</div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="pl-7 w-[2in]">
                                    <div className="flex items-center pl-1 w-full border border-black">
                                        {editMode ? (
                                            <input
                                                type="date"
                                                name="akhir_pelaksanaan"
                                                onChange={handleChange}
                                                value={docData.akhir_pelaksanaan}
                                                className="outline-none border-none bg-transparent"
                                            />
                                        ) : (
                                            <div className="flex items-center">
                                                <span>{formatDate(docData.akhir_pelaksanaan)}</span>
                                            </div>
                                        )}
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
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.valuta}
                                            name="valuta"
                                        />
                                    ) : (
                                        <div className="flex items-center pl-1 w-[20%] border border-black">
                                            <span>{docData.valuta}</span>
                                        </div>
                                    )}
                                </td>
                                <td className="pl-7 w-[2in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.jumlah_pengambilan}
                                            name="jumlah_pengambilan"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-end pr-1 w-full border border-black">
                                            <span>{CurrencyFormater(`${docData.valuta}`, docData.jumlah_pengambilan)},00</span>
                                        </div>
                                    )}
                                </td>
                            </tr>

                            <br />

                            <tr>
                                <td>Terbilang</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7 absolute w-[35.7rem]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full ab h-3 border border-black border-b-transparent">
                                            <div className="-translate-y-[0.14rem]">{numberToWord(docData.jumlah_pengambilan)} RUPIAH</div>
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
                                    <div className="flex items-center pl-1 w-[20%] border border-black">
                                        <span>{docData.valuta}</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.jumlah_pjk}
                                            name="jumlah_pjk"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{CurrencyFormater(`${docData.valuta}`, docData.jumlah_pjk)},00</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>Terbilang</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7 absolute w-[35.7rem]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full ab h-3 border border-black border-b-transparent">
                                            <div className="-translate-y-[0.14rem]">{numberToWord(docData.jumlah_pjk)} RUPIAH</div>
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
                                    <div className="flex items-center pl-1 w-[20%] border border-black">
                                        <span>{docData.valuta}</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.jumlah_setor}
                                            name="jumlah_setor"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{CurrencyFormater(`${docData.valuta}`, docData.jumlah_setor)}</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>Terbilang</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7 absolute w-[35.7rem]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full ab h-3 border border-black border-b-transparent">
                                            <div className="-translate-y-[0.14rem]">{numberToWord(docData.jumlah_setor)} RUPIAH</div>
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
                                    <div className="flex items-center pl-1 w-[20%] border border-black">
                                        <span>{docData.valuta}</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={handleChange}
                                            value={docData.saldo}
                                            name="saldo"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{CurrencyFormater(`${docData.valuta}`, docData.saldo)}</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr className="translate-y-2">
                                <td>Terbilang</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7 absolute w-[35.7rem]">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full ab h-3 border border-black border-b-transparent">
                                            <div className="-translate-y-[0.14rem]">{numberToWord(docData.saldo)} RUPIAH</div>
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
                                <div className="flex flex-col gap-[3.8rem]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="date"
                                            onChange={handleChange} //tempat_tanggal_tanda_tangan
                                            value={docData.tempat_tanggal_tanda_tangan}
                                            name="tempat_tanggal_tanda_tangan"
                                        />
                                    ) : (
                                        <div className="text-center">Bandung, {formatDateTandaTangan(docData.tempat_tanggal_tanda_tangan)}</div>
                                    )}
                                    <div className="flex flex-col">
                                        {editMode ? (
                                            <input
                                                className="relative z-20 outline-none border border-black w-32"
                                                type="text"
                                                onChange={handleChange}
                                                value={docData.pejabat_yang_berwenang}
                                                name="pejabat_yang_berwenang"
                                            />
                                        ) : (
                                            <div className="font-bold text-center">{docData.pejabat_yang_berwenang}</div>
                                        )}
                                        <div className="border-b-2 border-black w-44"></div>
                                        <div>
                                            <p>
                                                NIK :{' '}
                                                {editMode ? (
                                                    <input
                                                        className="relative z-20 outline-none border border-black w-32"
                                                        type="text"
                                                        // onChange={(e) => setNik(e.target.value)}
                                                        value={'nik'}
                                                        name="nik"
                                                    />
                                                ) : (
                                                    <span className="font-bold">{'nik'}</span>
                                                )}
                                            </p>
                                        </div>
                                        <div>Pejabat yang berwenang</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col pl-9 gap-2">
                            <div className="flex">
                                <div className="border border-black w-7 h-4"></div>
                                <div className="pl-[35px]">Disetujui</div>
                            </div>
                            <div className="flex">
                                <div className="border border-black w-7 h-4"></div>
                                <div className="pl-[35px]">Dikembalikan</div>
                            </div>
                            <div className="flex flex-col gap-14">
                                <div>
                                    <div>Catatan</div>
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            // onChange={(e) => setCatatanKadiv(e.target.value)}
                                            value={'catatanKadiv'}
                                            name="catatan"
                                        />
                                    ) : (
                                        <div className="font-bold">{docData.kepada}</div>
                                    )}
                                </div>
                                <div>
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            // onChange={(e) => setNamaCatatanKadiv(e.target.value)}
                                            value={'namaCatatanKadiv'}
                                            name="catatan"
                                        />
                                    ) : (
                                        <div className="font-bold border-b-2 border-black w-fit">{'namaCatatanKadiv'}</div>
                                    )}
                                    <div className="">Pejabat yang berwenang</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PjkDocumentLayout;
