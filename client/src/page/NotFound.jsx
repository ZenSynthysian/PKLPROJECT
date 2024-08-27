import notFound from '../assets/notFound.svg';

function NotFound() {
    setTimeout(() => {
        window.location.replace('/');
    }, 1000 * 5);

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center p-3">
            <div className="text-3xl pt-3">Redirected Ke Home Dalam 5 Detik</div>
            <img
                className="floating text-4xl w-[44rem]"
                src={notFound}
            />
        </div>
    );
}

export default NotFound;
