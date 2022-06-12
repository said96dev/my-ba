import React from 'react'
import {PageHeader  , ClientContainer } from "../../components"
import AddClient from "../../components/AddClient"
function Client() {
  return (
    <>
    <PageHeader name={"Client"}/>
    <AddClient/>
    <ClientContainer/>
    </>
    
  )
}

export default Client