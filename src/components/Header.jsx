import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='verticle-card '>
                <div className='margin-left-10'>

                    <div className='header-title'>
                        ReactJS & CSS
                    </div>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className='card-header-items'>Home</div>
                    </Link>

                    <Link to="/addtodo" style={{ textDecoration: 'none' }}>
                        <div className='card-header-items'>Add Todo</div>
                    </Link>

                    <Link to="/showtodo" style={{ textDecoration: 'none' }}>
                        <div className='card-header-items'>Show Todo</div>
                    </Link>
                    <hr />
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className='card-header-items bottom'>About</div>
                    </Link>

                </div>

            </div>
        </>
    )
}


