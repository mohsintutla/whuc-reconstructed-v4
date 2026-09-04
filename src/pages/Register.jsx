import React from 'react';
import { motion } from 'framer-motion';

function Register() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="row m-0 p-4 justify-content-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={fadeUp} className="col-lg-8 bg-white border p-5 shadow-sm rounded-1">
        <div className="text-center mb-5">
          <img src="/images/main-whuc-logo.png" alt="WHUC Logo" style={{maxHeight: '80px'}} className="mb-3" />
          <h2 className="text-primary-purple fw-bold">Event Registration</h2>
          <p className="text-muted">Register your interest to participate in the World Hajj & Umrah Convention.</p>
        </div>

        <form action="https://formsubmit.co/mr.mohsin.tutla@gmail.com" method="POST">
          {/* Prevent captcha/redirects to keep form seamless if needed */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New WHUC Registration Entry!" />
          
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-muted small fw-bold">Full Name *</label>
              <input type="text" name="name" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label text-muted small fw-bold">Email Address *</label>
              <input type="email" name="email" className="form-control" required />
            </div>
          </div>
          
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label text-muted small fw-bold">Phone Number</label>
              <input type="tel" name="phone" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label text-muted small fw-bold">Company / Organization *</label>
              <input type="text" name="company" className="form-control" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">Registration Type *</label>
            <select name="registration_type" className="form-select" required>
              <option value="">Select an option...</option>
              <option value="Delegate">Delegate</option>
              <option value="Exhibitor">Exhibitor</option>
              <option value="Sponsor">Sponsor</option>
              <option value="Visitor">Visitor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label text-muted small fw-bold">Additional Comments / Enquiries</label>
            <textarea name="comments" className="form-control" rows="4"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-danger px-5 py-2 fw-bold text-uppercase" style={{backgroundColor: '#c8102e', borderColor: '#c8102e'}}>Submit Registration</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Register;
