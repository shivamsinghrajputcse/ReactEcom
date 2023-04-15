import React from 'react'
import NonFiction from './NonFiction'
import Edited from './Edited'
import Reference from  './Reference'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src='https://thumbs.dreamstime.com/b/stacked-closed-books-icon-cartoon-isolated-side-view-vector-illustration-graphic-design-149755178.jpg' className='Logoimg' alt="logo"></img>
            <h1 className='LogoName'>Kitabcopy</h1>
            <div className='BookType'>
            <Router>
                <Link to= "./NonFiction">NonFiction</Link>
                <Link to= "./Edited">Edited</Link>
                <Link to= "./Reference">Reference</Link>
                <Routes>
                    <Route path='./NonFiction' Component={NonFiction}></Route>
                    <Route path='./Edited' Component={Edited}></Route>
                    <Route path='./Reference' Component={Reference}></Route>
                </Routes>
            </Router>
            </div>
        </div>
    )
}

export default NavBar
