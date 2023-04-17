// import React from 'react'
import NavBar from './pages/NavBar';
import NonFiction from './pages/NonFiction';
import Edited from './pages/Edited';
import Fiction from './pages/Fiction';
import Reference from './pages/Reference';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <div className='Headerbar'>
                <NavBar>


                </NavBar>
                <div className='BookType'>
                    <Router className="Headingrouter">
                        <Link to="/NonFiction" className='HeadingLink'>NonFiction</Link>
                        <Link to="/Edited" className='HeadingLink'>Edited</Link>
                        <Link to="/Reference" className='HeadingLink'>Reference</Link>
                        <Link to="/Fiction" className='HeadingLink'>Fiction</Link>
                        <Routes>
                            <Route path='/NonFiction' Component={NonFiction}></Route>
                            <Route path='/Edited' Component={Edited}></Route>
                            <Route path='/Reference' Component={Reference}></Route>
                            <Route path='/Fiction' Component={Fiction}></Route>
                        </Routes>
                    </Router>

                </div>
            </div>
        </div>
    )
}

export default App
