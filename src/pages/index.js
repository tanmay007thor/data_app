import BarChart from './chart/BarChart'
import Chartis from './chart/Chart'
import PieChart from './chart/PieChart'
import PolarAreaChart from './chart/PolarAreaChart'
import RadarChart from './chart/RadarChart'
import Nav from './chart/navbar/Nav'
export default function Home() {
  return (
    <>
    <Nav />
     <Chartis />
     <BarChart />
     <PieChart />
     <PolarAreaChart />
     <RadarChart />
    </>
  )
}
