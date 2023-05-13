import React, {useState, useEffect} from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const VSplitDateSelect = ({data, getDateSelected}) => {
    const [currentYear, setCurrentYear] = useState(data?.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(data?.getMonth());
    const [currentDay, setCurrentDay] = useState(data?.getDate());

    const [days, setDays] = useState([]);

    useEffect(() => {
        getNumOfDays(currentYear, currentMonth)
    }, [currentYear, currentMonth])

    useEffect(() => {
        if(currentDay != 0 && currentMonth!= 0 && currentYear!= 0) 
            getDateSelected(new Date(currentYear, currentMonth, currentDay))
        else
            getDateSelected(null)
    }, [currentYear, currentMonth, currentDay])
    

    const getNumOfDays = (year, month) => {
        let days = [];
        let maxDays = new Date(year, (+month)+1, 0).getDate();

        for (let i = 1; i <= maxDays; i++) {
            days.push(i);
        }
        
        setDays(days);

        if(maxDays < currentDay)
            setCurrentDay(0)
    }

    const createYears = () => {
        const years = [];
        for (let i = new Date().getFullYear(); i >= 1900; i--) {
            years.push(i);
        }
        return years;
    }

    return (
        <>
            <h1>VSplitDateSelect</h1>
            <select name="giorno" id="giorno" value={currentDay} onChange={(e) => setCurrentDay(e.target.value)}>
                <option key={0} value={0}>Giorno</option>
                {days.map((day, index) => 
                    <option key={index} value={day}>{day}</option>
                )} 
            </select>
            <select name="mese" id="mese" value={currentMonth} onChange={(e) => setCurrentMonth(e.target.value)}>
                <option key={0} value={0}>Mese</option>
                {months.map((month, index) => 
                    <option key={index} value={index}>{month}</option>
                )}    
            </select>
            <select name="anno" id="anno" value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>    
                <option key={0} value={0}>Anno</option>            
                {createYears().map((year, index) => 
                    <option key={index} value={year}>{year}</option>
                )}    
            </select> 
        </>
    )
}

export default VSplitDateSelect;