import React , {useState , useContext , useEffect} from 'react'
import ReactApexChart from "react-apexcharts"
import Wrapper from '../assets/wrappers/ChartsContainer'
import { AppContext } from '../context/appContext'

function ProjectsOverview() {
  const {projectsOverview} = useContext(AppContext)
  const [barChart, setBarChart] = useState(true)
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const date = [] ;
    const count = [] ;
    projectsOverview.map(item => {
      date.push(item.date)
      return count.push(item.count)
      
    })
    setCategory(date)
    setData (count)
    // eslint-disable-next-line 
  }, [])

  return (
    <Wrapper>
       <h4>Projects Overview</h4>
       <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ?  'Bar Chart' : 'Area Chart' }
      </button>

      <ReactApexChart  
      options={{
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: category
        },
        yaxis: {
          min: 0,
          labels: {
            formatter: function(val, index) {
              return Math.round(val);
            }
          }
        }
      }} 
      
      series={[{
        name: 'New Project',
        data: data
      }]}  type={barChart ? "area": "bar"} height={350} />
        
    </Wrapper>
  )
};

export default ProjectsOverview