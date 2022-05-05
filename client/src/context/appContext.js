import React, { useReducer, useState } from "react";
import { LOGOUT_USER ,TOGGLE_SIDEBAR,DISPLAY_ALERT , CLEAR_ALERT ,  LOGIN_USER_BEGIN , LOGIN_USER_ERROR , LOGIN_USER_SUCCESS  } from "./action";
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
};

export const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(AlertReducer , initialState)
    
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
            console.log(error.response);
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
    // Sidebar Toggle
    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
      };
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
    return (
        <AppContext.Provider value={{...state ,
        displayAlert,
        clearAlert, 
        loginUser,
        toggleSidebar,
        logoutUser
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;