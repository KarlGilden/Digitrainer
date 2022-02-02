import React, {useState} from 'react';
import './index.css'
import {FaPlus} from 'react-icons/fa'
import Slider from 'react-input-slider';
import Button from '../../components/Button'
import {useAuth} from '../../contexts/AuthContext'
function NewLogPage() {
  const {user} = useAuth()
  const sessionTime = new Date('August 19, 1975 00:00:00')
  const [title, setTitle] = useState('');
  const [datetime, setDatetime] = useState(null);
  const [sessionHr, setSessionHr] = useState(null)
  const [sessionMin, setSessionMin] = useState(null)
  const [notes, setNotes] = useState('')
  const [sliderValue, setSliderValue] = useState({x:0});
  const [exercises, setExercises] = useState([{"name":"3x10 pushups"}, {"name":"3x10 pullups"}]);
  const [showExercises, setShowExercises] = useState(true)

  const handleSubmit = () => {
    sessionTime.setHours(sessionHr)
    sessionTime.setMinutes(sessionMin)
    console.log(sessionTime)
    fetch('https://localhost:44379/api/AddTrainingLog',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "accept": "text/plain"
      },
      body: JSON.stringify({
          title: title,
          date: datetime,
          trainingTime: sessionTime.toLocaleTimeString(),
          exercises: exercises,
          sessionQuality: sliderValue.x,
          notes: notes,
          userId: user.uid
        
      })
    })

  }

  return (
  <div className="newlogpage">
      <h1>New Log</h1>
      <div className="input-container">
        <input 
        className="date-input" 
        type="datetime-local" 
        onChange={(e)=>setDatetime(e.target.value)}
        />
        <input 
        className="title-input input" 
        placeholder="Title" 
        type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <div className="time-inputs input">
          <label>Session time:</label>
          <input 
          className="time-input" 
          type="number" 
          onChange={(e)=>setSessionHr(e.target.value)}
          />
          :
          <input 
          className="time-input" 
          type="number" 
          onChange={(e)=>setSessionMin(e.target.value)}
          />
        </div>


        <div className="exercises-dropdown input">
          <div onClick={()=>{setShowExercises(!showExercises)}} className="exercises-dropdown-header">
            <h3>Exercises</h3>
            <FaPlus className="add-icon"/>
          </div>
          {exercises && 
          <div className="exercises">
            {showExercises && exercises.map((value)=>{
              return <p>{value.name}</p>
            })}
          </div>
        }
        </div>
        
        {!exercises && 
          <div className="add-exercise input">
            <h3>Add Exercise</h3>
            <FaPlus className="add-exercise-icon"/>
          </div>
        }

        <label>Session quality / 10</label>
        <Slider
          styles={{
            track: {
              width: '100%',
              backgroundColor: 'grey',
              margin: '15px 0',
            },
            active: {
              backgroundColor: 'var(--secondary)'
            },
            thumb: {
              width: 20,
              height: 20,
            }
          }}
          axis="x"
          xmax={10}
          xmin={0}
          x={sliderValue.x}
          onChange={({ x }) => setSliderValue(sliderValue => ({ ...sliderValue, x }))}
        />    
        <p className="slider-value">{sliderValue.x}</p>

        <textarea 
        className="notes-input input" 
        placeholder="Notes..." 
        type="text" 
        onChange={(e)=>setNotes(e.target.value)}
        />

          <button text="Submit" className="submit-btn" onClick={()=>{handleSubmit()}}>Submit</button>

        </div>


  </div>
  );
}

export default NewLogPage;
