import { useState } from 'react';
import PtdPng from '../assets/ptd.png';
import { numberToWord } from '../helper/numberConverter';

function PjkDocumentLayout() {
    const [editMode, setEditMode] = useState(false);
    const [nomorPjk, setNomorPjk] = useState('[Kode]');
    const [kepadaYth, setKepadaYth] = useState('[KADIV ...]');
    const [KodeAnggaran, setKodeAnggaran] = useState('C51');
    const [wbsCC, setWbsCC] = useState(null);
    const [referensi, setReferensi] = useState(null);
    const [noPermohonanUangMuka, setNoPermohonanUangMuka] = useState(null);
    const [noTandaTerimaUang, setNoTandaTerimaUang] = useState(null);
    const [nama, setNama] = useState(null);
    const [noRekening, setNoRekening] = useState(null);
    const [namaDanAlamatBank, setNamaDanAlamatBank] = useState(null);
    const [unitOrganisasi, setUnitOrganisasi] = useState(null);
    const [pelaksanaanDariTanggal, setPelaksanaanDariTanggal] = useState('');
    const [pelaksanaanSampaiTanggal, setPelaksanaanSampaiTanggal] = useState('');
    const [nilaiJumlahPengambilan, setNilaiJumlahPengambilan] = useState(0);
    const [nilaiJumlahPjk, setNilaiJumlahPjk] = useState(0);
    const [nilaiJumlahSetor, setNilaiJumlahSetor] = useState(0);
    const [nilaiSaldo, setNilaiSaldo] = useState(0);
    const [tempatTanggalTandaTangan, setTempatTanggalTandaTangan] = useState('[Tempat, Tanggal]');
    const [nik, setNik] = useState('[NIK]');
    const [namaTTD, setNamaTTD] = useState('[NAMA]');
    const [catatanKadiv, setCatatanKadiv] = useState('[KADIV ...]');
    const [namaCatatanKadiv, setNamaCatatanKadiv] = useState('[NAMA]');

    const formatDate = (dateStr) => {
        // Extract year, month, and day from YYYY-MM-DD format
        const [year, month, day] = dateStr.split('-');
        // Return date in MM/DD/YYYY format
        return `${day}/${month}/${year}`;
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

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
                    {editMode ? 'Save' : 'Edit'}
                </button>
            </div>
            <div className="relative pb-10 flex printme justify-center items-center border-black">
                <div className="border-[1mm] border-black w-[8.5in] h-[11in] text-[11px]">
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
                                    onChange={(e) => setNomorPjk(e.target.value)}
                                    value={nomorPjk}
                                    name="nomor_pjk"
                                />
                            ) : (
                                <span id="nomor_pjk">{nomorPjk}</span>
                            )}
                        </span>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center p-1 pl-8  border-r-[1mm] border-black w-[70%]">
                            <div className="">Kepada Yth</div>
                            <div>
                                <strong className="text-[13px]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setKepadaYth(e.target.value)}
                                            value={kepadaYth}
                                            name="kepada"
                                        />
                                    ) : (
                                        <span>{kepadaYth}</span>
                                    )}
                                </strong>
                            </div>
                        </div>
                        <div className="flex flex-row gap-16 p-1 pl-8 ">
                            <div className="">Anggaran</div>
                            <div>:</div>
                            <div className="border h-fit  border-black pr-2 -translate-x-5">
                                {editMode ? (
                                    <input
                                        className="relative z-20 outline-none  w-6"
                                        type="text"
                                        onChange={(e) => setKodeAnggaran(e.target.value)}
                                        value={KodeAnggaran}
                                        name="anggaran"
                                    />
                                ) : (
                                    <span>{KodeAnggaran}</span>
                                )}
                            </div>
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
                                            onChange={(e) => setWbsCC(e.target.value)}
                                            value={wbsCC}
                                            name="wbs_cc"
                                        />
                                    ) : (
                                        <span>{wbsCC}</span>
                                    )}
                                </td>
                                <div className="flex gap-4 translate-x-[25.4rem]">
                                    <td>SN</td>
                                    <td>:</td>
                                    <td>asd</td>
                                </div>
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
                                            onChange={(e) => setReferensi(e.target.value)}
                                            value={referensi}
                                            name="refrensi"
                                        />
                                    ) : (
                                        <span>{referensi}</span>
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
                                            onChange={(e) => setNoPermohonanUangMuka(e.target.value)}
                                            value={noPermohonanUangMuka}
                                            name="no_permohonan_uang_muka"
                                        />
                                    ) : (
                                        <span>{noPermohonanUangMuka}</span>
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
                                            onChange={(e) => setNoTandaTerimaUang(e.target.value)}
                                            value={noTandaTerimaUang}
                                            name="no_tanda_terima_uang"
                                        />
                                    ) : (
                                        <span>{noTandaTerimaUang}</span>
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
                                            onChange={(e) => setNama(e.target.value)}
                                            value={nama}
                                            name="nama"
                                        />
                                    ) : (
                                        <span>{nama}</span>
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
                                            onChange={(e) => setNoRekening(e.target.value)}
                                            value={noRekening}
                                            name="no_rekening"
                                        />
                                    ) : (
                                        <span>{noRekening}</span>
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
                                            onChange={(e) => setNamaDanAlamatBank(e.target.value)}
                                            value={namaDanAlamatBank}
                                            name="nama_dan_alamat_bank"
                                        />
                                    ) : (
                                        <span>{namaDanAlamatBank}</span>
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
                                            onChange={(e) => setUnitOrganisasi(e.target.value)}
                                            value={unitOrganisasi}
                                            name="unit_organisasi"
                                        />
                                    ) : (
                                        <span>{unitOrganisasi}</span>
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
                                                name="pelaksanaan_dari_tanggal"
                                                value={pelaksanaanDariTanggal}
                                                onChange={(e) => setPelaksanaanDariTanggal(e.target.value)}
                                                className="outline-none border-none bg-transparent"
                                            />
                                        ) : (
                                            <div className="flex items-center">
                                                <div>{formatDate(pelaksanaanDariTanggal)}</div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="pl-7 w-[2in]">
                                    <div className="flex items-center pl-1 w-full border border-black">
                                        {editMode ? (
                                            <input
                                                type="date"
                                                name="pelaksanaan_sampai_tanggal"
                                                onChange={(e) => setPelaksanaanSampaiTanggal(e.target.value)}
                                                value={pelaksanaanSampaiTanggal}
                                                className="outline-none border-none bg-transparent"
                                            />
                                        ) : (
                                            <div className="flex items-center">
                                                <span>{formatDate(pelaksanaanSampaiTanggal)}</span>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-[8px]">
                                <td></td>
                                <td className="pl-7"></td>
                                <td className="pl-7">Valuta</td>
                                <td className="pl-7">Nilai</td>
                            </tr>

                            <tr>
                                <td>Jumlah Pengambilan</td>
                                <td className="pl-16">:</td>
                                <td className="pl-7">
                                    <div className="flex items-center pl-1 w-[20%] border border-black">
                                        <span>[IDR]</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setNilaiJumlahPengambilan(e.target.value)}
                                            value={nilaiJumlahPengambilan}
                                            name="nilai_jumlah_pengambilan"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-end pr-1 w-full border border-black">
                                            <span>{nilaiJumlahPengambilan}</span>
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
                                            <div className="-translate-y-[0.14rem]">{numberToWord(nilaiJumlahPengambilan)} RUPIAH</div>
                                        </div>
                                        <div className="w-full border border-black">
                                            <div className="h-4"></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-7"></td>
                            </tr>

                            <br />

                            <tr className="-translate-y-1 text-[8px]">
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
                                        <span>[IDR]</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setNilaiJumlahPjk(e.target.value)}
                                            value={nilaiJumlahPjk}
                                            name="nilai_jumlah_pjk"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{nilaiJumlahPjk}</span>
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
                                            <div className="-translate-y-[0.14rem]">{numberToWord(nilaiJumlahPjk)} RUPIAH</div>
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
                            <tr className="-translate-y-1 text-[8px]">
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
                                        <span>[IDR]</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setNilaiJumlahSetor(e.target.value)}
                                            value={nilaiJumlahSetor}
                                            name="nilai_jumlah_setor"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{nilaiJumlahSetor}</span>
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
                                            <div className="-translate-y-[0.14rem]">{numberToWord(nilaiJumlahSetor)} RUPIAH</div>
                                        </div>
                                        <div className="w-full border border-black">
                                            <div className="h-4"></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-7"></td>
                            </tr>

                            <br />

                            <tr className="-translate-y-1 text-[8px]">
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
                                        <span>[IDR]</span>
                                    </div>
                                </td>
                                <td className="pl-7 w-[2.in]">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setNilaiSaldo(e.target.value)}
                                            value={nilaiSaldo}
                                            name="nilai_saldo"
                                        />
                                    ) : (
                                        <div className="flex items-center pr-1 w-full border border-black justify-end">
                                            <span>{nilaiSaldo}</span>
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
                                            <div className="-translate-y-[0.14rem]">{numberToWord(nilaiSaldo)} RUPIAH</div>
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
                    {/* gap-28 on parrent div*/}
                    <div className="flex flex-col ">
                        <div className="pl-[67px]">
                            <div className="flex gap-6">
                                <div>a.</div>
                                <div>INVOICE</div>
                            </div>
                        </div>

                        <div className="pr-14">
                            <div className="flex justify-end">
                                <div className="flex flex-col gap-16">
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setTempatTanggalTandaTangan(e.target.value)}
                                            value={tempatTanggalTandaTangan}
                                            name="tempat_tanggal_tanda_tangan"
                                        />
                                    ) : (
                                        <div className="text-center">{tempatTanggalTandaTangan}</div>
                                    )}
                                    <div className="flex flex-col">
                                        {editMode ? (
                                            <input
                                                className="relative z-20 outline-none border border-black w-32"
                                                type="text"
                                                onChange={(e) => setNamaTTD(e.target.value)}
                                                value={namaTTD}
                                                name="nama_ttd"
                                            />
                                        ) : (
                                            <div className="font-bold text-center">{namaTTD}</div>
                                        )}
                                        <div className="border-b-2 border-black w-44"></div>
                                        <div>
                                            <p>
                                                NIK :{' '}
                                                {editMode ? (
                                                    <input
                                                        className="relative z-20 outline-none border border-black w-32"
                                                        type="text"
                                                        onChange={(e) => setNik(e.target.value)}
                                                        value={nik}
                                                        name="nik"
                                                    />
                                                ) : (
                                                    <span className="font-bold">{nik}</span>
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
                                            onChange={(e) => setCatatanKadiv(e.target.value)}
                                            value={catatanKadiv}
                                            name="catatan"
                                        />
                                    ) : (
                                        <div className="font-bold">{catatanKadiv}</div>
                                    )}
                                </div>
                                <div>
                                    {editMode ? (
                                        <input
                                            className="relative z-20 outline-none border border-black w-32"
                                            type="text"
                                            onChange={(e) => setNamaCatatanKadiv(e.target.value)}
                                            value={namaCatatanKadiv}
                                            name="catatan"
                                        />
                                    ) : (
                                        <div className="font-bold underline">{namaCatatanKadiv}</div>
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
