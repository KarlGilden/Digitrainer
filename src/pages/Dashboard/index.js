import React from 'react';
import './index.css'
import { BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label } from 'recharts';

function Dashboard() {
  const trainingTimeDayData = [
    {
      "name": "Sun",
      "hours": 2
        },
    {
      "name": "Mon",
      "hours": 1.5,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Tue",
      "hours": 3,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Wed",
      "hours": 0.45,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Thurs",
      "hours": 2,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Fri",
      "hours": 3.5,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Sat",
      "hours": 1,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const trainingTimeDay = (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart  data={trainingTimeDayData} margin={{ top: 0, right: 0, left: -20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" >
        <Label value="Days" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft', offset:30 }} type={'number'} domain={[0,5]} ticks={[0,1,2,3,4,5]} />
        <Tooltip />
        <Bar dataKey="hours" fill="var(--secondary)" />
      </BarChart>
    </ResponsiveContainer>

  );

  return (
    <>
    <div className="dashboard">
            <h1 className="dashboard-title">Your Dashboard</h1>
            <div className="main-graph-wrapper">
              <h2>Daily training time</h2>
              {trainingTimeDay}
            </div>
    </div>
  </>
  );
}

export default Dashboard;
