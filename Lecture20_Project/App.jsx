import Header from "./components/Header";
import { Outlet } from "react-router";
import './app.css'
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <>
      <Header theme={[isDark,setIsDark]}/>
      <Outlet context={[isDark,setIsDark]}/>
    </>
  )
}

export default App;