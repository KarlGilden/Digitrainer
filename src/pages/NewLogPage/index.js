import React, {useState} from 'react';
import './index.css'
import {FaPlus} from 'react-icons/fa'
import Slider from 'react-input-slider';
import Button from '../../components/Button'

function NewLogPage() {

  const [title, setTitle] = useState('');
  const [datetime, setDatetime] = useState(null);
  const [sessionTime, setSessionTime] = useState(null)
  const [notes, setNotes] = useState('')
  const [sliderValue, setSliderValue] = useState({x:0});
  const [exercises, setExercises] = useState(["3x10 pushups", "3x10 pullups"]);
  const [showExercises, setShowExercises] = useState(true)

  const handleSubmit = () => {
    console.log(datetime)
    console.log(title)
    console.log(sessionTime)
    console.log(sliderValue)
    console.log(exercises)
    console.log(notes)

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
          type="time" 
          onChange={(e)=>setSessionTime(e.target.value)}
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
              return <p>{value}</p>
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

          <Button text="Submit" className="submit-btn" onClick={()=>{handleSubmit()}}></Button>

        </div>


  </div>
  );
}

export default NewLogPage;
