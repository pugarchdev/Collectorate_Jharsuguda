import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Jharsuguda-02.jpg';
import emblem from '../assets/odisha-emblem.svg';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 34, 68, 0.7), rgba(0, 34, 68, 0.7)), url(${heroImg})` }}>
        <div className="container hero-content animate-fade-in">
          <img src={emblem} alt="Odisha Emblem" className="hero-emblem" />
          <h1>District Administration, Jharsuguda</h1>
          <p className="hero-subtitle">Official Portal of Collectorate Jharsuguda, Government of Odisha</p>
          <div className="hero-divider"></div>
         
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/whatsapp-service" className="btn btn-secondary">WhatsApp Chatbot</Link>
          </div>
        </div>
      </section>
      
      {/* News Ticker */}
      <div className="news-ticker">
        <div className="ticker-label">LATEST UPDATES</div>
        <div className="ticker-content">
          <marquee behavior="scroll" direction="left">
            Welcome to the official portal of Collectorate Jharsuguda. | New WhatsApp Citizen Service launched - Start chatting now! | 5T Governance initiatives implemented for transparency. | Visit the 'Departments' page for service details.
          </marquee>
        </div>
      </div>

      {/* Main Stats/Info Section */}
      <section className="container info-section">
        <div className="grid grid-cols-3">
          <div className="card info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>Collectorate, Jharsuguda, Odisha – 768204</p>
          </div>
          <div className="card info-card">
            <i className="fas fa-phone"></i>
            <h3>Contact</h3>
            <p>06645-270070</p>
            <p>9356150561</p>
          </div>
          <div className="card info-card">
            <i className="fas fa-envelope"></i>
            <h3>Official Email</h3>
            <p>dm-jharsuguda@nic.in</p>
           
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="container about-brief">
        <div className="about-content">
          <SectionTitle 
            title="About Jharsuguda" 
            subtitle="The Industrial Hub of Western Odisha"
          />
          <p>
            Jharsuguda is one of the most industrially developed districts of Odisha. 
            Known as the 'Power House of Odisha', it is home to major industrial units 
            and rich mineral resources. The district administration is committed to 
            inclusive growth, efficient governance, and public service delivery.
          </p>
          <p>
            Our digital initiatives, including the official WhatsApp Chatbot, 
            aim to bridge the gap between the administration and citizens, 
            ensuring transparency and quick grievance redressal.
          </p>
          <Link to="/about" className="read-more">Read Full Overview →</Link>
        </div>
        <div className="about-image animate-fade-in">
          <img src="https://jharsuguda.odisha.gov.in/sites/default/files/styles/home/public/2023-08/Jharsuguda-02.jpg?itok=nWJvTWN5" alt="Jharsuguda Administration" />
        </div>
      </section>

      {/* Citizen Corner */}
      <section className="citizen-corner container">
        <SectionTitle title="Citizen Corner" center={true} />
        <div className="grid grid-cols-3">
          <div className="card service-card">
            <i className="fas fa-file-invoice"></i>
            <h4>Online Certificates</h4>
            <p>Apply for Caste, Residence, and Income certificates online via e-District portal.</p>
          </div>
          <div className="card service-card">
            <i className="fas fa-user-shield"></i>
            <h4>Grievance Portal</h4>
            <p>Submit your complaints directly to the District Collector’s grievance cell.</p>
          </div>
          <div className="card service-card">
            <i className="fas fa-bullhorn"></i>
            <h4>Tenders & Recrutiment</h4>
            <p>View latest government tenders, vacancy notices, and administrative orders.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Section CTA */}
      <section className="whatsapp-cta">
        <div className="container">
          <div className="cta-box animate-fade-in">
            <h2>Connect on WhatsApp</h2>
            <p>Get administrative updates, submit grievances, and access services directly on your mobile.</p>
            <div className="number">8999470824</div>
            <Link to="/whatsapp-service" className="btn btn-whatsapp">Start Chatting Now</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
