import {useState} from 'react'
import './App.css'
import VSplitDateSelect from './components/VSplitDateSelect.jsx'

function App() {
  const [date, setDate] = useState()
  const getDateSelected = (value) => { 
    setDate(value)
  }

  return (
    <>
      <VSplitDateSelect data={new Date()} getDateSelected={getDateSelected}/>
      <p>Data selezionata: {date ? date.toDateString() : "Data non valida"}</p>
    </>
  )
}

export default App
