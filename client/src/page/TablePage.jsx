import SelectionComponent from '../component/SelectionComponent';
import documentSVG from './../assets/document.svg';

function TablePage() {
    return (
        <>
            <div className="flex justify-center pt-10 text-3xl w-screen">MENU TABLE</div>

            <div className="flex justify-center items-center p-10 gap-4 pl-32">
                <SelectionComponent
                    link={'/tablemenu/pjk'}
                    image={documentSVG}
                    tittle={'TABLE PJK'}
                />
            </div>
        </>
    );
}

export default TablePage;
