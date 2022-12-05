import React from 'react';

const DiaryPage = () => {
    const date = new Date().toDateString();
    const dayAndMonth = date.slice(4,10);
    const year = date.slice(11);


    const dateArray = getDates(new Date(), new Date("01/01/2022")) 
    console.log(dateArray);   

    return (
        <div className='flex flex-col flex-grow font-mono'> 
            <div className='flex items-end py-6'>
                <div className='text-5xl'> {dayAndMonth} </div> 
                <div className='text-xl ml-6'> {year} </div>
            </div>
            
            <div className='py-12 italic text-3xl'> Who do you miss? </div>
            <form className='mr-6 mb-6 flex flex-grow bg-yellow-100 italic cursor-pointer rounded-3xl'>
                <textarea className="p-8 italic h-full w-full flex justify-center items-start" type="text" placeholder='Click to start typing...' />
            </form>
        </div>
    )
}

export default DiaryPage;