import Header from "./components/Header";
import { Outlet } from "react-router";
import './app.css'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App;