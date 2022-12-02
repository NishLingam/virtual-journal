import React from 'react';
const HeaderBar = ({ sideBarHandler }) => {
    

    return (
        <div className='w-screen h-32 bg-yellow-400 flex justify-between items-center font-mono'>
            <i className="fas fa-bars svg-icon" onClick={sideBarHandler}></i>
            <p className='text-4xl'>V-Journal</p>
            <i className="fas fa-bars svg-icon invisible"></i>
        </div>
    )
}

export default HeaderBar;