
import questionsList from "../data/JournalQuestionDictionary";
import moment from 'moment';

const DiarySection = ({ date }) => { 

    const day = date.format("DD")
    const month = date.format("MMM")
    const year = date.format("YYYY")

    const dateIndex = date.format("DDD") - 335;


    return (
        <div className='flex flex-col flex-grow font-mono'> 
            <div className='flex items-end py-6'>
                <div className='text-5xl'> {day} {month} </div> 
                <div className='text-xl ml-6'> {year} </div>
            </div>
            
            <div className='py-12 italic text-3xl'> {questionsList[dateIndex]} </div>
            <form className='mr-6 mb-6 flex flex-grow bg-yellow-100 italic cursor-pointer rounded-3xl'>
                <textarea className="p-8 italic h-full w-full flex justify-center items-start" type="text" placeholder='Click to start typing...' />
            </form>
        </div>
    )
}

export default DiarySection;