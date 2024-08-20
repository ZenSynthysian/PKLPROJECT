import { Link } from 'react-router-dom';

function TablePage() {
    return (
        <>
            <div className="flex justify-center pt-10 text-3xl">MENU TABLE</div>

            <div className="grid grid-cols-4 p-7 gap-4 pl-32">
                <Link to={'pjk'}>
                    <div className="flex flex-col justify-center items-center border-2 rounded-lg border-blue-500">TABLE PJK</div>
                </Link>
            </div>
        </>
    );
}

export default TablePage;
