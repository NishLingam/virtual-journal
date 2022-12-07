import {useState, React} from 'react';
import HeaderBar from '../general/HeaderBar';
import SideBar from '../general/SideBar';
import DiarySection from '../general/DiarySection';

const HomePage = () => {
    const [sideBarActive, setSideBarActive] = useState(false);

    const sideBarHandler = () => {
       setSideBarActive(!sideBarActive);
    }

    return (
        <div className='flex flex-col h-screen'>
            <HeaderBar sideBarHandler={sideBarHandler}/>
            <div className='flex flex-1'>
                <SideBar sideBarActive={sideBarActive}/>
                <DiarySection />
            </div>
        </div>
    )
}

export default HomePage;