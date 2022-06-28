import React , {useState , useContext , useEffect} from 'react'
import ReactApexChart from "react-apexcharts"
import Wrapper from '../assets/wrappers/ChartsContainer'
import { AppContext } from '../context/appContext'

function ClientsOverview() {
  const {clientsOverview} = useContext(AppContext)
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const date = [] ;
    const count = [] ;
    clientsOverview.map((item) =>{
      date.push(item.date)
      return count.push(item.count)
    })
    setCategory(date)
    setData (count)
   // eslint-disable-next-line 
  }, [])

  return (
    <Wrapper>
       <h4>Clients Overview</h4>
        
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
        name: 'New Clients',
        data: data
      }]}  type={ "line"} height={350} />
        
    </Wrapper>
  )
};

export default ClientsOverview