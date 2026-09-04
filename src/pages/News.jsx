import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function News() {
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

  const newsItems = [
    { id: 1, type: 'Press Release', date: '20/11/2014', title: 'WHUC Presents Kiswah Al Kaabah In Indonesia', excerpt: 'In a monumental event, the WHUC has successfully brought the Kiswah Al Kaabah for an exclusive presentation in Jakarta.', img: 'https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg' },
    { id: 2, type: 'Latest News', date: '14/10/2014', title: 'The Madinah Experience in Makkah event at the Al Shohada Hotel', excerpt: 'Delegates gathered to discuss improving the pilgrim experience during their stay in Makkah, hosted at Al Shohada.', img: 'https://hajjpeople.com/assets/2021/04/IMG-20200914-WA0017-560x373.jpg' },
    { id: 3, type: 'Press Release', date: '13/10/2014', title: 'World Hajj and Umrah Convention 28th-30th December 2014', excerpt: 'The official announcement for the upcoming convention in London has been released to global media outlets.', img: 'https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg' }
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
            <img src="https://hajjpeople.com/assets/2021/04/img001-456x600.jpg" alt="Media & PR" className="img-fluid w-100" style={{minHeight: '200px', background: '#ccc'}} />
            <h1 className="position-absolute bottom-0 w-100 m-0 p-3 text-white purple-bg" style={{opacity: 0.9}}>MEDIA & PR</h1>
          </div>
        </motion.section>

        <motion.section variants={fadeUp} className="media-centre mb-4 row align-items-stretch g-3">
          <div className="col-md-6">
             <div className="gray-bg p-4 h-100 border shadow-sm d-flex align-items-center">
                <h4 className="fw-normal text-muted lh-base mb-0">The Online Media Centre will bring you the latest news and information on the World Hajj & Umrah Convention 2014. Access to press releases and publicity material.</h4>
             </div>
          </div>
          <div className="col-md-6">
             <img src="https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg" alt="Media Centre" className="img-fluid h-100 w-100 object-fit-cover border shadow-sm" />
          </div>
        </motion.section>

        <motion.div variants={fadeUp} className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="purple-bg text-white text-center p-4 h-100 border d-flex align-items-center justify-content-center" style={{cursor: 'pointer'}}>
              <h3 className="mb-0">PR & MARKETING</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-primary text-white text-center p-4 h-100 border d-flex align-items-center justify-content-center" style={{cursor: 'pointer'}}>
              <h3 className="mb-0">DESIGN & PRINT</h3>
            </div>
          </div>
        </motion.div>

        <motion.h3 variants={fadeUp} className="text-primary-purple border-bottom pb-2 mb-4">Latest Headlines</motion.h3>
        <motion.div variants={containerVariants} className="news-list bg-white border">
          {newsItems.map((item) => (
            <motion.div variants={fadeUp} className="p-0 border-bottom row g-0" key={item.id}>
              {/* Image Split 40% */}
              <div className="col-md-4">
                <img src={item.img} alt={item.title} className="img-fluid h-100 w-100 object-fit-cover" style={{minHeight: '180px'}} />
              </div>
              <div className="col-md-8 p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary">{item.type}</span>
                  <span className="text-primary-purple fw-bold">{item.date}</span>
                </div>
                <h4 className="mb-2"><Link to="#" className="text-dark text-decoration-none">{item.title}</Link></h4>
                <p className="text-muted mb-3 small">{item.excerpt}</p>
                <Link to="#" className="btn btn-sm btn-outline-secondary">Read Full Article</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="col-lg-4">
        {/* MEDIA SIDEBAR LINKS */}
        <div className="media-sidebar-links mb-4 d-flex flex-column gap-3">
          <div className="link-box border p-3 bg-white shadow-sm">
            <h6 className="fw-bold mb-2">📷 PHOTO GALLERY</h6>
            <p className="text-muted small mb-2">See some of our recent and old photos.</p>
            <Link to="#" className="btn btn-sm text-white purple-bg">View Gallery</Link>
          </div>
          
          <div className="link-box border p-3 bg-white shadow-sm">
            <h6 className="fw-bold mb-2">🎥 VIDEO GALLERY</h6>
            <p className="text-muted small mb-2">Watch and experience some of our previous and current events.</p>
            <Link to="#" className="btn btn-sm text-white purple-bg">Watch Videos</Link>
          </div>
          
          <div className="link-box border p-3 bg-white shadow-sm">
            <h6 className="fw-bold mb-2">⬇️ DOWNLOAD WHUC LOGO</h6>
            <p className="text-muted small mb-2">Use WHUC logo on your marketing material and website to highlight your exclusive relationship.</p>
            <Link to="#" className="btn btn-sm text-white purple-bg">Download</Link>
          </div>
        </div>

        <Sidebar />
      </motion.div>
    </motion.div>
  );
}

export default News;
