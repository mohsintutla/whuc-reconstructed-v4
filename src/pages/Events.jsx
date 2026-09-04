import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Events() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const eventsList = [
    { id: 1, title: 'Annual Hajj & Umrah Conference', date: '28-30 Dec 2014', location: 'QEII Centre, London', desc: 'The leading global forum for dialogue in evolving and transforming the experience of pilgrims worldwide.', img: 'https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg' },
    { id: 2, title: 'WHUC Exhibition', date: '29 Dec 2014', location: 'Exhibition Hall A', desc: 'A unique opportunity for businesses to showcase their services and solutions for the Hajj & Umrah sector.', img: 'https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg' },
    { id: 3, title: 'Interactive Workshops', date: '30 Dec 2014', location: 'Seminar Rooms', desc: 'Join industry experts to share initiatives at our workshops and round table meetings focusing on pilgrim safety.', img: 'https://hajjpeople.com/assets/2021/04/img001-456x600.jpg' },
    { id: 4, title: 'Thames River Cruise', date: '30 Dec 2014', location: 'London Eye Pier', desc: 'Meet, Greet and Eat on a fabulous Thames River Cruise to wrap up the convention with networking.', img: 'https://hajjpeople.com/assets/2021/04/Mobile-Award-475x560.jpg' }
  ];

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
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg" alt="Reason to Exhibit" className="img-fluid w-100" style={{minHeight: '200px', background: '#ccc'}} />
            <h1 className="position-absolute bottom-0 w-100 m-0 p-3 text-white purple-bg" style={{opacity: 0.9}}>UPCOMING EVENTS & EXHIBITIONS</h1>
          </div>
        </motion.section>

        {/* 50/40 Image Split layout */}
        <motion.section variants={fadeUp} className="value-prop mb-4 p-4 bg-white border row align-items-center">
          <div className="col-md-6">
            <h2 className="text-primary-purple mb-3">WHUC 2014 – The Value to Attend</h2>
            <div className="value-box p-3 mb-3 gray-bg" style={{borderLeft: '4px solid #2e8bc9'}}>
              <h5 className="mb-0 fw-bold fs-6">The only Hajj & Umrah event of the year that will keep you ahead of the competition.</h5>
            </div>
            <p className="text-muted small">Benefit from unparalleled networking opportunities with hundreds of industry stakeholders, decision-makers from the leading Islamic related businesses and government officials from around the world.</p>
          </div>
          <div className="col-md-6">
            <img src="https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg" className="img-fluid rounded border" alt="Networking" />
          </div>
        </motion.section>

        <motion.div variants={containerVariants} className="row g-4 mb-4">
          {eventsList.map((evt) => (
            <motion.div variants={fadeUp} className="col-12" key={evt.id}>
              {/* Event card with 40/60 image to text split */}
              <div className="feature-card d-flex flex-column flex-md-row shadow-sm bg-white border">
                <div className="w-100 w-md-40" style={{flex: '0 0 40%'}}>
                  <img src={evt.img} alt={evt.title} className="img-fluid h-100 w-100 object-fit-cover border-end" style={{minHeight: '200px', background: '#eee'}} />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1" style={{flex: '0 0 60%'}}>
                  <h4 className="text-primary-purple fw-bold mb-2">{evt.title}</h4>
                  <p className="text-danger fw-bold small mb-2">
                    <span className="me-3">📅 {evt.date}</span> 
                    <span>📍 {evt.location}</span>
                  </p>
                  <p className="text-muted small flex-grow-1">{evt.desc}</p>
                  <Link to="#" className="btn btn-sm text-white purple-bg align-self-start px-4">Register for Event</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="col-lg-4">
        <Sidebar />
      </motion.div>
    </motion.div>
  );
}

export default Events;
