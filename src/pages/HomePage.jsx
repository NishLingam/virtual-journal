import {useState, React} from 'react';
import HeaderBar from '../general/HeaderBar';
import SideBar from '../general/SideBar';


const HomePage = () => {
    const [sideBarActive, setSideBarActive] = useState(false);

    const sideBarHandler = () => {
       setSideBarActive(!sideBarActive);
       console.log(sideBarActive);
    }

    return (
        <div className="flex flex-col h-screen">
            <HeaderBar sideBarHandler={sideBarHandler}/>
            <SideBar sideBarActive={sideBarActive}/>
        </div>
    )
}

export default HomePage;