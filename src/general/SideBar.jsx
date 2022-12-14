import React from 'react';
import { format, endOfDay } from 'date-fns';

import SideBarButton from './SideBarButton';

const SideBar = ({ sideBarActive }) => {

    const todayDate = format(endOfDay(new Date()), "dd-MM-yyyy");
    const buttonTexts = [todayDate, "Timeline", "Download", "Upgrade", "Settings", "Contact Us"]

    return (
        <div className= {`w-48 mr-6 bg-yellow-300 flex-initial bg-opacity-80 duration-300 ${sideBarActive ? "active-side-bar" : "inactive-side-bar"}`}>
                {buttonTexts.map(i => <SideBarButton buttonText={i}/>)}
        </div>
    )
}

export default SideBar;