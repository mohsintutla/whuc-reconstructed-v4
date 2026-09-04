import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
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
            <img src="https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg" alt="About Hajj People" className="img-fluid w-100" style={{minHeight: '200px', background: '#ccc'}} />
            <h1 className="position-absolute bottom-0 w-100 m-0 p-3 text-white purple-bg" style={{opacity: 0.9}}>ABOUT HAJJ PEOPLE</h1>
          </div>
        </motion.section>

        {/* Applying 50/40 Image Split layout */}
        <motion.section variants={fadeUp} className="company-intro mb-5 bg-white p-4 border shadow-sm">
          <div className="row align-items-center mb-4">
            <div className="col-md-5 text-center">
              <motion.img variants={slideLeft} src="https://hajjpeople.com/assets/hajj-logo.png" alt="Hajj People - Knowledge & Enterprise" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <p className="lead text-primary-purple fw-bold">Hajj People is a social enterprise company with a commercial engine that is focused on creating solutions to enhance the practices within the Hajj & Umrah Sector.</p>
              <p className="text-muted">Established in 2009, Hajj People have produced conferences, training programmes, exhibitions and event managed product and service launches for others.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-7">
              <p className="text-muted">Hajj People is a Knowledge and Enterprise company, transforming data to opportunity as well as bringing people together, a catalyst for improvement. We create platforms that support progression with commercial, social and educational areas between Saudi Arabia and the International community.</p>
            </div>
            <div className="col-md-5">
              <motion.img variants={slideLeft} src="https://hajjpeople.com/assets/2021/04/img001-456x600.jpg" alt="Exhibition Setup" className="img-fluid rounded border" />
            </div>
          </div>
        </motion.section>

        <motion.h3 variants={fadeUp} className="text-primary-purple border-bottom pb-2 mb-4">Our Journey & Timeline</motion.h3>
        <div className="row g-4 mb-5">
          {[
            { year: '2010', title: 'Global Pavilion', desc: 'Presented the World Hajj Exhibition in conjunction with GPU attended by 60,000 public visitors', img: 'https://hajjpeople.com/assets/2021/04/The-British-Hajj-Delegation-Drs-560x420.jpg' },
            { year: '2011', title: 'Jabal Omar', desc: 'Organised the $6BN Jabal Omar Contract Signing Ceremony in London Dorchester hotel', img: 'https://hajjpeople.com/assets/2021/04/Presenting-House-of-Lords-Baroness-Uddin-Seif-Usher-560x420.jpg' },
            { year: '2012', title: 'British Museum', desc: 'Organised the first World Hajj and Umrah Convention at the British Museum, London', img: 'https://hajjpeople.com/assets/2021/04/British-Hajj-Delegation-2019-A-560x369.jpg' },
            { year: '2013', title: 'London Olympia', desc: 'Organised the second World Hajj & Umrah Convention at the London Olympia', img: 'https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg' }
          ].map((item, idx) => (
            <motion.div variants={fadeUp} className="col-md-6" key={idx}>
              <div className="timeline-item border p-3 h-100 bg-white d-flex flex-column">
                <span className="badge bg-primary-purple fs-6 mb-3 align-self-start">{item.year}</span>
                <div className="row flex-grow-1">
                  <div className="col-6">
                    <img src={item.img} alt={item.title} className="img-fluid w-100 h-100 object-fit-cover bg-light border" />
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-center">
                    <h5 className="fw-bold fs-6 text-primary-purple">{item.title}</h5>
                    <p className="text-muted mb-0" style={{fontSize: '12px'}}>{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeUp} className="col-lg-4">
        <Sidebar />
      </motion.div>
    </motion.div>
  );
}

export default About;
