import React from 'react'
import { CChart } from '@coreui/react-chartjs'

export default function PolarAreaChart() {
  return (
    <div>
        <CChart
  type="polarArea"
  data={{
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }}
/>
    </div>
  )
}
