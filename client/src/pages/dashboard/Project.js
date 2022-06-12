import React from 'react'
import {PageHeader ,AddProject , EditProject , ProjectContainer } from "../../components"

function Project() {
  return (
    <>
        <PageHeader name={"Project"}/>
        <div className='project-page'>
          <AddProject />
          <EditProject/>
        </div>
        <ProjectContainer/>
    </>

  )
}

export default Project