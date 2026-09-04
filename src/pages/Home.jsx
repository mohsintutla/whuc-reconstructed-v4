import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="row m-0 p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* LEFT CONTENT */}
      <div className="col-lg-8">
        {/* HERO BANNER (50/40% image presence concept applied contextually) */}
        <motion.section variants={itemVariants} className="hero-slider mb-4 border">
          <div className="slide">
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg" alt="Wessam Hassanin's London Exhibition" className="img-fluid w-100" />
          </div>
        </motion.section>

        <motion.div variants={containerVariants} className="row">
          {/* FEATURES GRID */}
          <div className="col-md-6 mb-4">
            <motion.div variants={itemVariants} className="feature-card h-100">
              <h3 className="card-header-title">Conference</h3>
              <img src="https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg" alt="Conference" className="img-fluid mb-2" />
              <p>The design of the conference covers a series of relevant industry related topics...</p>
              <Link to="/events" className="read-more">read more →</Link>
            </motion.div>
          </div>
          
          <div className="col-md-6 mb-4">
            <motion.div variants={itemVariants} className="feature-card h-100">
              <h3 className="card-header-title">Exhibition</h3>
              <img src="https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg" alt="Exhibition" className="img-fluid mb-2" />
              <p>The WHUC Exhibition is a unique opportunity for businesses to showcase their services...</p>
              <Link to="/events" className="read-more">read more →</Link>
            </motion.div>
          </div>
          
          <div className="col-md-6 mb-4">
            <motion.div variants={itemVariants} className="feature-card h-100">
              <h3 className="card-header-title">Live Voting</h3>
              <img src="https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg" alt="Live Voting" className="img-fluid mb-2" />
              <p>Vote live for matters that are important to you</p>
              <Link to="#" className="read-more">read more →</Link>
            </motion.div>
          </div>
          
          <div className="col-md-6 mb-4">
            <motion.div variants={itemVariants} className="feature-card h-100">
              <h3 className="card-header-title">Workshops</h3>
              <img src="https://hajjpeople.com/assets/2021/04/Presenting-House-of-Lords-Baroness-Uddin-Seif-Usher-560x420.jpg" alt="Workshops" className="img-fluid mb-2" />
              <p>Share your initiatives at our workshops and round table meetings</p>
              <Link to="/events" className="read-more">read more →</Link>
            </motion.div>
          </div>
          
          <div className="col-12 mb-4">
            <motion.div variants={itemVariants} className="feature-card">
              <h3 className="card-header-title">River Cruise</h3>
              <img src="https://hajjpeople.com/assets/2021/04/img001-456x600.jpg" alt="River Cruise" className="img-fluid mb-2" style={{height: '120px', objectFit: 'cover', width: '100%'}} />
              <p>Meet, Greet and Eat on a fabulous Thames River Cruise</p>
              <Link to="/events" className="read-more">read more →</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="col-lg-4">
        {/* EVENT DETAILS */}
        <motion.aside variants={itemVariants} className="event-details mb-4">
          <h2 className="text-primary-purple fw-bold fs-4">The World Hajj & Umrah Convention<br/>29th – 30th December 2014, London</h2>
          
          <div className="venue-info gray-bg p-3 mb-3 border">
            <h3 className="fs-6 text-primary-purple mb-0">Queen Elizabeth II Conference Centre,<br/>Parliament Square, London, United Kingdom</h3>
          </div>
          
          <div className="welcome-text mb-3">
            <p className="arabic-greeting">Ahlan Wa Sahalan Marhaban Bikum</p>
            <p className="text-muted">Welcome to the 3rd annual World Hajj & Umrah Convention, a 3 day exposition bringing together social, commercial and educational decision makers onto one platform.</p>
          </div>
          
          <div className="event-stats mb-4">
            <p className="text-muted" style={{fontSize: '13px'}}>With managers responsible for more than 1,000,000 pilgrims in attendance, this event aims to further provide delegates, exhibitors, sponsors, stakeholders and executives significant opportunities to forge lasting relationships that is guaranteed to fulfil both personal and professional objectives.</p>
          </div>
          
          <div className="experience-london position-relative text-center">
            <img src="https://hajjpeople.com/assets/2021/04/Presenting-House-of-Lords-Baroness-Uddin-Seif-Usher-560x420.jpg" alt="Experience London" className="img-fluid border" style={{minHeight: '150px', background: '#ddd'}} />
            <h3 className="position-absolute bottom-0 w-100 text-white p-2 mb-0" style={{background: 'rgba(90, 45, 130, 0.8)', fontSize: '16px'}}>Experience London...<br/>...with friends this December</h3>
          </div>
        </motion.aside>

        {/* SIDEBAR WIDGETS */}
        <motion.div variants={itemVariants}>
          <Sidebar />
        </motion.div>
      </div>
      
      {/* FULL WIDTH MIDDLE SECTION */}
      <motion.div variants={itemVariants} className="col-12 px-0 pt-4">
        {/* TURKISH AIRLINES PARTNER */}
        <section className="turkish-airlines-partner border p-4 mb-4 text-center bg-white shadow-sm">
          <img src="/images/turkish-airlines-logo.png" alt="Turkish Airlines" className="mb-3" style={{maxHeight: '80px'}} />
          
          <div className="partnership-details">
            <h2 className="fs-5 text-primary-purple fw-bold mb-3">WELCOME TO TURKISH AIRLINE – OFFICIAL AIRLINE PARTNER OF THE WHUC</h2>
            <p className="text-muted mb-2">Special discounts up to 20% are offered on certain booking classes and Exclusive for WHUC Participants.</p>
            
            <div className="booking-info purple-bg text-white p-3 mx-auto mb-3" style={{maxWidth: '600px', borderRadius: '4px'}}>
              <p className="mb-1"><strong>website:</strong> <a href="https://www4.thy.com/TKC/app/main?language=en" className="text-white text-decoration-underline" target="_blank" rel="noreferrer">https://www4.thy.com/TKC/app/main?language=en</a></p>
              <p className="mb-0">and use the event code <strong>"088TKM14"</strong> under delegate section.</p>
            </div>
            
            <p className="text-muted" style={{fontSize: '11px'}}>*Discount Code is valid for travel to the convention between 21.12.14 and 06.01.2015 arriving at London Heathrow or London Gatwick Airports Only</p>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="news-section row mb-4">
          <div className="col-md-4 mb-3">
            <div className="border h-100 bg-white">
              <h3 className="fs-6 p-2 m-0 bg-light border-bottom text-uppercase fw-bold text-muted d-flex justify-content-between align-items-center">
                Latest News <Link to="/news" className="read-more m-0" style={{fontSize: '10px'}}>read more →</Link>
              </h3>
              <ul className="list-unstyled p-3 mb-0" style={{fontSize: '12px'}}>
                <li className="mb-3 border-bottom pb-2">
                  <span className="fw-bold text-primary-purple d-block mb-1">05/9/2014</span>
                  <Link to="/news" className="text-muted text-decoration-none">Invest with WHUC Presentation at Makkah Chamber of Commerce</Link>
                </li>
                <li className="mb-3 border-bottom pb-2">
                  <span className="fw-bold text-primary-purple d-block mb-1">29/4/2013</span>
                  <Link to="/news" className="text-muted text-decoration-none">FRHI benefits from US$16bn Hajj & Umrah pilgrimage</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="border h-100 bg-white">
              <h3 className="fs-6 p-2 m-0 bg-light border-bottom text-uppercase fw-bold text-muted d-flex justify-content-between align-items-center">
                Press Releases <Link to="/news" className="read-more m-0" style={{fontSize: '10px'}}>read more →</Link>
              </h3>
              <ul className="list-unstyled p-3 mb-0" style={{fontSize: '12px'}}>
                <li className="mb-3 border-bottom pb-2">
                  <span className="fw-bold text-primary-purple d-block mb-1">20/11/2014</span>
                  <Link to="/news" className="text-muted text-decoration-none">WHUC Presents Kiswah Al Kaabah In Indonesia</Link>
                </li>
                <li className="mb-3 border-bottom pb-2">
                  <span className="fw-bold text-primary-purple d-block mb-1">14/10/2014</span>
                  <Link to="/news" className="text-muted text-decoration-none">The Madinah Experience in Makkah event at Al Shohada</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="border h-100 bg-white">
              <h3 className="fs-6 p-2 m-0 bg-light border-bottom text-uppercase fw-bold text-muted">Registered Companies</h3>
              <ul className="list-unstyled p-3 mb-0 text-muted text-uppercase" style={{fontSize: '11px'}}>
                <li className="mb-2 pb-2 border-bottom border-light">Jigawa State Pilgrims Welfare Board</li>
                <li className="mb-2 pb-2 border-bottom border-light">Kabo Air Limited</li>
                <li className="mb-2 pb-2 border-bottom border-light">Meridian Airlines Limited</li>
                <li className="mb-2 pb-2">Noor International Travels and Tours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PARTNERS AND SUPPORTERS */}
        <section className="partners-supporters border mb-4 text-center">
          <h3 className="fs-6 p-2 m-0 border-bottom text-uppercase fw-bold text-muted bg-light text-start">Our Partners & Supporters</h3>
          <div className="p-4 d-flex flex-wrap justify-content-center align-items-center gap-4">
            <img src="https://hajjpeople.com/assets/2021/04/The-British-Hajj-Delegation-Drs-560x420.jpg" alt="Partner" style={{height:'40px', background:'#ddd', padding:'5px', borderRadius:'3px'}} />
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg" alt="Partner" style={{height:'40px', background:'#ddd', padding:'5px', borderRadius:'3px'}} />
            <img src="/images/bhuc-logo.png" alt="Partner" style={{height:'40px', background:'#ddd', padding:'5px', borderRadius:'3px'}} />
            <img src="https://hajjpeople.com/assets/2021/04/British-Hajj-Delegation-2019-A-560x369.jpg" alt="Partner" style={{height:'40px', background:'#ddd', padding:'5px', borderRadius:'3px'}} />
            <span className="text-muted" style={{fontSize:'12px'}}>+ Global Emblems</span>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Home;
