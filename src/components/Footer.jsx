import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light border-top p-4 mt-auto">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="footer-nav mb-2" style={{fontSize: '12px'}}>
            <Link to="/" className="text-decoration-none text-muted fw-bold">Home</Link> <span className="mx-1 text-muted">|</span> 
            <Link to="#" className="text-decoration-none text-muted fw-bold">Privacy policy</Link> <span className="mx-1 text-muted">|</span> 
            <Link to="/about" className="text-decoration-none text-muted fw-bold">About Us</Link> <span className="mx-1 text-muted">|</span> 
            <Link to="#" className="text-decoration-none text-muted fw-bold">Contact Us</Link> <span className="mx-1 text-muted">|</span> 
            <Link to="#" className="text-decoration-none text-muted fw-bold">Admissions policy</Link>
          </div>
          <p className="text-muted mb-0" style={{fontSize: '11px'}}>World Hajj & Umrah Convention and WHUC trademarks are owned and protected by Hajj People Limited. © 2016</p>
        </div>
        <div className="col-md-4 text-end">
          <div className="d-inline-flex gap-3">
            <div className="text-center">
              <span className="d-block text-muted" style={{fontSize: '9px', marginBottom: '2px'}}>SUPPORTED BY</span>
              <img src="/images/alia-guyex-logo.png" alt="Alia Guyex" style={{height: '35px', background: '#ddd'}} />
            </div>
            <div className="text-center">
              <span className="d-block text-muted" style={{fontSize: '9px', marginBottom: '2px'}}>ORGANISED BY</span>
              <img src="https://hajjpeople.com/assets/hajj-logo.png" alt="Hajj People" style={{height: '35px', background: '#ddd'}} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
