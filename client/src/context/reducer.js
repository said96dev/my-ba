import { initialState } from "./appContext";
import {LOGOUT_USER ,TOGGLE_SIDEBAR, CLEAR_ALERT, DISPLAY_ALERT , LOGIN_USER_BEGIN , LOGIN_USER_ERROR , LOGIN_USER_SUCCESS ,HANDLE_CHANGE,
UPDATE_USER_BEGIN , UPDATE_USER_SUCCESS , UPDATE_USER_ERROR , ADD_USER_BEGIN , ADD_USER_ERROR , ADD_USER_SUCCESS ,  CLEAR_VALUES , CLEAR_FILTERS , GET_ALL_USERS_BEGIN , GET_ALL_USERS_SUCCESS , CHANGE_PAGE , GET_ALL_TASKS_SUCCESS, GET_ALL_TASKS_BEGIN,ADD_COMMENT_BEGIN , DELETE_COMMENT_BEGIN ,
ADD_TASK_BEGIN , ADD_TASK_ERROR , ADD_TASK_SUCCESS , GET_TASK_BEGIN ,GET_TASK_ERROR , GET_TASK_SUCCESS , EDIT_TASK_BEGIN
,DELETE_TASK_BEGIN ,GET_ALL_RECORDS_BEGIN , GET_ALL_RECORDS_SUCCESS, 
ADD_RECORD_BEGIN, ADD_RECORD_SUCCESS , ADD_RECORD_ERROR, DELETE_RECORD_BEGIN ,GET_ALL_CLIENTS_BEGIN , GET_ALL_CLIENTS_SUCCESS , ADD_CLIENT_BEGIN , ADD_CLIENT_SUCCESS , ADD_CLIENT_ERROR, GET_ALL_EMPLOYE_SUCCESS , GET_ALL_EMPLOYE_BEGIN, ADD_PROJECT_BEGIN , ADD_PROJECT_SUCCESS , ADD_PROJECT_ERROR , 
GET_ALL_PROJECT_BEGIN , GET_ALL_PROJECT_SUCCESS , DELETE_CLIENT_BEGIN ,EDIT_CLIENT_BEGIN ,
EDIT_PROJECT_BEGIN , DELETE_PROJECT_BEGIN , 
GET_CLIENT_BEGIN  , GET_CLIENT_SUCCESS, SHOW_STATS_BEGIN , SHOW_STATS_SUCCESS ,GET_USER_BEGIN , GET_USER_SUCCESS,
GET_USER_RECORDING_BEGIN , GET_USER_RECORDING_SUCCESS
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
      employeeOptionen:action.payload.users,
      projects:action.payload.projects
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
  if(action.type === ADD_RECORD_BEGIN) {
    return {
    ...state , 
    isLoading: true
    }
  }
  if(action.type === ADD_RECORD_SUCCESS) {
    return {
      ...state , 
      isLoading : false ,
      alertType : "success" ,
      alertText: "New Record Created!",
      showAlert:true
    }
  }
  if(action.type === ADD_RECORD_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if(action.type === GET_ALL_RECORDS_BEGIN){
    return {...state, isLoading:true }
  }
  if(action.type === GET_ALL_RECORDS_SUCCESS){
    return {
      ...state , 
      isLoading:false ,
      records:action.payload.record,
      totalRecords :action.payload.totalRecords ,
      employeeOptionen:action.payload.users
    }
  }
  if(action.type === DELETE_RECORD_BEGIN){
    return{
      ...state , 
      isLoading:true
    }
  }
  if(action.type === GET_ALL_CLIENTS_BEGIN){
    return {...state, isLoading:true}
  }
  if(action.type === GET_ALL_CLIENTS_SUCCESS){
    return {
      ...state , 
      isLoading:false ,
      clients : action.payload.clients ,
      totalClients : action.payload.totalClients, 
      employeeOptionen:action.payload.users

    }
  }
  if(action.type === ADD_CLIENT_BEGIN) {
    return  {
      ...state , 
      isLoading:true
    }
  }
  if(action.type === ADD_CLIENT_SUCCESS){
    return {
      ...state , 
      isLoading:false,
      alertType:"success", 
      alertText:"New Client Created!",
      showAlert:true
    }
  }
  if(action.type === ADD_CLIENT_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if(action.type === GET_ALL_EMPLOYE_BEGIN){
    return {...state, isLoading:true}
  }
  if(action.type === GET_ALL_EMPLOYE_SUCCESS){
    return {
      ...state , 
      isLoading:false ,
      employeeOptionen:action.payload.users
    }
  }
  if(action.type === ADD_PROJECT_BEGIN) {
    return  {
      ...state , 
      isLoading:true
    }
  }
  if(action.type === ADD_PROJECT_SUCCESS){
    return {
      ...state , 
      isLoading:false,
      alertType:"success", 
      alertText:"New Project Created!",
      showAlert:true
    }
  }
  if(action.type === ADD_PROJECT_ERROR) {
    return {
      ...state , 
      isLoading : false , 
      alertType : "danger", 
      alertText : action.payload.msg,
      showAlert : true
    }
  }
  if(action.type === GET_ALL_PROJECT_BEGIN){
    return {...state, isLoading:true}
  }
  if(action.type === GET_ALL_PROJECT_SUCCESS){
    return {
      ...state , 
      isLoading:false ,
      projects : action.payload.project ,
      totalProjects : action.payload.totalProject, 
      }
    }
    if(action.type === DELETE_CLIENT_BEGIN){
      return{
        ...state , 
        isLoading:true
      }
    }
    if(action.type === EDIT_CLIENT_BEGIN){
      return{
        ...state , 
        isLoading:true,

      }
    }
    if(action.type === EDIT_PROJECT_BEGIN){
      return{
        ...state , 
        isLoading:true
      }
    }
    if(action.type === GET_CLIENT_BEGIN){
      return{
        ...state , 
        isLoading:true
      }
    }
    if(action.type === GET_CLIENT_SUCCESS){
      return{
        ...state , 
        isLoading:false , 
        client : action.payload.client,
        totalProjects : action.payload.totalProjects
      }
    }
    if(action.type === DELETE_PROJECT_BEGIN){
      return{
        ...state , 
        isLoading:true
      }
    }
    if (action.type === SHOW_STATS_BEGIN) {
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      }
    }
    if (action.type === SHOW_STATS_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        totalProject: action.payload.totalProject,
        totalUsers: action.payload.totalUsers,
        totalClients: action.payload.totalClients,
        totalTasks: action.payload.totalTasks,
        tasksOverview:action.payload.tasksOverview,
        projectsOverview: action.payload.projectsOverview ,
        clientsOverview : action.payload.clientsOverview
      }
    }
    if(action.type === GET_USER_BEGIN){
      return{
        ...state , 
        isLoading:true
      }
    }
    if(action.type === GET_USER_SUCCESS){
      return{
        ...state , 
        isLoading:false , 
        employee: action.payload.user,
        userClient: action.payload.userClient , 
        userProject : action.payload.userProject , 
        userTask : action.payload.userTask , 
      }
    }
    if(action.type === GET_USER_RECORDING_BEGIN){
      return{
        ...state , 
        isLoading:true , 
      }
    }
    if(action.type === GET_USER_RECORDING_SUCCESS){
      return{
        ...state , 
        isLoading:false , 
        userRecord : action.payload.userRecord , 
      }
    }
}

export default AlertReducer