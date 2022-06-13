import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  box-shadow: var(--shadow-2);
  .form {
    margin: 3rem auto;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem 2.5rem;
    max-width: 100%;
    width: 100%;
    padding-top:0 ;
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
  .edit-button-container {
    display:flex ;
    justify-content:end ;
    padding-top:1rem ;
  }
  @media (min-width: 992px) {
    
  }
  @media (min-width: 1120px) {
    
  }
  
`

export default Wrapper