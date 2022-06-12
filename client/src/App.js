import React ,{useContext} from "react";
import {Landing , Error , Login , ProtectedRoute } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {

  AddUser,
  AllTasks,
  AllUsers,
  SharedLayout,
  Stats, 
  Attendance,
  Profile ,
  Client , 
  Project ,
  AddClient
} from "./pages/dashboard"
import { AppContext } from "./context/appContext";

function App() {
  const {user} = useContext(AppContext)
  return (
    <BrowserRouter>
      <Routes>
          <Route path ="/" element = {
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
          }>
            <Route index  element={<Stats />} />
            <Route path="all-users" element={<AllUsers />} />
            {
             user  && user.role === "admin" ? 
            <>
              <Route path="add-user" element={<AddUser />} /> 
              <Route path="add-client" element={<AddClient />} />
            </>
              : <></>
            }
            <Route path="all-tasks" element={<AllTasks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-attendance" element={<Attendance />}/>
            <Route path="client" element={<Client />} />
            <Route path="project" element={<Project />}/>
        </Route>
        <Route path ="landing" element={<Landing/>} />
        <Route path ="login" element={ <Login/>} />
        <Route path ="*" element={ <Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
