import React, {useEffect, useState} from 'react';
import './index.css'
import {useParams} from 'react-router-dom'

function LogView() {

    let {id} = useParams()

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
        setLoading(false)
    }

  return (
      <div className="logview-page">
          {loading ? 
          <div>
            <h1>Loading...</h1>
          </div> :
          <>
           <h1>{log.title}</h1>
            <small>{log.date}</small>
            <p>{log.notes}</p>
          </>
          }
      </div>
  );
}

export default LogView;
