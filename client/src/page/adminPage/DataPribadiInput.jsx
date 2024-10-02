import axios from 'axios';

function DataPribadiInput() {
    function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            axios
                .post(`${import.meta.env.VITE_SERVER_API}api/datauser`, data, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((response) => {
                    console.log(response.data);
                    window.location.replace('/datapribadiconfiguration1');
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
                    <div className="text-3xl text-center p-10">Buat Data Baru</div>
                    <form
                        className="flex flex-col gap-10 items-center"
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="Nama"
                            type="text"
                            name="nama"
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <input
                            placeholder="No Rekening"
                            type="text"
                            name="no_rek"
                            className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start input-gradient-transition"
                        />
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Nama & Alamat Bank"
                                type={'text'}
                                name="nama_alamat_bank"
                                className="w-96 p-1 outline-none border-b-2 rounded border-blue-500 focus:border-b-4 placeholder:text-start"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Unit Organisasi"
                                type={'text'}
                                name="unit_organisasi"
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

export default DataPribadiInput;
