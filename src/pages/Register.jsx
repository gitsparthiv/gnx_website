import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    collegeId: '',
    college: '',
    dept: '',
    otherDept: '',
    year: '',
    section: '',
    expectations: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const item = document.querySelector('.reveal-item');
    if (item) {
      setTimeout(() => item.classList.add('revealed'), 100);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful! Welcome to GNX Tech Club.');
    navigate('/');
  };

  return (
    <main style={{ paddingTop: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="registration-container glass reveal-item">
        <h1 className="form-title">Register For The Event</h1>
        <p className="form-subtitle">Fill in your details to start your journey with us.</p>
        
        <form className="registration-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="input-group full-width">
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <i className='bx bx-user'></i>
              <input type="text" id="name" placeholder="Enter your full name" required value={formData.name} onChange={handleChange} />
            </div>
          </div>

          {/* College ID */}
          <div className="input-group">
            <label htmlFor="collegeId">College ID</label>
            <div className="input-wrapper">
              <i className='bx bx-id-card'></i>
              <input type="text" id="collegeId" placeholder="e.g. 241099XXXX" required value={formData.collegeId} onChange={handleChange} />
            </div>
          </div>

          {/* College */}
          <div className="input-group">
            <label htmlFor="college">College</label>
            <div className="input-wrapper">
              <i className='bx bx-buildings'></i>
              <input type="text" id="college" placeholder="Enter college name" required value={formData.college} onChange={handleChange} />
            </div>
          </div>

          {/* Department */}
          <div className="input-group full-width">
            <label htmlFor="dept">Department</label>
            <div className="input-wrapper">
              <i className='bx bx-code-alt'></i>
              <select id="dept" required value={formData.dept} onChange={handleChange}>
                <option value="" disabled>Select your department</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EE">Electrical Engineering</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="CE">Civil Engineering</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Other Department */}
          {formData.dept === 'Other' && (
            <div className="input-group full-width">
              <label htmlFor="otherDept">Specify Department</label>
              <div className="input-wrapper">
                <i className='bx bx-edit-alt'></i>
                <input type="text" id="otherDept" placeholder="Enter your department name" required value={formData.otherDept} onChange={handleChange} />
              </div>
            </div>
          )}

          {/* Year */}
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <div className="input-wrapper">
              <i className='bx bx-calendar'></i>
              <select id="year" required value={formData.year} onChange={handleChange}>
                <option value="" disabled>Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>

          {/* Section */}
          <div className="input-group">
            <label htmlFor="section">Section</label>
            <div className="input-wrapper">
              <i className='bx bx-group'></i>
              <input type="text" id="section" placeholder="e.g. A, B, C" required value={formData.section} onChange={handleChange} />
            </div>
          </div>

          {/* Expectations */}
          <div className="input-group full-width">
            <label htmlFor="expectations">What do you expect from this event?</label>
            <div className="input-wrapper">
              <textarea id="expectations" placeholder="Share your goals or what you'd like to learn/achieve..." required value={formData.expectations} onChange={handleChange}></textarea>
              <i className='bx bx-bullseye' style={{top: '22px', transform: 'none'}}></i>
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Complete Registration <i className='bx bx-right-arrow-alt'></i>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
