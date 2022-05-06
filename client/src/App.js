import React from "react";
import {Landing , Error , Login , ProtectedRoute } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddTask,
  AddUser,
  AllTasks,
  AllUsers,
  SharedLayout,
  Stats, 
  Attendance,
  Profile 
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
            <Route index  element={<Stats />} />
            <Route path="add-task" element={<AddTask />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="all-tasks" element={<AllTasks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-attendance" element={<Attendance />}/>
        </Route>
        <Route path ="landing" element={<Landing/>} />
        <Route path ="login" element={ <Login/>} />
        <Route path ="*" element={ <Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
