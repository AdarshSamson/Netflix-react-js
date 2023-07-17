import React from 'react'
import NavBar from './components/navBar/NavBar'
import './App.css'
import Banner from './components/banner/Banner'
import RowPost from './components/rowpost/RowPost'
import { Originals,Action } from './Urls'


function App() {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title="Netflix Originals"/>
     <RowPost url={Action} title="Action " isSmall/>
    </div>
  )
}

export default App
