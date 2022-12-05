import {useState, React} from 'react';
import HeaderBar from '../general/HeaderBar';
import SideBar from '../general/SideBar';
import DiarySection from '../homepage/DiarySection';

const HomePage = () => {
    const todayDate = new Date().toJSON().slice(0, 10);;
    const [sideBarActive, setSideBarActive] = useState(false);

    const sideBarHandler = () => {
       setSideBarActive(!sideBarActive);
    }

    return (
        <div className='flex flex-col h-screen'>
            <HeaderBar sideBarHandler={sideBarHandler}/>
            <div className='flex flex-1'>
                <SideBar sideBarActive={sideBarActive} todayDate={todayDate}/>
                <DiarySection />
            </div>
        </div>
    )
}

export default HomePage;