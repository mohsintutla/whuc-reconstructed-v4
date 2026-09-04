import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Venue() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="row m-0 p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="col-lg-8">
        <motion.section variants={fadeUp} className="hero-slider mb-4 border">
          <div className="slide position-relative">
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg" alt="London Skyline" className="img-fluid w-100" style={{minHeight: '200px', background: '#ccc'}} />
            <h1 className="position-absolute bottom-0 w-100 m-0 p-3 text-white purple-bg" style={{opacity: 0.9}}>VENUE & TRAVEL</h1>
          </div>
        </motion.section>

        {/* 50/40 Image Split */}
        <motion.section variants={fadeUp} className="mb-4 row bg-white border mx-0 shadow-sm">
          <div className="col-md-5 p-0">
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg" alt="Venue location" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <div className="col-md-7 p-4 d-flex flex-column justify-content-center">
            <h2 className="text-primary-purple mb-3 fs-3 fw-bold">Queen Elizabeth II Conference Centre</h2>
            <p className="text-muted">Located in the heart of London, the QEII Centre is a world-class facility offering an impressive setting for the World Hajj & Umrah Convention. With its prime location, delegates enjoy unmatched access to local transportation and historic landmarks.</p>
          </div>
        </motion.section>

        <motion.div variants={containerVariants} className="row g-4 mb-5">
          <motion.div variants={fadeUp} className="col-md-6">
            <div className="feature-card h-100 bg-white border">
              <img src="https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg" className="img-fluid border-bottom" alt="Travel" />
              <div className="p-3">
                <h3 className="fs-5 text-primary-purple fw-bold mb-2">Travel Options</h3>
                <p className="small text-muted mb-3">Discover the best ways to reach the venue, whether you are travelling by air, train, or local transit.</p>
                <Link to="#" className="btn btn-sm btn-outline-secondary">Learn More</Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-md-6">
            <div className="feature-card h-100 bg-white border">
              <img src="https://hajjpeople.com/assets/2021/04/The-British-Hajj-Delegation-Drs-560x420.jpg" className="img-fluid border-bottom" alt="Hotel" />
              <div className="p-3">
                <h3 className="fs-5 text-primary-purple fw-bold mb-2">Hotels & Accommodation</h3>
                <p className="small text-muted mb-3">Find recommended hotels near the venue with special rates for WHUC 2014 delegates.</p>
                <Link to="#" className="btn btn-sm btn-outline-secondary">Book a Room</Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="col-lg-4">
        <Sidebar />
      </motion.div>
    </motion.div>
  );
}

export default Venue;
