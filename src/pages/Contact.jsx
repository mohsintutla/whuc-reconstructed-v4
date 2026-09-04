import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

function Contact() {
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
        <motion.div variants={fadeUp} className="section-title purple-bg text-white px-3 py-2 d-inline-block fw-bold mb-4 rounded-1">CONTACT US</motion.div>
        
        <motion.h2 variants={fadeUp} className="text-primary-purple mb-4">Get in Touch</motion.h2>
        <motion.p variants={fadeUp} className="text-muted mb-5 lead">If you have any questions or require further information about the World Hajj & Umrah Convention, please do not hesitate to contact our team.</motion.p>
        
        {/* 50/40 Split Layout */}
        <motion.section variants={fadeUp} className="row bg-white border shadow-sm mx-0 mb-4 align-items-stretch">
          <div className="col-md-5 p-0">
            <img src="https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg" alt="Contact Us" className="img-fluid w-100 h-100 object-fit-cover" style={{minHeight: '300px'}} />
          </div>
          <div className="col-md-7 p-4">
            <div className="value-box p-4 bg-light border mb-4" style={{borderLeft: '4px solid #c8102e'}}>
              <h3 className="fs-5 text-primary-purple fw-bold mb-3">General Enquiries</h3>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@whuc.org" className="text-decoration-none">info@whuc.org</a></p>
              <p className="mb-0"><strong>Phone:</strong> +44 208 252 4363</p>
            </div>
            
            <div className="value-box p-4 bg-light border" style={{borderLeft: '4px solid #c8102e'}}>
              <h3 className="fs-5 text-primary-purple fw-bold mb-3">Head Office</h3>
              <p className="mb-1 text-muted">Hajj People Limited</p>
              <p className="mb-0 text-muted">London, United Kingdom</p>
            </div>
          </div>
        </motion.section>
        
      </div>

      <motion.div variants={fadeUp} className="col-lg-4">
        <Sidebar />
      </motion.div>
    </motion.div>
  );
}

export default Contact;
