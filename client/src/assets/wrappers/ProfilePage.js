import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  
  h3 {
    margin-top: 0;
  }
  .form {
    width:100% ;
    
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
  .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
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
  //Client classes 

  .client-profile {
    display:grid ;
    grid-template-columns:.5fr 1fr ;
    column-gap:2rem ;
    .client-card {
      grid-row-end:1 ;
    }
    .client-details{
      grid-column:2/3 ;
      grid-row :span 2;
    }
    .card {
      display : flex ;
      flex-direction: column ;
      justify-content : start ;
      align-items:start;
      padding : 0;
      .MuiCardContent-root {
        padding : 0
      }
      .MuiCardActions-root {
        padding : 0;
        margin-top : 1rem
      }
    }
    .client-details {
      .edit-container{
        display:grid ;
        row-gap:2rem ;
        grid-template-columns:1fr 1fr 1fr ;
        column-gap:1rem
      }
      .full-row {
        grid-column:1/-1 ;
      }
      .btn {
        grid-column-start:3 ;
        justify-self:end ;
      }
    }
  }
    .MuiTabs-flexContainerVertical{
    height:100% !important;
    justify-content:space-between !important;
  }
  .user-profile-form {
    width:100 ;
    display:grid;
    grid-template-columns:repeat(2 , 1fr) ;
    column-gap:1rem ;
    row-gap:2rem ;
    .bigAvatar{
      background-color:var(--primaryLight) ;
      color : var(--primaryMain); 
      width : 80px;
      font-size: 50px;
      height: 80px;
      text-transform:capitalize ;
    }
  }
  .user-client-form {
    .card {
      padding:2rem ;
      background: var(--white);
      border-radius: var(--borderRadius);
      box-shadow: 0 20px 25px -5px rgb(25 45 255 / 20%),
    0 10px 10px -5px rgb(25 45 255 / 20%);
      padding: 2rem 2rem;
      margin: 3rem auto ;
      margin-top: 0;
      
      padding-bottom:0 ;
      transition: var(--transition);
    }
    .btn-View {
      background-color: var(--secondaryLight);
      color:var(--secondaryDark);
      padding:.8rem 1.5rem ;
  &:hover {
    }
  }
}
.form-user {
  max-height:60vh ;
}
.form-user-prject{
 overflow-y:auto ;
 overflow-x:hidden ;
 max-height:50vh;
 display:flex ;
 justify-content:flex-start ;
 align-items:center ;
 row-gap:2rem ;
 flex-direction:column ;
 margin:1rem 0 ;
 padding: 0 ;
 flex:1 1 0 ;
 overflow-y:auto;
 .new {
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--primary-500) ;
        }
 }
 .inprogress {
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--successMain) ;
        }
 }
 .closed {
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--errorMain) ;
        }
 }
 .paused {
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--warningMain) ;
        }
 }
 .cancelled {
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--orangeDark) ;
        }
 }
 .open{
  .MuiLinearProgress-barColorPrimary  {
          background-color:var(--primary-500) ;
        }
 }
 .project-user-card {
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding:1rem
 }
}

.full-row {
  grid-column:1 / -1  ;
}

  @media (max-width: 900px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    .client-profile {
    display:grid ;
    grid-template-columns: 1fr ;
    column-gap:2rem ;
    .client-details{
      grid-column:1 /-1 ;
    }
    .client-card {
      grid-column:1 /-1 ;
    }
    .edit-container {
      display:flex ;
      flex-direction:column ;
      }
    }
    .form-center {
      grid-template-columns: 1fr ;
    }
    .form-center button {
      margin-top: 0;
    }
    
  }
  @media (min-width: 1120px) {
    
  }
  
`

export default Wrapper