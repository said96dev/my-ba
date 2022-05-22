import { initialState } from "./appContext";
import {LOGOUT_USER ,TOGGLE_SIDEBAR, CLEAR_ALERT, DISPLAY_ALERT , LOGIN_USER_BEGIN , LOGIN_USER_ERROR , LOGIN_USER_SUCCESS ,HANDLE_CHANGE,
UPDATE_USER_BEGIN , UPDATE_USER_SUCCESS , UPDATE_USER_ERROR , ADD_USER_BEGIN , ADD_USER_ERROR , ADD_USER_SUCCESS ,  CLEAR_VALUES , CLEAR_FILTERS , GET_ALL_USERS_BEGIN , GET_ALL_USERS_SUCCESS , CHANGE_PAGE , GET_ALL_TASKS_SUCCESS, GET_ALL_TASKS_BEGIN,ADD_COMMENT_BEGIN , DELETE_COMMENT_BEGIN , UPDATE_COMMENT_BEGIN,
ADD_TASK_BEGIN , ADD_TASK_ERROR , ADD_TASK_SUCCESS , GET_TASK_BEGIN ,GET_TASK_ERROR , GET_TASK_SUCCESS , EDIT_TASK_BEGIN
,DELETE_TASK_BEGIN 
} from './action'
function AlertReducer(state , action) {
 if(action.type === DISPLAY_ALERT ){
    return {
        ...state, showAlert:true , 
        alertType : "danger",
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
  if(action.type === UPDATE_USER_BEGIN) {
    return {
      ...state , isLoading:true
    }
  }
  if(action.type === UPDATE_USER_SUCCESS){
    return{
      ...state ,
      isLoading:false , 
      token : action.payload.token,
      user:action.payload.user , 
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    }
  }
  if(action.type === UPDATE_USER_ERROR){
    return {
      ...state , 
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value , page : 1  };
  }
  if(action.type === ADD_USER_BEGIN) {
    return  {
      ...state , 
      isLoading:true
    }
  }
  if(action.type === ADD_USER_SUCCESS){
    return {
      ...state , 
      isLoading:false,
      alertType:"success", 
      alertText:"New User Created!",
      showAlert:true
    }
  }
  if(action.type === ADD_USER_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      position: "",
      name: "",
      password : "" , 
      email:"",
      lastName: "",
      role: "",
      taskPriority : "high" , 
      description: "", 
      taskStatus:"fresh",
      deadline: Date.now(),
      remark:[],
      assignedTo:"" ,
      title:"",
      taskType: "external" ,

    };
    return { ...state, ...initialState };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      role: "all",
      position: "all",
      sort: "latest",

    };
  }
  if(action.type === GET_ALL_USERS_BEGIN){
    return {
      ...state , isLoading : true ,
    }
  }
  if(action.type === GET_ALL_USERS_SUCCESS){
    return{
      ...state , 
      isLoading:false ,
      users:action.payload.users,
      totalUsers: action.payload.totalUsers,
      numOfPages: action.payload.numOfPages,
    }
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
  if(action.type === GET_ALL_TASKS_BEGIN){
    return {...state, isLoading:true}
  }
  if(action.type === GET_ALL_TASKS_SUCCESS){
    return {
      ...state , 
      isLoading:false ,
      tasks:action.payload.task,
      totalTask:action.payload.totalTasks,
      assignedToOptionen:action.payload.users
    }
  }

  if(action.type === ADD_TASK_BEGIN) {
    return  {
      ...state , 
      isLoading:true
    }
  }
  if(action.type === ADD_TASK_SUCCESS){
    return {
      ...state , 
      isLoading:false,
      alertType:"success", 
      alertText:"New Task Created!",
      showAlert:true
    }
  }
  if(action.type === ADD_TASK_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if(action.type === DELETE_TASK_BEGIN){
    return{
      ...state , 
      isLoading:true
    }
  }
  if(action.type === EDIT_TASK_BEGIN){
    return{
      ...state , 
      isLoading:true
    }
  }
  if(action.type === GET_TASK_BEGIN){
    return{
      ...state , 
      isLoading:true
    }
  }
  if(action.type === GET_TASK_SUCCESS){
    return{
      ...state , 
      isLoading:false , 
      oneTask : action.payload.task,
      totalComments : action.payload.totalComments
    }
  }
  if(action.type === GET_TASK_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if(action.type === ADD_COMMENT_BEGIN){
    return {
      ...state , 
      isLoading:true
    }
  }
  if(action.type === DELETE_COMMENT_BEGIN){
    return {
      ...state , 
      isLoading:true
    }
  }
}

export default AlertReducer