import React  from "react";
import {Landing , Error , Login , ProtectedRoute , AccessError ,AdminRoute} from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  EmployeeProfile,
  AddUser,
  AllTasks,
  AllUsers,
  SharedLayout,
  Stats, 
  Attendance,
  Profile ,
  Client , 
  Project ,
  SingleClientPage,
  Requests
} from "./pages/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ="/" element = {
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
          }>
            
            <Route path="add-user" element={
            <AdminRoute>
              <AddUser />
            </AdminRoute>
            } /> 
            <Route index  element={<Stats />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="client-profile" element={<SingleClientPage />} />
            <Route path="employee-profile" element={
            <AdminRoute> <EmployeeProfile/> </AdminRoute>} />
            <Route path="all-tasks" element={<AllTasks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-attendance" element={<Attendance />}/>
            <Route path="client" element={<Client />} />
            <Route path="project" element={<Project />}/>
            <Route path="requests" element={<AdminRoute> <Requests /> </AdminRoute>}/>
        </Route>
        <Route path ="landing" element={<Landing/>} />
        <Route path ="login" element={ <Login/>} />
        <Route path ="access-error" element={ <AccessError/>} />
        <Route path ="*" element={ <Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
