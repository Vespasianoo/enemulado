import React from "react"

import { Navigate } from "react-router-dom"
import userLogin from "../services/userLogin"

function PrivateRoute({ children }) {
  const user = userLogin()
  return user ? children : <Navigate to="/login" />
}

export default PrivateRoute
