import React, { useEffect, useState } from 'react';
import './index.css'
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label, LineChart, Line } from 'recharts';
import {useAuth} from '../../contexts/AuthContext'

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [logData, setLogData] = useState([])
  const [ratingData, setRatingData] = useState([])
  const { user } = useAuth()
  useEffect(()=>{
    getDat();
  },[])

  const getDat = async () => {
    setLoading(true)
    fetch('https://localhost:44379/api/GetUserTrainingLogs/'+ user.uid)
    .then(response => response.json())
    .then(data => {
      data.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });
      if(ratingData.length == 0){
        data.forEach((value)=>{
          setRatingData((ratingData) => [...ratingData, {"name" : value.date, "hours":value.sessionQuality}])
        })  
      }
    })
    setLoading(false)
  }



  const trainingTimeDay = (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={ratingData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" >
        <Label value="Date" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Rating', angle: -90, position: 'insideLeft', offset:30 }} type={'number'} domain={[0,10]} ticks={[0,1,2,3,4,5,6,7,8,9,10]} />
        <Tooltip />
        <Line dataKey="hours" fill="var(--secondary)" />
      </LineChart>
    </ResponsiveContainer>

  );

  return (
    <>
    <div className="dashboard">
            <h1 className="dashboard-title">Your Dashboard</h1>
            <div className="main-graph-wrapper">
              <h2>Session quality over time</h2>
              {trainingTimeDay}
            </div>
    </div>
  </>
  );
}

export default Dashboard;
