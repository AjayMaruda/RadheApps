import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
    <div>
        <div>{err}</div>
    </div>
  )
}

export default Error
