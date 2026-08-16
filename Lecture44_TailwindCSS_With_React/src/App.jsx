import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='px-4 py-4 md:px-8'>
        <Suspense fallback={<h1 className='text-xl'>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default App
