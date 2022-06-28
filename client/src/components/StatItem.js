import Wrapper from '../assets/wrappers/StatItem'

const StatsItem = ({ count, title, color, bcg , bcgi}) => {
  return (
    <Wrapper color={color} bcg={bcg} bcgi={bcgi}>
      <header>
        <span className='count'>{count}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}

export default StatsItem