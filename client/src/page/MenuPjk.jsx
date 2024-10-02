import documentSVG from './../assets/document.svg';
import SelectionComponent from '../component/SelectionComponent';
import plusSVG from './../assets/plus.svg';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MenuPjk() {
    const [selectMode, setSelectMode] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            axios.get(`${import.meta.env.VITE_SERVER_API}api/folder`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((response) => {
                setData(response.data.data);
            });
        }

        fetchData();
    }, [data]);

    function handleSelectMode() {
        setSelectMode(!selectMode);
    }

    async function handleEdit(title) {
        const result = await Swal.fire({
            title: 'Edit?',
            showDenyButton: true,
            confirmButtonText: 'Edit',
            denyButtonText: 'Delete',
        });

        if (result.isConfirmed) {
            const { value: titleLocal } = await Swal.fire({
                title: 'Edit?',
                input: 'text',
                inputLabel: 'Nama Folder',
                inputValue: title,
                confirmButtonText: 'Edit',
                denyButtonText: 'Batal',
                showDenyButton: true,
            });

            if (titleLocal) {
                axios.put(
                    `${import.meta.env.VITE_SERVER_API}api/folder/${title}`,
                    { title: titleLocal },
                    { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                );
                Swal.fire(`Folder Di Edit Menjadi ${titleLocal}`, '', 'success');
            }
        } else if (result.isDenied) {
            try {
                axios.delete(`${import.meta.env.VITE_SERVER_API}api/folder/${title}`, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
                Swal.fire('Data Terhapus!', '', 'success');
            } catch (error) {
                console.log(error.message || error);
            }
            Swal.fire('Data Telah di Hapus', '', 'success');
        }
    }

    async function handleCreateNew() {
        try {
            const { value: title } = await Swal.fire({
                title: 'Buat Folder Baru?',
                showDenyButton: true,
                input: 'text',
                inputLabel: 'Nama Folder',
                confirmButtonText: 'Buat',
                denyButtonText: `Batal`,
            });
            if (title) {
                axios.post(`${import.meta.env.VITE_SERVER_API}api/folder`, { title: title }, { withCredentials: true, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
                Swal.fire(`Folder ${title} Telah Dibuat`, '', 'success');
            }
        } catch (error) {
            console.log(error.message || error);
        }
    }

    return (
        <>
            <div>
                <div className="flex justify-center items-center relative w-[104%] h-14 text-3xl">
                    <span className={`relative border-2 rounded w-full text-center z-10 ${selectMode ? 'text-red-700 font-bold' : ''}`}>TAHUN PJK DOCUMENT{selectMode ? ' : EDIT MODE' : ''}</span>

                    <div className="absolute top-0 right-0 mt-2 mr-2 z-20">
                        <button
                            className="px-4 py-2 bg-blue-500 text-lg text-white rounded"
                            onClick={handleSelectMode}>
                            {selectMode ? 'Cancel' : 'Edit Folder'}
                        </button>
                    </div>
                </div>

                {selectMode ? (
                    <div className="flex justify-center items-center p-10 pl-32 gap-4 ">
                        {data.map((items) => {
                            return (
                                <SelectionComponent
                                    key={items.id}
                                    onClick={() => handleEdit(items.title)}
                                    greenColor={true}
                                    image={documentSVG}
                                    tittle={items.title}
                                />
                            );
                        })}
                        <SelectionComponent
                            onClick={handleCreateNew}
                            image={plusSVG}
                            tittle={'Buat Baru'}
                        />
                    </div>
                ) : (
                    <div className="flex justify-center items-center p-10 pl-32 gap-4 ">
                        {data.map((items) => {
                            return (
                                <SelectionComponent
                                    key={items.id}
                                    link={`/pjk/menu/${items.title}`}
                                    image={documentSVG}
                                    tittle={items.title}
                                />
                            );
                        })}
                        <SelectionComponent
                            onClick={handleCreateNew}
                            image={plusSVG}
                            tittle={'Buat Baru'}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default MenuPjk;
