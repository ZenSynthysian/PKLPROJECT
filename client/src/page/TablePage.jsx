import SelectionComponent from '../component/SelectionComponent';
import documentSVG from './../assets/document.svg';

function TablePage() {
    return (
        <>
            <div className="flex justify-center pt-10 text-3xl w-screen">MENU TABLE</div>

            <div className="grid grid-cols-4 p-7 gap-4 pl-32">
                <SelectionComponent
                    link={'/tablemenu/pjk'}
                    image={documentSVG}
                    tittle={'PJK'}
                />
            </div>
        </>
    );
}

export default TablePage;
