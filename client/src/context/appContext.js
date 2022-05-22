import React, { useReducer } from "react";
import { LOGOUT_USER ,TOGGLE_SIDEBAR,DISPLAY_ALERT , CLEAR_ALERT ,  LOGIN_USER_BEGIN , LOGIN_USER_ERROR , LOGIN_USER_SUCCESS, UPDATE_USER_BEGIN , UPDATE_USER_SUCCESS , UPDATE_USER_ERROR, HANDLE_CHANGE, CLEAR_FILTERS,
  ADD_USER_BEGIN , ADD_USER_SUCCESS , ADD_USER_ERROR, CLEAR_VALUES, GET_ALL_USERS_BEGIN,GET_ALL_USERS_SUCCESS , CHANGE_PAGE,GET_ALL_TASKS_SUCCESS, GET_ALL_TASKS_BEGIN,
  ADD_TASK_BEGIN , ADD_TASK_ERROR , ADD_TASK_SUCCESS ,EDIT_TASK_BEGIN
  ,DELETE_TASK_BEGIN, ADD_COMMENT_BEGIN, DELETE_COMMENT_BEGIN , UPDATE_COMMENT_BEGIN ,
  GET_TASK_BEGIN ,GET_TASK_ERROR , GET_TASK_SUCCESS } from "./action";
import AlertReducer from "./reducer";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState = {
    isLoading : false , 
    showAlert : false , 
    alertType : "" , 
    alertText: "" , 
    user: user ? JSON.parse(user) : null,
    token: token,
    showSidebar: false,
    name : "" , 
    email:  "",
    lastName:  "",
    positionOptions: ["Security Engineer" , "Product Owner","Backend Developer","Full Stack Developer", "Frontend Developer"],
    roleOptions: ["user" , "admin"],
    password: "" , 
    search : "",
    sort: "oldest",
    position:"",
    role:"",
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
    page : 1,
    totalUsers :0 , 
    numOfPages: 1,
    gender: "",
    users: [],
    type:"",
    typeOptions: ["Internship" , "full-time" , "part-time" , "remote"],
    department: "",
    departmentOptions: ["development" , "design" , "accounting", "secretariat" , "administration"],
    tasks:[],
    taskStatusOptionen:['in process ', 'paused' ,"closed" , "fresh" , "cancelled" ],
    taskTypeOptionen:['internal ', 'external' ,"other"],
    taskPriorityOptionen:['low', 'medium' ,"high"],
    taskType: "external" , 
    title: "" , 
    taskPriority : "high" , 
    description: "", 
    taskStatus:"fresh",
    deadline: Date.now(),
    assignedTo: "" ,
    assignedToOptionen:[] , 
    oneTask : {} , 
    totalComments : 0 ,

};

export const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(AlertReducer , initialState)
    
    
    // axios
    const authFetch = axios.create({
        baseURL: '/api/v1',
      })
    
    // request
    authFetch.interceptors.request.use(
      (config) => {
        config.headers.common['Authorization'] = `Bearer ${state.token}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // response
    authFetch.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        // console.log(error.response)
        if (error.response.status === 401) {
          //logoutUser()
          console.log("error")
        }
        return Promise.reject(error)
      }
    )
    
    // Add User Login Info to Local Storage
    const addUserToLocalStorage = ({user , token }) => {
      localStorage.setItem("user" , JSON.stringify(user))
      localStorage.setItem("token" , token);
    } 

     //Remove User From Local Storage 
     const removeUserFromLocalStorage = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
    const changePage = (page) => {
      dispatch({ type: CHANGE_PAGE, payload: { page } })
    }
    //Dispaly Alert
    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }
    
    //Clear Alert 
    const clearAlert = () => {
      setTimeout(() => {
          dispatch({type : CLEAR_ALERT})
      } , 3000)
    }

    // Sidebar Toggle
    const toggleSidebar = () => {
      dispatch({ type: TOGGLE_SIDEBAR });
      };

    //Handle Chagne to Change the vlaues in State
    //used in addUser.js && SearchContainer  
    const handleChange = ({ name, value }) => {
      dispatch({
        type: HANDLE_CHANGE,
        payload: { name, value },
      })
    }

    // clear Vlaues
    const clearValues =  () => {
      dispatch({ type: CLEAR_VALUES })
    }

    // clear filters
    const clearFilters = () =>{
      dispatch({ type: CLEAR_FILTERS });
      }

    //Login User
    const loginUser = async (currentUser) => {
      dispatch ({type : LOGIN_USER_BEGIN});
      try {
          const response = await axios.post("/api/v1/auth/login" , currentUser)
          const {user , token } = response.data
          dispatch ({
              type : LOGIN_USER_SUCCESS,
              payload:{
                  user , 
                  token 
              }
          })
          addUserToLocalStorage({
              user , token
          })
      } catch (error) {
          dispatch({
              type:LOGIN_USER_ERROR,
              payload:{msg : error.response.data.msg}
          })
      }
      clearAlert();
    };
    
    //Logout user 
    const logoutUser = () => {
      dispatch({type:LOGOUT_USER})
      removeUserFromLocalStorage()
    } 

    //Update User 
    const updateUser = async (currentUser) => {
      dispatch({type:UPDATE_USER_BEGIN})
      try {
        const { data } = await authFetch.patch("/users/updateUser", currentUser);
        const {user ,token } = data
        dispatch({
          type : UPDATE_USER_SUCCESS , 
          payload: {
            token , user
          }
        })
        addUserToLocalStorage({ user, token });
      } catch (error) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
      clearAlert();
      };

    // Add New User 
    const addUser = async () => {
      dispatch({type : ADD_USER_BEGIN })
      try {
        const { position , name , email , lastName , role , password , type , department} = state
        const newUser = { position , name , email , lastName , role , password, type , department}
        await authFetch.post("users/adduser" , newUser)
        dispatch ({
          type : ADD_USER_SUCCESS
        })
        dispatch({ type: CLEAR_VALUES })
      } catch (error) {
        dispatch({
          type: ADD_USER_ERROR , 
          payload: {msg:error.response.data.msg}
        })
      }
      clearAlert()
    }

    //get all users
    const getUsers = async () => {
      const {page, search , role , position , sort} = state
      let url = `/users?page=${page}&role=${role ? role : "all"}&position=${position ? position : "all"}&sort=${sort}`
      if (search) {
        url = url + `&search=${search}`;
      }
      dispatch({type : GET_ALL_USERS_BEGIN})
      try {
        const {data} = await authFetch(url)
        const {users , numOfPages , totalUsers} = data 
        dispatch({
          type:GET_ALL_USERS_SUCCESS,
          payload:{
            users , 
            totalUsers , 
            numOfPages,
          }
        })
      } catch (error) {
        // logoutUser() 
        // comment during the developing. this logoutUser if we got 401 or server down 
      }
      clearAlert()
      // when I add a new User and if i am going quiclkly to get all user ther that alert still displayes... 
    };
    
    //get all Tasks 
    const getTasks = async () => {
      dispatch({type: GET_ALL_TASKS_BEGIN})
      try {
        const {data} = await authFetch("tasks")
        const {totalTasks , task , users} = data
        dispatch({ type:GET_ALL_TASKS_SUCCESS,
          payload:{ 
            task , 
            totalTasks,
            users
          }
        })
      } catch (error) {
        //logoutUser()
      }
      clearAlert()
    }
    // Add New Task
    const addTask = async () => {
      dispatch({type: ADD_TASK_BEGIN})
      try {
        const {assignedTo , description , taskPriority , taskStatus , taskType , remark , title , deadline } = state
        const newTask = {assignedTo , description , taskPriority , taskStatus , taskType , remark , title , deadline }
        
        await authFetch.post("tasks/addtask" , newTask)
        dispatch({
          type:ADD_TASK_SUCCESS
        })
        getTasks()
        dispatch({type: CLEAR_VALUES})
      } catch (error) {
        dispatch({
          type : ADD_TASK_ERROR,
          payload: {msg:error.response.data.msg}
        })
      }
      clearAlert()
    }
    //Single Task 
    const singleTask = async (taskId) => {
      dispatch({type: GET_TASK_BEGIN})
      try {
        const {data}  =  await authFetch(`tasks/${taskId}`)
        const {task , totalComments} = data
      dispatch({type: GET_TASK_SUCCESS , 
      payload:{
        task , 
        totalComments
      }
      })

      } catch (error) {
        dispatch({
          type : GET_TASK_ERROR,
          payload: {msg:error.response.data.msg}
        })
      } 
    }

    //delete Task 
    const deleteTask = async (taskId) => {
      dispatch({type: DELETE_TASK_BEGIN})
      try {
        await authFetch.delete(`tasks/${taskId}`)
        getTasks()
      } catch (error) {
        //logoutUser();
      }
    }

    //edit Task 
    const editTask = async (taskId , currentTask ) => {
      dispatch({type: EDIT_TASK_BEGIN})
      try{
        await authFetch.patch(`tasks/${taskId}` , currentTask)
        getTasks()
      }
      catch (error){
        //logoutUser()
      }
    }

    //add Commnet
    const createComment = async (newComment) => {
      dispatch({type: ADD_COMMENT_BEGIN})
      try {
        await authFetch.post("comments" , newComment)
        singleTask(newComment.taskId)
      } catch (error) {
        //logoutUser()
      }
    }

    //Delete Commnet
    const deleteComment = async (commentId , taskId) => {
      dispatch({type: DELETE_COMMENT_BEGIN})
      try {
        await authFetch.delete(`comments/${commentId}`)
        singleTask(taskId)
      } catch (error) {
        //logoutUser()
      }
    }



    return (
        <AppContext.Provider value={{...state ,
        displayAlert,
        clearAlert, 
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        addUser,
        getUsers,
        clearFilters,
        clearValues,
        changePage,
        getTasks,
        addTask , 
        deleteTask ,
        editTask ,
        singleTask,
        createComment,
        deleteComment
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;