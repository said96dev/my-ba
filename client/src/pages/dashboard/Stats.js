import { useEffect , useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { Loading , StatsContainer } from '../../components'

function Stats() {
  const {showStats , isLoading} = useContext(AppContext)
  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  } , [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
        <StatsContainer />
    </>
  )
}

export default Stats