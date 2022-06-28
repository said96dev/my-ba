import React , {useContext } from 'react'
import StatItem from './StatItem'
import Wrapper from '../assets/wrappers/StatsContainer'
import { AppContext } from '../context/appContext'
import projectImg from "../assets/images/projectImg.svg";
import taskImg from "../assets/images/taskImg.svg";
import clientImg from "../assets/images/clientImg.svg"
import usersImg from "../assets/images/usersImg.svg"
import ProjectsOverview from "./ProjectsOverview"
import ReactApexChart from "react-apexcharts"
import PieCharts from "./PieCharts"
function StatsContainer() {
    const { totalClients, totalProject , totalTasks , totalUsers, tasksOverview , projectsOverview } = useContext(AppContext)
    /* const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
      const data = [] ;
      const count = [] ;
      tasksOverview.map(item => {
        data.push(item.name)
        count.push(item.value)
      })
      setCategory(data)
      setData (count)
    }, []) */
    /* const data = [
      { name: "inprogress" ,  value: tasksOverview ? tasksOverview.inprogress : 0  , },
      { name: "completed", value: tasksOverview ? tasksOverview.completed  : 0 , },
      { name: "cancelled", value:tasksOverview ? tasksOverview.cancelled  : 0 , },
      { name: "fresh" , value:tasksOverview ? tasksOverview.fresh  : 0 , },
      { name: "paused" , value:  tasksOverview ? tasksOverview.paused  : 0 , },
    ];
    const category = [
      "cancelled" , "fresh" , "completed"  , "paused" ,"inprogress"
    ]
    */
    
    const data= [
      tasksOverview?.cancelled || 0  ,
      tasksOverview?.fresh || 0,
      tasksOverview?.completed || 0, tasksOverview?.paused || 0,
      tasksOverview?.inprogress || 0
    ]
    const defaultStats = [
        {
          title: 'Projects',
          count: totalProject || 0 ,
          color: '#00e676',
          bcg: '#d6f9e0',
          bcgi: projectImg
        },
        {
          title: 'Tasks',
          count: totalTasks || 0 ,
          color: '#2196f3',
          bcg: '#e3f2fd',
          bcgi: taskImg
        },
        {
          title: 'Clients',
          count:  totalClients || 0 ,
          color: '#673ab7',
          bcg: '#ede7f6',
          bcgi: clientImg
        },
        {
          title: 'Employee',
          count:  totalUsers || 0 ,
          color: '#ffe57f',
          bcg: '#ede7f6',
          bcgi: usersImg
        },
      ]
    
  return (
    <Wrapper>
      <div className='statsCard'> 
      {defaultStats.map((item, index) => {
      return (<StatItem key={index} {...item} />)
    })}
      </div>

    <div className='task-stats'>
    <h3> Task Statistics</h3>
    <div style={{ width: "100%"}} >
      {/* <PieCharts data={data}/> */}
      <ReactApexChart  
      options = {{
        labels:[ "cancelled" , "fresh" , "completed"  , "paused" ,"inprogress",], 
            chart: {
              width: 480,
              type: 'polarArea'
            },
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1,
              colors: undefined
            },
            yaxis: {
              show: false
            },
            legend: {
              position: 'bottom'
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
          }
      }  
      series= {data} type = "polarArea" width={380} />
    </div>
    </div>
    {
      projectsOverview.length > 0 &&
      <div className='projects-overview'>
      <ProjectsOverview/>
      <PieCharts/>
    </div>
    }

  </Wrapper>
  )
}

export default StatsContainer