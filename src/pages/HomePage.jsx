import {useState, React} from 'react';
import { 
    endOfDay,
    addDays,
    subDays
 } from 'date-fns';
import HeaderBar from '../general/HeaderBar';
import SideBar from '../general/SideBar';
import DiarySection from '../general/DiarySection';

const HomePage = () => {
    const todayDate = endOfDay(new Date());
    const [sideBarActive, setSideBarActive] = useState(false);
    const [activeDate, setActiveDate] = useState(todayDate);

    const nextDateHandler = () => {
        setActiveDate(addDays(activeDate, 1));
    }

    const prevDateHandler = () => {
        setActiveDate(subDays(activeDate, 1));
    }

    const sideBarHandler = () => {
       setSideBarActive(!sideBarActive);
    }

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