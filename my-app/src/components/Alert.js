import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
export default function Alert(props) {
  return (
      <div className='alert alert-warning alert-dismissible fade show ' role={alert}>
          <strong>{props.alert.type}</strong>:{props.alert.msg}
          <button type='button'className='btn-close 'data-bs-dismiss="alert" aria-label='Close'></button>
      
      </div>
  )
}

