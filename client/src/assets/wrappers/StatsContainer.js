import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  height: auto;
  align-items: flex-start;
  .statsCard {
    grid-column:1 / 3;
    display:grid ;
    grid-template-columns:1fr 1fr ;
    column-gap: 1rem;
    row-gap: 2rem;
  }
  .task-stats {
    padding: 2rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    .task-details {
      font-weight:bold;
      display:grid ;
      grid-template-columns: 1fr 1fr;
      justify-content:space-between;
      column-gap:1rem;
      div {
        width:100%;
        padding:.5rem 1rem;
        
        display:flex;
        flex-direction:column;
        align-items:center;
        border-radius:1rem ;
        
      }
      .open {
        color:#1e88e5;
        border: 2px solid #2196f3 ;
      }
      .overdue {
        color:#f44336;
        border: 2px solid #c62828 ;
      }
    }
    .task-overview{
      overflow:visible ;
    }
  }
  .projects-overview {
    width:100% ;
    grid-column:1/-1 ;
  }
  .recharts-wrapper svg{
overflow: inherit !important;
}
  @media (max-width: 768px) {
    grid-template-columns:  1fr;
    column-gap: 1rem;
  }

`
export default Wrapper