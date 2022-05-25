import styled from "styled-components"
const Wrapper = styled.section `

button {
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  background: transparent;
  border-color: transparent;
}

#header {
  margin: 3rem auto 1rem auto;
  color: var(--primary-600);
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items:center ;
  padding:0 2rem ;
  button {
    color: var(--primary-600);
    transition: all 0.2s linear;
  }
  button:hover {
    background-color: #43334219
    }
}
#monthController{
    display:flex ;
    flex-direction:row ;
    justify-content:center ;
    align-items:center ;
    gap:1rem ;
    button {
    width:100% ;
    text-align:center ;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: var(--primary-600);
    display:flex ;
    flex-direction:row ;
    justify-content:center ;
    align-items:center ;
  }
    button:hover {
    background-color: rgba(70,44,68,0.10)
    }
  }
  .day-btn {
    border: 1px solid var(--primary-600);;
    padding:.3rem 1rem ;
    font-weight:lighter ;
    font-size:1.4rem ;
    border-radius:10px ;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      background-color: #43334219
    }
  }


#container {
  display:grid ;
  grid-template-columns: repeat(1 , 1fr) ;
}
#weekdays {
  width: 100%;
  display: grid;
  grid-template-columns:repeat(7 , 1fr) ;
  color: var(--primary-600);
  justify-items:center ;
  text-align: center;
  font-size:1.2rem ;
}
#weekdays div {
  width: 100px;
  padding: 10px;
}
#calendar {
  width: 100%;
  margin: auto;
  display:grid ;
  grid-template-columns: repeat(7 , 1fr) ;
  justify-items: center ;
  
}
.day {
  width:100% ;
  padding: 10px;
  height: 15rem;
  cursor: pointer;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 0px 3px #CBD4C2;
  display: flex;
  flex-direction: column;
  .dayValue{
    display:flex ;
    justify-content:space-between ;

  }
  .record {
    display:flex ;
    flex-direction:column ;
    overflow: visible;
    .recordHeader {
      display: flex ;
      justify-content:space-between ;
      width:100% ;
      align-items:center ;
      color : green ;
      .recordTitly {
        display:flex ;
        align-items:center ;
        gap:2px ;
      }
    }
    .recordDetails{
      text-align:center ;
      display:flex ;
      flex-direction: column;
      align-items:center ;
      gap:2px ;
      p{
        margin:0 ;
      }
      span {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        flex-direction:row ;
        gap:10px
      }
    }
  }
}
.day:hover {
  background-color: #e8faed;
}
.recordingsTypes {
  display:flex ;
    flex-direction:row ;
    gap:2rem ;
  div {
    width:40px;
    height:40px ;
    border-radius:50% ;
  }
}
.icon{
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
    .icon:hover {
    background-color: rgba(70,44,68,0.10)
    }

.day + .currentDay {
  background-color:#e8f4fa;
}
.record {
  font-size: 1rem;
  color: #000;
  border-radius: 5px;
  overflow: hidden;
}
.padding {
  cursor: default !important;
  opacity:0.5 ;
  color:gray ; 
  &:hover {
    background-color: #FFFFFF !important;
  } 
}
#newRecordModal, #deleteRecordModal {
  z-index: 20;
  padding: 25px;
  background-color: #e8f4fa;
  box-shadow: 0px 0px 3px black;
  border-radius: 5px;
  width: 350px;
  top: 100px;
  left: calc(50% - 175px);
  position: absolute;
}
#recordTitleInput {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px gray;
}
#recordTitleInput.error {
  border: 2px solid red;
}
#cancelButton, #deleteButton {
  background-color: #d36c6c;
}
#saveButton, #closeButton {
  background-color: #92a1d1;
}
#recordText {
  font-size: 14px;
}
#modalBackDrop {
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0,0,0,0.8);
}
@media (max-width: 992px) {
#container {
  overflow: hidden !important;
  display:flex ;
  flex-direction:column ;
  #weekdays{
    display:flex ;
    flex-direction:row ;
    font-size:0.8rem ;
  }
}
#header {
  display:flex ;
  font-size:1.2rem ;
  flex-direction:row;
  #monthController{
   display:flex ;
   .day-btn {
     display:none ;
   }
  }
  .recordingsTypes{
    display: flex;
    gap:.3rem;
    div {
      width:20px ;
      height:20px ;
    }
  }
}
}
  `

export default Wrapper