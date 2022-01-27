import React, {useState, useEffect} from 'react';
import './index.css'
function HistoryPage() {

  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  });

  const getData = async () => {
    setLoading(true)
    fetch('https://localhost:44379/api/GetAllTrainingLogs')
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
          <div className="history-tab" key={value.id}>
              <h3>{value.title}</h3>
          </div>
        )
      })}
      </>
      }
  </div>
  );
}

export default HistoryPage;
