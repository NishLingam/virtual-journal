function getDates(startDateString, stopDateString) {
    const dateArray = new Array();
    let activeDate = new Date(startDateString);
    const stopDate = new Date(stopDateString);
    while (activeDate <= stopDate) {
        dateArray.push(new Date(activeDate).toDateString());
        activeDate = new Date(activeDate.setDate(activeDate.getDate() + 1))
    }
    return dateArray;
}

const dateArray = getDates("1/1/2022", "12/31/2022");  

const questionDictionary = {
    dateArray[0]: "How are you?",
    dateArray[1]: "Who are you"
}

console.log(dateArray);