import { initialState } from "./appContext";
import {LOGOUT_USER ,TOGGLE_SIDEBAR, CLEAR_ALERT, DISPLAY_ALERT , LOGIN_USER_BEGIN , LOGIN_USER_ERROR , LOGIN_USER_SUCCESS } from './action'
function AlertReducer(state , action) {
 if(action.type === DISPLAY_ALERT ){
    return {
        ...state, showAlert:true , alertType : "danger",
        alertText:"Please provide all values!"
    }
 }
 if(action.type === CLEAR_ALERT){
    return{
        ...state , showAlert: false , alertType: "" ,
        alertText:""
    }
 }
 if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if(action.type === LOGOUT_USER) {
    return {...initialState , 
      user: null,
      token: null,
    }
  }
}

export default AlertReducer