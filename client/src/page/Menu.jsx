import documentSVG from './../assets/document.svg';
import SelectionComponent from '../component/SelectionComponent';

function Menu() {
    return (
        <>
            <div>
                <div className="flex justify-center pt-10 text-3xl w-screen">MENU DOCUMENT</div>
                <div className="grid grid-cols-4 p-7 pl-32 gap-4">
                    <SelectionComponent
                        link={'/pjk'}
                        image={documentSVG}
                        tittle={'PJK'}
                    />
                </div>
            </div>
        </>
    );
}

export default Menu;
