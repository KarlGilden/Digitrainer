import React, {useEffect, useState} from 'react';
import './index.css'
import {FaPlus} from 'react-icons/fa'
import Slider from 'react-input-slider';
import {useAuth} from '../../contexts/AuthContext'
import {useParams} from 'react-router-dom'

function EditLogPage() {
  const {user} = useAuth()
  let {id} = useParams()
  const [title, setTitle] = useState('');
  const [exerName, setExerName] = useState('')
  const [exerSets, setExerSets] = useState(null)
  const [exerReps, setExerReps] = useState(null)
  const [exerError, setExerError] = useState('')
  const [datetime, setDatetime] = useState(null);
  const [sessionHr, setSessionHr] = useState(null)
  const [sessionMin, setSessionMin] = useState(null)
  const [notes, setNotes] = useState('')
  const [sliderValue, setSliderValue] = useState({x:0});
  const [exercises, setExercises] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    getData()
  }, [])

  const getData = () =>{
    fetch('https://localhost:44379/api/GetTrainingLogById/'+id)
    .then(response => response.json())
    .then(data => {
        const tempSessionTime = data.trainingTime.split(':')
        console.log(tempSessionTime)
        setTitle(data.title)
        setDatetime(data.date)
        setNotes(data.notes)
        setSliderValue({...sliderValue, x: data.sessionQuality})
        setSessionHr(tempSessionTime[0])
        setSessionMin(tempSessionTime[1])
        console.log(data)
    })
    fetch('https://localhost:44379/api/GetExercisesById/'+ id)
    .then(response => response.json())
    .then(data => {
      setExercises(data)
      console.log(data)
    })
}

  const handleSubmit = () => {
    fetch('https://localhost:44379/api/UpdateTrainingLog',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "accept": "text/plain"
      },
      body: JSON.stringify({
          id: id,
          title: title,
          date: datetime,
          trainingTime: sessionHr + ":" + sessionMin,
          exercises: exercises,
          sessionQuality: sliderValue.x,
          notes: notes,
          userId: user.uid
        
      })
    })

  }

  const handleExerSubmit = () =>{
    setExerError('')
    if (exerSets == null || exerReps == null || exerName == ''){
      setExerError('Please enter all inputs')
    }else{
      var exerString = exerSets + ' x ' + exerReps + ' ' + exerName
      setExercises((exercises) => [...exercises, {"name" : exerString}])
      setShowModal(false)
      setExerReps(null)
      setExerSets(null)
      setExerName('')
    }


  }

  return (
  <div className="newlogpage">
    {showModal && 
          <div className="add-exercise-modal-wrapper">
            <div className="add-exercise-modal">
              <h1 className='add-exercise-title'>New Exercise</h1>
              <div className="add-exercise-inputs">
                <input 
                  className='login-input' 
                  type="text" 
                  placeholder='name' 
                  onChange={(e)=>setExerName(e.target.value)}
                />
                <div>
                  <input 
                    type="number" 
                    min='1'
                    
                    placeholder='sets' 
                    onChange={(e)=>setExerSets(e.target.value)}
                  />
                  <input 
                    type="number" 
                    min='1'

                    placeholder='reps per set' 
                    onChange={(e)=>setExerReps(e.target.value)}
                    />
                </div>
              </div>
              {exerError}
              <div className="exercise-buttons">
              <button className='exercise-button' onClick={()=>setShowModal(false)}>Cancel</button>
              <button className='exercise-button colored' onClick={handleExerSubmit}>Add</button>
              </div>
            </div>
          </div>
    }

      <div className="new-log-header">`
        <h1 className='log-title'>Edit a log</h1>
      </div>
      <div className="input-container">
        <input 
        className="date-input" 
        type="datetime-local" 
        value={datetime}
        onChange={(e)=>setDatetime(e.target.value)}
        />
        <input 
        className="title-input input" 
        value={title} 
        type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <div className="time-inputs input">
          <label>Session time:</label>
          <input 
          className="time-input" 
          type="number" 
          value={sessionHr}
          onChange={(e)=>setSessionHr(e.target.value)}
          />
          :
          <input 
          className="time-input" 
          type="number" 
          value={sessionMin}
          onChange={(e)=>setSessionMin(e.target.value)}
          />
        </div>


        <div className="exercises-dropdown input">
          <div className="exercises-dropdown-header" onClick={()=>setShowModal(true)}>
            <h3>Exercises</h3>
            <FaPlus className="add-icon"/>
          </div>
          {exercises && 
          <div className="exercises">
            {exercises.map((value)=>{
              return <p>{value.name}</p>
            })}
          </div>
        }
        </div>

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
        value={notes}
        onChange={(e)=>setNotes(e.target.value)}
        />

          <button text="Submit" className="submit-btn" onClick={()=>{handleSubmit()}}>Submit</button>

        </div>


  </div>
  );
}

export default EditLogPage;
