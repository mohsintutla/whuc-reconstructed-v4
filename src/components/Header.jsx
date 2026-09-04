import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="px-0">
      {/* TOP BAR */}
      <div className="top-bar px-4 py-3 border-bottom">
        <div className="row align-items-center">
          <div className="col-md-5 logo-section">
            <Link to="/">
              <img src="/images/main-whuc-logo.png" alt="WHUC World Hajj & Umrah Convention" className="img-fluid" style={{maxHeight: '80px'}} />
            </Link>
            <img src="/images/london-logo.png" alt="London" className="img-fluid ms-3" style={{maxHeight: '50px'}} />
          </div>
          <div className="col-md-3 text-center sponsor-logo">
            <img src="/images/saudisim-logo.png" alt="SaudiSim International Distribution" className="img-fluid" style={{maxHeight: '50px'}} />
          </div>
          <div className="col-md-4 text-end register-section">
            <h6 className="mb-1 text-uppercase register-title text-secondary">Register Online</h6>
            <div className="register-buttons mb-1">
              <Link to="/register"><button className="btn btn-sm btn-delegate text-white fw-bold">Delegate</button></Link>
              <Link to="/register"><button className="btn btn-sm btn-exhibitor text-white fw-bold">Exhibitor</button></Link>
            </div>
            <p className="phone mb-0 text-muted" style={{fontSize: '14px'}}>call <span className="text-primary-purple">+44 208 252 4363</span></p>
          </div>
        </div>
      </div>
      
      {/* MAIN NAVIGATION */}
      <nav className="navbar navbar-expand-lg main-nav purple-bg p-0">
        <div className="container-fluid px-0">
          <button className="navbar-toggler mx-3 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">Hajj People</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/events">Exhibit / Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/sponsor">Sponsor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/venue">Venue & Travel</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/news">Media & PR</NavLink>
              </li>
              <li className="nav-item border-end-0">
                <NavLink className="nav-link text-white" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="d-flex search-box pe-3 py-1">
              <input className="form-control form-control-sm rounded-0" type="search" placeholder="Search whuc.org" aria-label="Search" />
              <button className="btn btn-sm btn-light rounded-0 border-start-0" type="submit">🔍</button>
            </form>
          </div>
        </div>
      </nav>
      
      {/* SECONDARY NAVIGATION */}
      <div className="secondary-nav gray-bg border-bottom">
        <ul className="nav px-3 py-1" style={{fontSize: '12px'}}>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">2012 Sponsors</Link></li>
          <li className="nav-item text-secondary p-1">|</li>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">Partners</Link></li>
          <li className="nav-item text-secondary p-1">|</li>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">Exhibitors</Link></li>
          <li className="nav-item text-secondary p-1">|</li>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">Delegates</Link></li>
          <li className="nav-item text-secondary p-1">|</li>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">Alliances</Link></li>
          <li className="nav-item text-secondary p-1">|</li>
          <li className="nav-item"><Link className="nav-link text-secondary p-1 px-2" to="#">Advisory Council</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
