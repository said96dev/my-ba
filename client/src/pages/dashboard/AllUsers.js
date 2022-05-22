import React from 'react'
import {SearchContainer , UsersContainer , PageHeader} from "../../components"

function AllUsers() {
  return (
    <div>
      <PageHeader name={"Employee"}/>
      <SearchContainer/>
      <UsersContainer/>
    </div>
  )
}

export default AllUsers