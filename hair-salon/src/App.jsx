import { useState } from 'react'
import './App.css'
import logo from '/logo.svg'
import { Navigation } from './components/Navigation'
function App() {
  // const reFresh = () => window.location.reload(true);

  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='logo'>
              <a href='#' target='_self'>
                <img src={logo} alt='logo'/>
              </a>
            </div>
            <div className='navigation'>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
