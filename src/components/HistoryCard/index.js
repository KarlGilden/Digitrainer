import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
function HistoryCard(props) {
    const navigate = useNavigate()
  return (
  <div onClick={()=>{navigate('/user/log/'+props.id)}} className="history-tab">
      {props.title}
      {props.date}
  </div>
  );
}

export default HistoryCard;
