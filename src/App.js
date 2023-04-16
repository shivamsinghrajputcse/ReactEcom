import React from 'react'
import NavBar from './pages/NavBar'
import NonFiction from './pages/NonFiction'
import Edited from './pages/Edited'
import Reference from  './pages/Reference'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
const App = () => {
    return (
        <div>
            <NavBar>
            <div className='BookType'>
                <Router> <Link to= "./NonFiction">NonFiction</Link>
                <Link to= "./Edited">Edited</Link>
                <Link to= "./Reference">Reference</Link>
                <Routes>
                    <Route path='./NonFiction' Component={NonFiction}></Route>
                    <Route path='./Edited' Component={Edited}></Route>
                    <Route path='./Reference' Component={Reference}></Route>
                </Routes></Router>
                </div>
            </NavBar>
        </div>
    )
}

export default App
