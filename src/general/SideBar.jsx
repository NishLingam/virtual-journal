import React from 'react';

import SideBarButton from './SideBarButton';

const SideBar = ({ sideBarActive }) => {
    
    const todayDate = new Date().toJSON().slice(0, 10);;
    const buttonTexts = [todayDate, "Timeline", "Download", "Upgrade", "Settings", "Contact Us"]

    return (
        <div className= {`max-h-screen w-48 bg-yellow-300 flex-1 bg-opacity-80 duration-300 ${sideBarActive ? "active-side-bar" : "inactive-side-bar"}`}>
                {buttonTexts.map(i => <SideBarButton buttonText={i}/>)}
        </div>
    )
}

export default SideBar;