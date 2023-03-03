import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { AppRouter } from "./Routes"
import { AuthProvider } from "./context/AuthContext"
// import Nav from "./components/Nav"
function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <GlobalStyles />
    </>
  )
}

export default App
