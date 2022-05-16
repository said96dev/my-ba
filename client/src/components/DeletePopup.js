import React from 'react'

function DeletePopup({taskId , deleteHandle , setOpenDeletePopup}) {
  return (
    <div>
          <h3>
            Are you sure want to delete?
          </h3>
          <div className="popup-btn-container">
            <button className="btn" onClick={() => 
            deleteHandle(taskId)
            } >Delete
            </button>
            <button className="btn" onClick={() => setOpenDeletePopup(false)}>
              Cancel
            </button>
          </div>
    </div>
  )
}

export default DeletePopup