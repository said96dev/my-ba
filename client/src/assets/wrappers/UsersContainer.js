import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
  font-family: var(--headingFont) !important;

  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .users   {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .clients {
      width:100% ;
    }
    .card {
      text-transform:capitalize ;
    }
    .project-container {
      display:grid ;
      grid-template-columns:1fr 1fr 1fr 1fr ;
      height: auto;
      align-items: flex-start; 
      gap:1.5rem ;
      .css-46bh2p-MuiCardContent-root {

      }
      .project-card {
        .MuiLinearProgress-barColorPrimary  {
          background-color:var(--primary-500) ;
        }
        .MuiBox-root{
        padding:0px;
        margin-right: 0px
    }
    
    .mb-3 {
      margin-bottom: 1.8rem;
    }
    h5 {
      font-weight:bolder ;
      span {
        font-weight: lighter ;
        display:block ;
        font-size:1rem ;
        padding:.5rem 0 0 0    ;
        
      }
    }
  }
}
    
  @media (min-width: 992px) {
    .users {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    
  }
 
  @media (max-width: 1500px) {
  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
  }
  }
  @media (max-width: 1200px) {
    .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
  }
  @media (max-width: 650px) {
    .project-container {
    display: grid;
    grid-template-columns:  1fr;
    row-gap: 2rem;
  }
  }
  .css-1ri6ub7-MuiPaper-root-MuiCard-root{
    max-width:100% ;
  }
`
export default Wrapper
