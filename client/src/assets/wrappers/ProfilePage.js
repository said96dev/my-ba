import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow-2);
  
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 3rem auto;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem 2.5rem;
    max-width: 100%;
    width: 100%;
    hr {
    border:none;
    height: 3px;
    background-color: var(--grey-200) ;
    margin:2rem 0 2rem 0  ;
}
.submit-btn {
  width:50% ;
  justify-self:end ;
  grid-column-start:3 ;
  grid-row-start:3 ;
}
  }
  .form-row {
    margin-bottom: 0;
    
  }
  .form-center {
    display: grid;
    row-gap: 2rem;
    .MuiIconButton-root{
      align-self: center;
      height: 0;
      margin-top: 0;
    }
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .section-title {
    color: var(--primary-600);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
  
`

export default Wrapper