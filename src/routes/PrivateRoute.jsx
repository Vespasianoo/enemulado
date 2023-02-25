import React from "react"

import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const user = false
  return user ? children : <Navigate to="/login" />
}

export default PrivateRoute
