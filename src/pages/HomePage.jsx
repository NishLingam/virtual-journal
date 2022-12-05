import {useState, React} from 'react';
import moment from 'moment';

import HeaderBar from '../general/HeaderBar';
import SideBar from '../general/SideBar';
import DiarySection from '../general/DiarySection';

const HomePage = () => {
    const todayDate = moment();
    const [sideBarActive, setSideBarActive] = useState(false);
    const [activeDate, setActiveDate] = useState(todayDate);

    const nextDateHandler = () => {
        setActiveDate(moment(activeDate).add(1, "days"));
    }

    const prevDateHandler = () => {
        setActiveDate(moment(activeDate).subtract(1, "days"));
    }

    const sideBarHandler = () => {
       setSideBarActive(!sideBarActive);
    }
    console.log(activeDate)

    return (
        <div className='flex flex-col h-screen'>
            <HeaderBar sideBarHandler={sideBarHandler}/>
            <div className='flex flex-1'>
                <SideBar sideBarActive={sideBarActive}/>
                <DiarySection date={activeDate}/>
                <button onClick={nextDateHandler}> Next </button>
                <button onClick={prevDateHandler}> Previous </button>
            </div>
        </div>
    )
}

export default HomePage;