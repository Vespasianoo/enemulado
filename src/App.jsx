import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { AppRouter } from "./Routes"
// import Nav from "./components/Nav"
function App() {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  )
}

export default App
