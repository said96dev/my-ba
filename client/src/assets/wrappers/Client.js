import styled from 'styled-components'

const Wrapper = styled.article`
.cardContent {
    display:grid ;
    grid-template-columns:repeat(2 , 1fr) ;
    align-items:center ;
    margin-top:5px ;
    .full-row {
      grid-column:1/3 ;
    } ;
    
    h5{
      font-family: var(--bodyFont) !important ;
      display: flex ;
      align-items:center ;
    }
    
    .clintStatus{
        font-size: 1.2rem ;
        span {
            font-weight:bolder ;
            }
            .active {
              color : green
            };
            .inactive {
              color : var(--red-dark)
            }
    };
    .icon {
      color : var(--grey-400);
      font-size: 1.25rem;
    }
}
.header {
    border-bottom: 2px solid var(--grey-100);
    
}
.cardAction {
    .view-btn {
        color:var(--primary-500) ;
        padding:.5rem ;
        border-radius:5px ;
        transition: 0.3s ease-in-out all ;
        &:hover {
            background-color:var(--grey-100) ;
        }
    }
}
.content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

`

export default Wrapper
