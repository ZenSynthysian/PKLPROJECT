import SelectionComponent from '../../component/SelectionComponent';
import documentSVG from './../../assets/document.svg';

function AdminMenu() {
    return (
        <>
            <div>
                <div className="flex justify-center pt-10 text-3xl w-screen">MENU ADMIN</div>
                <div className="grid grid-cols-4 p-7 pl-32 gap-4">
                    <SelectionComponent
                        link={'/userconfiguration'}
                        image={documentSVG}
                        tittle={'USER'}
                    />
                    <SelectionComponent
                        link={'/datapribadiconfiguration'}
                        image={documentSVG}
                        tittle={'DATA PRIBADI'}
                    />
                    <SelectionComponent
                        link={'/datakadivconfiguration'}
                        image={documentSVG}
                        tittle={'DATA KADIV'}
                    />
                </div>
            </div>
        </>
    );
}

export default AdminMenu;
