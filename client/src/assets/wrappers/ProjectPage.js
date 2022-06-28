import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow-2);
  .form {
    margin: 3rem auto 0 auto;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem 2.5rem;
    max-width: 100%;
    width: 100%;
    height:100% ;
    padding-top:0 ;
    &:hover {
  box-shadow: var(--shadow-4);
}
  }
  .MuiStepIcon-root , .MuiStepIcon-root.MuiStepIcon-active , .MuiStepIcon-root.MuiStepIcon-completed {
    color:#2196f3 ;
  }
  .project-form {
    padding:24px  ;
   
  }
  .stepper-btn-container  {
    display:flex ;
    justify-content: space-between ;
    padding:24px ;
  }
  .basic-informaion-form ,  .presmission-form , .description-information-form , .project-details-form{
    display:flex ;
    flex-direction:column ;
    gap:2rem ;
  }
  .edit-form {
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:2rem ;

    .full-row {
      grid-column:1/3 ;
    }
    .MuiSlider-thumb {
      margin-top:0 ;
    }
  }
  .project-card {
    transition : 0.3s ease-in-out all;
    &:hover {
      box-shadow: var(--shadow-4);
      transform: scale(1.1);
    }
    h5{
      font-size:1rem ;
    }
  }
  .edit-button-container {
    display:flex ;
    justify-content:end ;
    grid-column-start: 2;
  }
  @media (max-width:600px) {
    .nodisplay {
      display:none ;
    }
  }
  @media (min-width: 1120px) {
    
  }
  
`

export default Wrapper