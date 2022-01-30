import React, {useState, useEffect} from 'react';
import './index.css'
import {useAuth} from '../../contexts/AuthContext'
import HistoryCard from '../../components/HistoryCard';
function HistoryPage() {
  const {user} = useAuth()
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  });

  const getData = async () => {
    setLoading(true)
    fetch('https://localhost:44379/api/GetUserTrainingLogs/'+ user.uid)
    .then(response => response.json())
    .then(data => {
      setHistory(data)
    })
    setLoading(false)
  }


  return (
  <div className="historypage">
      <h1 className="history-title">Log History</h1>
      {!loading && 
      <>
      {history.map((value)=>{
        return(
          <HistoryCard key={value.id} id={value.id} title={value.title} date={value.date}/>
        )
      })}
      </>
      }
  </div>
  );
}

export default HistoryPage;
