import React from "react";
import PageLayout from "../components/PageLayout";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with the District Administration"
    >
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <SectionTitle title="Official Address" />
            <div className="card location-card">
              <div className="address-block">
                <h3>District Administration Jharsuguda</h3>
                <p>Collectorate, Jharsuguda</p>
                <p>Odisha – 768204</p>
              </div>

              <div className="contact-details">
                <div className="detail-item">
                  <strong>Official Numbers:</strong>
                  <span>06645-270070 </span>
                </div>
                <div className="detail-item">
                  <strong>Official NIC Email:</strong>
                  <span>dm-jharsuguda@nic.in</span>
                </div>
                <div className="detail-item">
                  <strong>Office Hours:</strong>
                  <span>Monday–Friday: 10:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>

            <div className="emergency-contacts card">
              <h3>Emergency Call Center</h3>
              <p>For immediate assistance during disasters or emergencies:</p>
              <div className="emergency-number">1077 (Toll Free)</div>
            </div>
          </div>

          <div className="contact-form-panel">
            <SectionTitle title="Visit Us" />
            <div className="map-container card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14782.164366304445!2d84.00443915!3d21.8543789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a216f9f3b3b3b3b%3A0x3a216f9f3b3b3b3b!2sCollectorate%20Jharsuguda!5e0!3m2!1sen!2sin!4v1624350000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
