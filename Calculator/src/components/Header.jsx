import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary" style={{height: "100vh", backgroundImage: `url("https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundPosition: "center",
        backgroundSize: "cover"}}>
                <div className="card bg-black" style={{width: "17rem"}} >
                    <div className="card-body d-flex justify-content-between">
                                    <NavLink to='/' className={({isActive}) => 
                                    `
                                    ${isActive ? "link-info" : "link-light"}
                                    nav-link
                                    `
                                }>
                                    Calculator
                                    </NavLink>

                                    <NavLink to='/exchange' className={({isActive}) => 
                                    `
                                    ${isActive ? "link-info" : "link-light"}
                                    nav-link
                                    `
                                }>
                                    Exchange Rate
                                    </NavLink>
                        </div>
                        <Outlet/>
                    </div>
                </div>
        </>
    )
}

export default Header
