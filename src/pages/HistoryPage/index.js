import React, {useState} from 'react';
import './index.css'
function HistoryPage() {

  const [history, setHistory] = useState(['Climbing workout', '10km run'])

  return (
  <div className="historypage">
      <h1 className="history-title">Log History</h1>
      {history.map((value)=>{
        return(
          <div className="history-tab">
              <h3>{value}</h3>
          </div>
        )
      })}
  </div>
  );
}

export default HistoryPage;
