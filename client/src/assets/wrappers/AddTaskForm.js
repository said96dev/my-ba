import styled from "styled-components"

const Wrapper = styled.section `
padding:  0 ;
width:100% ;
.add-Task-form {
    width:100% ;
    display: grid ;
    grid-template-columns:1fr 1fr ;
    grid-gap:2rem ;
    margin: 0;
    .description{
      display:flex ;
      flex-direction: column ;
      row-gap:2rem ;
    }
    .add-task-inputs {
        display:grid ;
        row-gap:2rem ;
        .MuiIconButton-root{
            align-self: center;
            height: 0;
            margin-top: 0;
        }
        button {
            align-self: end;
            height: 35px;
            margin-top: 1rem;
        }
    }
    .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  .btn-container{
      grid-column-start:2 ;
      display: flex ;
      gap:1rem ;
      font-size: 1.3rem;
      justify-content:end ;
      
  }
}
@media (max-width: 892px) {
    .add-Task-form {
      display:flex ;
      flex-direction:column ;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .add-Task-formr {
      grid-template-columns: 1fr 1fr;
    }
    .add-Task-form button {
      margin-top: 0;
    }
  }

`

export default Wrapper