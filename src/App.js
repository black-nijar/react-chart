import React from 'react'
import LineChart from './components/LineChart'
import './App.css'
import BarChart from './components/BarChart'
import DoughnutChart from './components/Doughnut'
const  App = () => {
  return (
    <div className='App'>
      <div className='chart'>
        <LineChart/>
        <BarChart/>
        <DoughnutChart/>
      </div>
    </div>
  )
}

export default App
