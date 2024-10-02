import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditDataPribadi() {
    const { id } = useParams();
    const [nama, setNama] = useState('');
    const [noRek, setNoRek] = useState('');
    const [namaDanAlamatBank, setNamaDanAlamatBank] = useState('');
    const [unitOrganisasi, setUnitOrganisasi] = useState('');

    useEffect(() => {
        try {
            axios
                .get(`${import.meta.env.VITE_SERVER_API}api/datauser/${id}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    setNama(response.data.data.nama);
                    setNoRek(response.data.data.no_rek);
                    setNamaDanAlamatBank(response.data.data.nama_alamat_bank);
                    setUnitOrganisasi(response.data.data.unit_organisasi);
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    }
                });
        } catch (error) {
            return console.log(error.message || error);
        }
    }, [id]);

    function handleChangeNama(e) {
        setNama(e.target.value);
    }

    function handleChangeNoRek(e) {
        setNoRek(e.target.value);
    }

    function handleChangenamaDanAlamatBank(e) {
        setNamaDanAlamatBank(e.target.value);
    }

    function handleChangeunitOrganisasi(e) {
        setUnitOrganisasi(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            axios
                .put(`${import.meta.env.VITE_SERVER_API}api/datauser/${id}`, data, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data);
                    window.location.replace('/datapribadiconfiguration/1');
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    }
                });
        } catch (error) {
            return console.log(error.message || error);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="border-2 rounded-xl border-blue-500 p-3 flex flex-col gap-16 shadow-2xl bg-white">
                    <div className="text-3xl text-center p-10">Edit Data</div>
                    <form
                        className="flex flex-col gap-10 items-center"
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="Nama"
                            type="text"
                            value={nama}
                            name="nama"
                            onChange={handleChangeNama}
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <input
                            placeholder="Nomor Rekening"
                            type="text"
                            value={noRek}
                            name="no_rek"
                            onChange={handleChangeNoRek}
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Nama Dan Alamat Bank"
                                type={'text'}
                                value={namaDanAlamatBank}
                                name="nama_alamat_bank"
                                onChange={handleChangenamaDanAlamatBank}
                                className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Unit Organisasi"
                                type={'text'}
                                value={unitOrganisasi}
                                name="unit_organisasi"
                                onChange={handleChangeunitOrganisasi}
                                className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full border-2 rounded-full p-1 h-10 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-500 hover:to-blue-950  hover:h-12 transition-all ease-in-out duration-150"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditDataPribadi;
