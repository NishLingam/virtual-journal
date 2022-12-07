import React from 'react';

const SideBarButton = ({ buttonText }) => {
    return (
        <div className="flex p-6 font-mono cursor-pointer hover:text-gray-600">
            {buttonText}
        </div>
    )
}

export default SideBarButton;