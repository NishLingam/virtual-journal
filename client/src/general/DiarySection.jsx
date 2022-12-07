import { 
    format,
    getDayOfYear,
    endOfDay,
 } from 'date-fns';
import DatePicker from "react-datepicker";

import questionsList from "../data/JournalQuestionDictionary";
import CalendarImg from "../images/calendarImg.png";
import { useState } from 'react';

const DiarySection = () => {
    const [diaryDate, setDiaryDate] = useState(endOfDay(new Date()));
    const day = format(diaryDate, "dd")
    const month = format(diaryDate, "MMM")
    const year = format(diaryDate, "yyyy")

    const dateIndex = getDayOfYear(diaryDate) - 335;

    const updateDate = (date) => {
        setDiaryDate(date)
    }

    const [data, setData] = useState("test");

    const testFunc = () => {
        fetch("/api")
        .then((res) => res.json())
        .then((testdata) => setData(testdata.message))
    }

    console.log(data);


    return (
        <div className='flex flex-col flex-grow'> 
            <div className='flex py-6 mr-8 items-end justify-between'>
                <div className='flex items-end py-6'>
                    <div className='text-5xl whitespace-nowrap mr-5'> {day} {month}</div> 
                    <div className='text-xl'> {year} </div>
                </div>
                <div>
                    <DatePicker selected={diaryDate} onChange={(date) =>updateDate(date)} customInput={<img src={CalendarImg} className="h-12" alt="Calendar"></img>} />
                </div>
                <button onClick={testFunc}> Test </button>
            </div>
            
            <div className='py-10 italic text-3xl'> {questionsList[dateIndex]} </div>
            <form className='mr-8 mb-6 flex flex-grow bg-yellow-100 italic cursor-pointer rounded-3xl'>
                <textarea className="p-8 italic h-full w-full flex justify-center items-start" type="text" placeholder='Click to start typing...' />
            </form>
        </div>
    )
}

export default DiarySection;