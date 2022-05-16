import moment from "moment"
import React from 'react'

function Date({createdAt}) {
    let date = moment(createdAt)
    date = date.format("MMM Do, YYYY")
  return (
    <div>{date}</div>
  )
}

export default Date