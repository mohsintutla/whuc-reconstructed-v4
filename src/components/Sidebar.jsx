import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar-widgets">
      <div className="mb-2">
        <Link to="/register">
          <img src="https://hajjpeople.com/assets/2021/04/img001-456x600.jpg" alt="Register as Delegate" className="img-fluid w-100 border" style={{minHeight: '60px', background: '#ddd'}} />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/register">
          <img src="https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg" alt="Enquiring about Sponsorship" className="img-fluid w-100 border" style={{minHeight: '60px', background: '#ddd'}} />
        </Link>
      </div>
      <div className="mb-2">
        <Link to="/register">
          <img src="https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg" alt="Register as Exhibitor" className="img-fluid w-100 border" style={{minHeight: '60px', background: '#ddd'}} />
        </Link>
      </div>
      <div className="mb-3">
        <Link to="/register">
          <img src="https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg" alt="Register as Visitor" className="img-fluid w-100 border" style={{minHeight: '60px', background: '#ddd'}} />
        </Link>
      </div>
      
      <div className="social-follow purple-bg text-white text-center p-3 border">
        <h6 className="mb-2">FOLLOW US ON:</h6>
        <div className="d-flex justify-content-center gap-2">
          <Link to="/register"><img src="/images/facebook-icon.png" alt="Facebook" width="30" /></Link>
          <Link to="/register"><img src="/images/twitter-icon.png" alt="Twitter" width="30" /></Link>
          <Link to="/register"><img src="/images/youtube-icon.png" alt="YouTube" width="30" /></Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
