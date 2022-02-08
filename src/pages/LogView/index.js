import React, {useEffect, useState} from 'react';
import './index.css'
import {useParams, useNavigate} from 'react-router-dom'
import {AiFillEdit, AiOutlineEdit} from 'react-icons/ai'
function LogView() {

    let {id} = useParams()
    const navigate = useNavigate()
    const [exercises, setExercises] = useState([])
    const [log, setLog] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getData()
    }, [])

    const getData = () =>{
        setLoading(true)
        fetch('https://localhost:44379/api/GetTrainingLogById/'+id)
        .then(response => response.json())
        .then(data => {
            setLog(data)
            console.log(data)
        })
        fetch('https://localhost:44379/api/GetExercisesById/'+ id)
        .then(response => response.json())
        .then(data => {
          setExercises(data)
          console.log(data)
        })
        setLoading(false)
    }

  return (
      <div className="logview-page">
          {loading ? 
          <div>
            <h1>Loading...</h1>
          </div> :
          <>
            <div className='log-header'>
              <h1>{log.title}</h1>
              <AiOutlineEdit onClick={()=>{navigate('/user/edit/'+id)}} className='edit-btn'/>
            </div>
            <small>{log.date}</small>
            <hr />
            {exercises.map((value)=>{
                return <h3 key={value.id}>{value.name}</h3>
            })}
            <hr />
            <p>Session time: {log.trainingTime}</p>
            <p>Session quality: {log.sessionQuality}</p>
            <h3>Notes:</h3>
            <p>{log.notes}</p>
          </>
          }
      </div>
  );
}

export default LogView;
