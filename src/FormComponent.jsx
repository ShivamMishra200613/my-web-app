import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    track: 'Web Development', 
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    college: '',
    voucher: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTrackSelect = (trackName) => {
    setFormData({ ...formData, track: trackName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Team Registered Successfully!");
  };

  return (
    <div className="layout-wrapper">
      <div className="main-card">
        
        {/* Top Header */}
        <header className="card-header">
          <div className="logo-section">
            <span className="menu-icon">≡</span>
            <h1 className="brand-name">GENESIS <strong>2026</strong></h1>
          </div>
          <div className="cart-icon-wrapper">
            <span className="cart-icon">👥</span>
            <span className="cart-badge">4</span>
          </div>
        </header>

        <div className="content-area">
          {/* Very thin left sidebar for icons */}
          <div className="icon-sidebar">
            <div className="top-icon">
              <span className="icon-label">Sound On</span>
              <span>🔊</span>
            </div>
            <div className="bottom-icon">
              <span>📷</span>
            </div>
          </div>

          {/* Left Column: Form */}
          <div className="form-column">
            
            {/* Stepper */}
            <div className="stepper">
              <div className="step completed">✓ Team Info</div>
              <div className="step-line completed-line"></div>
              <div className="step completed">✓ Members</div>
              <div className="step-line completed-line"></div>
              <div className="step active">◉ Project Details</div>
              <div className="step-line"></div>
              <div className="step disabled">4 Confirm</div>
            </div>

            <form onSubmit={handleSubmit}>
              <h2 className="section-title">Hackathon Track</h2>
              
              {/* Track Selection (Styled like Payment Methods) */}
              <div className="track-selection">
                <div 
                  className={`track-option ${formData.track === 'Agentic AI' ? 'active' : ''}`}
                  onClick={() => handleTrackSelect('Agentic AI')}
                >
                  <span>Agentic AI</span>
                  <div className="radio-circle"></div>
                </div>
                <div 
                  className={`track-option ${formData.track === 'Web Development' ? 'active' : ''}`}
                  onClick={() => handleTrackSelect('Web Development')}
                >
                  <span className="blue-text">Web Development</span>
                  <div className="radio-circle active-circle"></div>
                </div>
              </div>

              <h2 className="section-title">Team Details</h2>

              <div className="input-group">
                <label>Team Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">🛡️</span>
                  <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="e.g. Byte Me" />
                </div>
              </div>

              <div className="input-group">
                <label>Leader Name</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input type="text" name="leaderName" value={formData.leaderName} onChange={handleChange} placeholder="John Doe" />
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>

              {/* Side by side inputs */}
              <div className="row-inputs">
                <div className="input-group half-width">
                  <label>Phone Number</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📞</span>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91" />
                  </div>
                </div>
                <div className="input-group half-width">
                  <label>College Roll No.</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🎓</span>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="e.g. 29" />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-back">Back</button>
                <button type="submit" className="btn-continue">Continue</button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary -> Team Details */}
          <div className="summary-column">
            <h3 className="summary-title">Team Summary <span className="item-count">Live</span></h3>

            {/* Dynamic Display Card 1 */}
            <div className="summary-item">
              <div className="item-image placeholder-img">🧑‍💻</div>
              <div className="item-details">
                <h4>{formData.teamName || "Your Team Name"}</h4>
                <p>Track: {formData.track}</p>
                <p className="item-qty">Members: 4 (Max)</p>
                <p className="item-price">Leader: {formData.leaderName || "Pending"}</p>
              </div>
            </div>

            {/* Voucher Section */}
            <div className="voucher-section">
              <label>Have A Referral Code?</label>
              <div className="voucher-input-group">
                <input type="text" name="voucher" value={formData.voucher} onChange={handleChange} placeholder="Enter Code" />
                <button type="button" className="btn-apply">Apply</button>
              </div>
            </div>

            {/* Totals */}
            <div className="totals-section">
              <div className="total-row">
                <span>Registration Fee:</span>
                <strong>$0.00</strong>
              </div>
              <div className="total-row">
                <span>Platform Fee:</span>
                <strong>$0.00</strong>
              </div>
              <div className="total-row grand-total">
                <span>Total Due</span>
                <strong>Free</strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;