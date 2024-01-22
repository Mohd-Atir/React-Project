import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <div className="d-flex align-items-center gap-5">
      <Link class="navbar-brand fs-3 fw-semibold link-light" to="/">Logo</Link>
        <ul class="navbar-nav">
          <li class="nav-item d-flex gap-3">
            <NavLink
             to="/"
             className={({isActive}) => 
            `
            nav-link
              ${isActive ? "text-info" : "text-light"}
            `
            }
             >
              Home
            </NavLink>
            <NavLink
             to="/about"
             className={({isActive}) => 
            `
            nav-link
              ${isActive ? "text-info" : "text-light"}
            `
            }
             >
              About
            </NavLink>
            <NavLink
             to="/github"
             className={({isActive}) => 
            `
            nav-link
              ${isActive ? "text-info" : "text-light"}
            `
            }
             >
              Github
            </NavLink>
          </li>
        </ul>
    </div>
    <div>
        <button class="btn btn-outline-info" type="submit">Login</button>
    </div>
    </div>
</nav>
    </>
  );
}

export default Header;
