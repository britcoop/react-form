import React from 'react'

const SideNav = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span data-feather="file"></span>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span data-feather="shopping-cart"></span>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span data-feather="users"></span>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span data-feather="bar-chart-2"></span>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span data-feather="layers"></span>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <span data-feather="home"></span>
                  Contact <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

    )
}

export default SideNav

