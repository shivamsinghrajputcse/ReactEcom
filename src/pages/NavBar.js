import React from 'react'
import NonFiction from './pages/NonFiction'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src='https://thumbs.dreamstime.com/b/stacked-closed-books-icon-cartoon-isolated-side-view-vector-illustration-graphic-design-149755178.jpg' className='Logoimg' alt="logo"></img>
            <h1 className='LogoName'>Kitabcopy</h1>
            <div className='BookType'>
            <Router>
                <Link to= "/path/NonFiction">NonFiction</Link>
                <Routes>
                    <Route path='/path/NonFiction' Component={NonFiction}></Route>
                </Routes>
            </Router>
            </div>
        </div>
    )
}

export default NavBar
