import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

function Sponsor() {
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
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg" alt="Sponsor Banner" className="img-fluid w-100" style={{minHeight: '200px', background: '#ccc'}} />
            <h1 className="position-absolute bottom-0 w-100 m-0 p-3 text-white purple-bg" style={{opacity: 0.9}}>SPONSORSHIP OPPORTUNITIES</h1>
          </div>
        </motion.section>

        {/* 50/40 Split layout */}
        <motion.section variants={fadeUp} className="mb-5 row bg-white border mx-0 shadow-sm align-items-stretch">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h2 className="text-primary-purple mb-3 fs-3 fw-bold">Become a Sponsor</h2>
            <p className="text-muted">Enhance your brand visibility and connect directly with key decision-makers across the Hajj and Umrah ecosystem. Our tailored sponsorship packages offer unparalleled opportunities to position your organization as a thought leader and key player within this globally significant industry.</p>
          </div>
          <div className="col-md-6 p-0">
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20200914-WA0017-560x373.jpg" alt="Sponsorship exhibition" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
        </motion.section>

        <motion.div variants={containerVariants} className="row g-4 mb-4">
          <motion.div variants={fadeUp} className="col-md-6">
            <div className="value-box p-4 h-100 bg-white border" style={{borderLeft: '4px solid #c8102e'}}>
              <h3 className="text-primary-purple fs-5 fw-bold">Strategic Positioning</h3>
              <p className="text-muted small">Align your brand with the industry’s most prestigious event, attended by more than 1,000,000 pilgrims' representatives worldwide.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-md-6">
            <div className="value-box p-4 h-100 bg-white border" style={{borderLeft: '4px solid #c8102e'}}>
              <h3 className="text-primary-purple fs-5 fw-bold">Networking Access</h3>
              <p className="text-muted small">Gain exclusive access to VIP delegates, government officials, and key industry stakeholders in a focused business environment.</p>
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

export default Sponsor;
