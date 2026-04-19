import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// ─────────────────────────────────────────────
//  STATIC DATA
// ─────────────────────────────────────────────
const EVENTS = [
  { id: 'hackathon-2026', name: '⚡ GNX Hackathon 2026',  date: 'May 15, 2026',  type: 'Hackathon',   seats: 120, icon: 'bx-code-curly'    },
  { id: 'ai-workshop',    name: '🤖 AI/ML Workshop',      date: 'May 22, 2026',  type: 'Workshop',    seats: 60,  icon: 'bx-brain'          },
  { id: 'webdev-bootcamp',name: '🌐 Web Dev Bootcamp',    date: 'June 1, 2026',  type: 'Bootcamp',    seats: 80,  icon: 'bx-globe'          },
  { id: 'cybersec-ctf',   name: '🔐 CyberSec CTF',        date: 'June 10, 2026', type: 'Competition', seats: 50,  icon: 'bx-shield-alt-2'  },
];

const DEPARTMENTS = [
  { value: 'CSE',   label: 'Computer Science & Engineering' },
  { value: 'IT',    label: 'Information Technology' },
  { value: 'AIML',  label: 'Artificial Intelligence & ML' },
  { value: 'DS',    label: 'Data Science' },
  { value: 'ECE',   label: 'Electronics & Communication' },
  { value: 'EE',    label: 'Electrical Engineering' },
  { value: 'ME',    label: 'Mechanical Engineering' },
  { value: 'CE',    label: 'Civil Engineering' },
  { value: 'Other', label: 'Other' },
];

// ─────────────────────────────────────────────
//  STEP INDICATOR  (outside — no state dependency)
// ─────────────────────────────────────────────
const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="step-indicator">
    {Array.from({ length: totalSteps }, (_, i) => (
      <React.Fragment key={i}>
        <div className={`step-dot ${i + 1 <= currentStep ? 'active' : ''} ${i + 1 < currentStep ? 'done' : ''}`}>
          {i + 1 < currentStep
            ? <i className="bx bx-check" />
            : <span>{i + 1}</span>
          }
        </div>
        {i < totalSteps - 1 && (
          <div className={`step-line ${i + 1 < currentStep ? 'active' : ''}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

// ─────────────────────────────────────────────
//  INPUT FIELD  (outside — avoids remount on every keystroke)
// ─────────────────────────────────────────────
const InputField = ({ id, label, icon, type = 'text', placeholder, required, hint, value, onChange, error }) => (
  <div className={`input-group ${error ? 'has-error' : ''}`}>
    <label htmlFor={id}>
      {label} {required && <span className="req-star">*</span>}
    </label>
    <div className="input-wrapper">
      <i className={`bx ${icon}`} />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
    {error  && <span className="field-error"><i className="bx bx-error-circle" /> {error}</span>}
    {hint && !error && <span className="field-hint">{hint}</span>}
  </div>
);

// ─────────────────────────────────────────────
//  SELECT FIELD  (outside — same reason)
// ─────────────────────────────────────────────
const SelectField = ({ id, label, icon, options, defaultLabel, required, value, onChange, error }) => (
  <div className={`input-group ${error ? 'has-error' : ''}`}>
    <label htmlFor={id}>
      {label} {required && <span className="req-star">*</span>}
    </label>
    <div className="input-wrapper">
      <i className={`bx ${icon}`} />
      <select id={id} value={value} onChange={onChange}>
        <option value="" disabled>{defaultLabel}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
    {error && <span className="field-error"><i className="bx bx-error-circle" /> {error}</span>}
  </div>
);

// ─────────────────────────────────────────────
//  MAIN REGISTER PAGE
// ─────────────────────────────────────────────
const Register = () => {
  const navigate = useNavigate();
  const TOTAL_STEPS = 4;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventId: '',
    name: '', email: '', phone: '',
    collegeId: '', college: '', dept: '', otherDept: '', year: '', section: '',
    teamName: '', expectations: '', agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Shared change handlers ─────────────────────────────────────────────────
  /**
   * handleChange — called by every input/select/textarea/checkbox.
   * Updates the matching key in formData and clears its error.
   */
  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const key = id || name;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  /**
   * handleSelection — used for custom UI elements like event cards.
   */
  const handleSelection = (key, val) => {
    setFormData(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  // ── Validation ────────────────────────────────────────────────────────────
  /**
   * validateStep(s) — validates fields for step s.
   * Returns true if all valid, false + sets errors otherwise.
   */
  const validateStep = (s) => {
    const e = {};
    if (s === 1) {
      if (!formData.eventId) e.eventId = 'Please select an event to continue.';
    }
    if (s === 2) {
      if (!formData.name.trim())  e.name  = 'Full name is required.';
      if (!formData.email.trim()) e.email = 'Email address is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        e.email = 'Enter a valid email address.';
      if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone))
        e.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (s === 3) {
      if (!formData.collegeId.trim()) e.collegeId = 'College ID is required.';
      if (!formData.college.trim())   e.college   = 'College name is required.';
      if (!formData.dept)             e.dept      = 'Please select your department.';
      if (formData.dept === 'Other' && !formData.otherDept.trim())
        e.otherDept = 'Please specify your department.';
      if (!formData.year)             e.year      = 'Please select your year.';
      if (!formData.section.trim())   e.section   = 'Section is required.';
    }
    if (s === 4) {
      if (!formData.agreeTerms) e.agreeTerms = 'You must agree to the terms to register.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => { if (validateStep(step)) setStep(s => Math.min(s + 1, TOTAL_STEPS)); };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    navigate('/success');
  };

  const selectedEvent = EVENTS.find(ev => ev.id === formData.eventId);

  const stepVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit:    { opacity: 0, x: -40, transition: { duration: 0.2 } },
  };

  const renderStep1 = () => (
    <div className="step-panel">
      <h2 className="step-title">Pick an Event</h2>
      <p className="step-desc">Which one are you signing up for? Choose below.</p>
      <div className="event-cards">
        {EVENTS.map(event => (
          <div 
            key={event.id}
            className={`event-card glass ${formData.eventId === event.id ? 'selected' : ''}`}
            onClick={() => handleSelection('eventId', event.id)}
          >
            <div className="event-card-icon"><i className={`bx ${event.icon}`} /></div>
            <div className="event-card-info">
              <h3>{event.name}</h3>
              <p><i className="bx bx-calendar" /> {event.date}</p>
              <span className="event-badge">{event.type}</span>
            </div>
            <div className="event-card-seats"><i className="bx bx-user" /> {event.seats}</div>
            {formData.eventId === event.id && (
              <div className="event-selected-check"><i className="bx bxs-check-circle" /></div>
            )}
          </div>
        ))}
      </div>
      {errors.eventId && (
        <p className="field-error center-error"><i className="bx bx-error-circle" /> {errors.eventId}</p>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="step-panel">
      <h2 className="step-title">About You</h2>
      <p className="step-desc">Tell us a bit about yourself so we know who's coming.</p>
      <div className="form-grid">
        <div className="full-width">
          <InputField id="name"  label="Full Name"     icon="bx-user"     placeholder="Enter your full name" required
            value={formData.name}  onChange={handleChange} error={errors.name} />
        </div>
        <InputField id="email" label="Email Address"  icon="bx-envelope"  placeholder="you@example.com" required type="email"
          value={formData.email} onChange={handleChange} error={errors.email} />
        <InputField id="phone" label="Phone Number"   icon="bx-phone"     placeholder="10-digit mobile number" type="tel"
          hint="Optional — used for event reminders"
          value={formData.phone} onChange={handleChange} error={errors.phone} />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="step-panel">
      <h2 className="step-title">College Details</h2>
      <p className="step-desc">A few more details about where you study and what you're into.</p>
      <div className="form-grid">
        <InputField id="collegeId" label="College ID" icon="bx-id-card"   placeholder="e.g. 241099XXXX" required
          value={formData.collegeId} onChange={handleChange} error={errors.collegeId} />
        <InputField id="college"   label="College"    icon="bx-buildings" placeholder="Full college name" required
          value={formData.college}   onChange={handleChange} error={errors.college} />

        <div className="full-width">
          <SelectField
            id="dept" label="Department" icon="bx-code-alt"
            options={DEPARTMENTS} defaultLabel="Select your department" required
            value={formData.dept} onChange={handleChange} error={errors.dept}
          />
        </div>

        <AnimatePresence>
          {formData.dept === 'Other' && (
            <motion.div key="otherDept" className="full-width"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <InputField id="otherDept" label="Specify Department" icon="bx-edit-alt"
                placeholder="Enter your department name" required
                value={formData.otherDept} onChange={handleChange} error={errors.otherDept} />
            </motion.div>
          )}
        </AnimatePresence>

        <SelectField
          id="year" label="Year" icon="bx-calendar"
          options={[
            { value: '1', label: '1st Year' }, { value: '2', label: '2nd Year' },
            { value: '3', label: '3rd Year' }, { value: '4', label: '4th Year' },
          ]}
          defaultLabel="Select Year" required
          value={formData.year} onChange={handleChange} error={errors.year}
        />
        <InputField id="section" label="Section" icon="bx-group" placeholder="e.g. A, B, C" required
          value={formData.section} onChange={handleChange} error={errors.section} />

        <div className="input-group">
          <label htmlFor="teamName">
            Team Name <span className="field-hint-inline">(if applicable)</span>
          </label>
          <div className="input-wrapper">
            <i className="bx bx-trophy" />
            <input type="text" id="teamName" placeholder="Leave blank if solo"
              value={formData.teamName} onChange={handleChange} />
          </div>
        </div>

        <div className="input-group full-width">
          <label htmlFor="expectations">What do you expect from this event?</label>
          <div className="input-wrapper">
            <i className="bx bx-bullseye" style={{ top: '22px', transform: 'none' }} />
            <textarea id="expectations"
              placeholder="Share your goals, what you'd like to learn, or what you're excited about..."
              value={formData.expectations} onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const dept = formData.dept === 'Other' ? formData.otherDept : formData.dept;
    const suffixes = ['', 'st', 'nd', 'rd', 'th'];
    const yearLabel = formData.year ? `${formData.year}${suffixes[+formData.year] || 'th'} Year` : '';
    const rows = [
      { label: 'Event',      value: selectedEvent?.name ?? '—' },
      { label: 'Full Name',  value: formData.name       || '—' },
      { label: 'Email',      value: formData.email      || '—' },
      { label: 'Phone',      value: formData.phone      || '—' },
      { label: 'College ID', value: formData.collegeId  || '—' },
      { label: 'College',    value: formData.college    || '—' },
      { label: 'Department', value: dept                || '—' },
      { label: 'Year',       value: yearLabel           || '—' },
      { label: 'Section',    value: formData.section    || '—' },
      { label: 'Team Name',  value: formData.teamName   || '—' },
    ];

    return (
      <div className="step-panel">
        <h2 className="step-title">Double Check Everything</h2>
        <p className="step-desc">Look good? Review your info and hit submit when you're ready.</p>

        <div className="review-table glass">
          {rows.map(({ label, value }) => (
            <div className="review-row" key={label}>
              <span className="review-label">{label}</span>
              <span className="review-value">{value}</span>
            </div>
          ))}
        </div>

        {formData.expectations && (
          <div className="review-expectations glass">
            <p className="review-label">Expectations</p>
            <p className="review-value" style={{ marginTop: '8px' }}>{formData.expectations}</p>
          </div>
        )}

        {/* Terms & Conditions checkbox */}
        <div className={`terms-row ${errors.agreeTerms ? 'has-error' : ''}`}>
          <label className="checkbox-label">
            <input type="checkbox" id="agreeTerms"
              checked={formData.agreeTerms} onChange={handleChange} />
            <span className="custom-checkbox">
              {formData.agreeTerms && <i className="bx bx-check" />}
            </span>
            I confirm the above details are correct and agree to GNX's event terms and conditions.
          </label>
          {errors.agreeTerms && (
            <span className="field-error"><i className="bx bx-error-circle" /> {errors.agreeTerms}</span>
          )}
        </div>
      </div>
    );
  };

  // ── MAIN RENDER ──────────────────────────────────────────────────────────
  return (
    <main className="register-main">
      <Helmet>
        <title>Register for Events | GNX Tech Club</title>
        <meta name="description" content="Register for upcoming GNX Tech Club events including hackathons, workshops, and bootcamps." />
      </Helmet>

      <div className="reg-blob reg-blob-1" />
      <div className="reg-blob reg-blob-2" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="registration-container glass"
      >
        {/* ── Header ── */}
        <div className="reg-header">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            className="reg-icon"
          >
            <i className="bx bxs-calendar-event" />
          </motion.div>
          <h1 className="form-title">Event Registration</h1>
          <p className="form-subtitle">GNX Tech Club · {new Date().getFullYear()}</p>
        </div>

        {/* ── Progress indicator ── */}
        <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

        <div className="step-labels">
          {['Event', 'Personal', 'Academic', 'Review'].map((lbl, i) => (
            <span key={lbl} className={`step-label ${step === i + 1 ? 'active-label' : ''}`}>{lbl}</span>
          ))}
        </div>

        {/* ── Step content (animated) ── */}
        <form onSubmit={handleSubmit} noValidate>
          <AnimatePresence mode="wait">
            <motion.div key={step} variants={stepVariants} initial="initial" animate="animate" exit="exit">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation buttons ── */}
          <div className="btn-row">
            {step > 1 && (
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="btn-back" onClick={prevStep} disabled={isSubmitting}>
                <i className="bx bx-left-arrow-alt" /> Back
              </motion.button>
            )}

            {step < TOTAL_STEPS && (
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="btn-next" onClick={nextStep}>
                Continue <i className="bx bx-right-arrow-alt" />
              </motion.button>
            )}

            {step === TOTAL_STEPS && (
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="btn-submit" disabled={isSubmitting}>
                {isSubmitting
                  ? <><i className="bx bx-loader-alt bx-spin" /> Submitting…</>
                  : <><i className="bx bxs-send" /> Complete Registration</>
                }
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>

      {/* ── Scoped styles for registration-only elements ── */}
      <style>{`
        .register-main {
          padding-top: 130px;
          padding-bottom: 80px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .reg-blob { position: fixed; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
        .reg-blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(255,126,95,0.12) 0%, transparent 70%); top: -100px; left: -100px; }
        .reg-blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,210,255,0.10) 0%, transparent 70%); bottom: 0; right: -80px; }

        .registration-container { width: 100%; max-width: 820px; padding: 50px 55px; border-radius: 36px; position: relative; z-index: 1; margin: 0 16px; }
        @media (max-width: 600px) { .registration-container { padding: 32px 20px; } }

        .reg-header { text-align: center; margin-bottom: 36px; }
        .reg-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 68px; height: 68px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 20px; font-size: 2rem; color: #fff; margin-bottom: 16px;
          box-shadow: 0 8px 24px var(--primary-glow);
        }
        .form-title {
          font-size: 2.4rem; font-weight: 900; margin-bottom: 6px;
          background: linear-gradient(to right, var(--section-title-start), var(--secondary));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .form-subtitle { color: var(--text-dim); font-size: 0.95rem; letter-spacing: 1px; text-transform: uppercase; }

        /* Step indicator */
        .step-indicator { display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
        .step-dot {
          width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--input-border);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; font-weight: 700; color: var(--text-dim); transition: all 0.4s; flex-shrink: 0;
        }
        .step-dot.active { border-color: var(--primary); background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; box-shadow: 0 0 14px var(--primary-glow); }
        .step-dot.done   { background: linear-gradient(135deg, var(--primary), var(--secondary)); border-color: var(--primary); color: #fff; }
        .step-line { flex: 1; height: 2px; background: var(--input-border); min-width: 40px; max-width: 100px; transition: background 0.4s; }
        .step-line.active { background: linear-gradient(to right, var(--primary), var(--secondary)); }

        .step-labels { display: flex; justify-content: space-between; padding: 0 4px; margin-bottom: 32px; }
        .step-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: var(--text-dim); transition: color 0.3s; flex: 1; text-align: center; }
        .step-label.active-label { color: var(--primary); }

        .step-panel { margin-bottom: 28px; }
        .step-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 6px; color: var(--text-main, #fff); }
        .step-desc  { color: var(--text-dim); font-size: 0.95rem; margin-bottom: 24px; }

        /* Form grid */
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 16px; }
        @media (max-width: 580px) { .form-grid { grid-template-columns: 1fr; } .full-width { grid-column: span 1 !important; } }
        .full-width { grid-column: span 2; }

        /* Input groups */
        .input-group { display: flex; flex-direction: column; gap: 7px; }
        .input-group label { font-size: 0.8rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; margin-left: 4px; }
        .req-star { color: var(--primary); margin-left: 2px; }
        .field-hint-inline { color: var(--text-dim); font-weight: 400; text-transform: none; letter-spacing: 0; }

        .input-wrapper { position: relative; }
        .input-wrapper i { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--primary); font-size: 1.25rem; pointer-events: none; }
        .input-wrapper input,
        .input-wrapper select,
        .input-wrapper textarea {
          width: 100%; background: var(--input-bg); border: 2px solid var(--input-border);
          border-radius: 14px; padding: 13px 18px 13px 50px;
          color: var(--text-main); font-family: inherit; font-size: 0.97rem;
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
          appearance: none; -webkit-appearance: none;
        }
        .input-wrapper textarea { resize: vertical; min-height: 110px; padding-top: 15px; }
        .input-wrapper select  { cursor: pointer; }
        .input-wrapper select option { background: var(--bg-dark); color: var(--text-main); }
        .input-wrapper input:focus,
        .input-wrapper select:focus,
        .input-wrapper textarea:focus {
          border-color: var(--primary); background: var(--input-bg);
          box-shadow: 0 0 0 4px var(--primary-glow); outline: none;
        }
        .input-group.has-error .input-wrapper input,
        .input-group.has-error .input-wrapper select,
        .input-group.has-error .input-wrapper textarea { border-color: #ff4d6d; box-shadow: 0 0 0 4px rgba(255,77,109,0.15); }

        .field-error { display: flex; align-items: center; gap: 5px; font-size: 0.8rem; color: #ff6b81; margin-left: 4px; }
        .center-error { justify-content: center; margin-top: 8px; }
        .field-hint  { font-size: 0.78rem; color: var(--text-dim); margin-left: 4px; }

        /* Event cards */
        .event-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 8px; }
        @media (max-width: 560px) { .event-cards { grid-template-columns: 1fr; } }
        .event-card {
          display: flex; align-items: center; gap: 14px; padding: 18px 20px;
          border-radius: 18px; cursor: pointer; transition: all 0.3s;
          border: 2px solid var(--input-border); position: relative; overflow: hidden;
        }
        .event-card:hover   { border-color: var(--primary); transform: translateY(-2px); }
        .event-card.selected { border-color: var(--primary); background: rgba(255,126,95,0.1); box-shadow: 0 0 20px var(--primary-glow); }
        .event-card-icon { width: 48px; height: 48px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #fff; flex-shrink: 0; }
        .event-card-info { flex: 1; }
        .event-card-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .event-card-info p  { font-size: 0.82rem; color: var(--text-dim); display: flex; align-items: center; gap: 5px; }
        .event-badge { display: inline-block; margin-top: 6px; padding: 2px 10px; background: rgba(255,126,95,0.18); color: var(--primary); border-radius: 50px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .event-card-seats  { font-size: 0.8rem; color: var(--text-dim); display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
        .event-selected-check { position: absolute; top: 10px; right: 10px; font-size: 1.4rem; color: var(--primary); }

        /* Review */
        .review-table { border-radius: 18px; overflow: hidden; margin-bottom: 16px; }
        .review-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; border-bottom: 1px solid var(--input-border); gap: 12px; }
        .review-row:last-child { border-bottom: none; }
        .review-label { font-size: 0.8rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.8px; flex-shrink: 0; }
        .review-value { font-size: 0.97rem; color: var(--text-main, #fff); text-align: right; font-weight: 500; }
        .review-expectations { padding: 18px 20px; border-radius: 18px; margin-bottom: 16px; }

        /* Terms checkbox */
        .terms-row { margin-top: 20px; padding: 16px 20px; border-radius: 14px; border: 2px solid var(--input-border); background: var(--input-bg); }
        .terms-row.has-error { border-color: #ff4d6d; }
        .checkbox-label { display: flex; align-items: flex-start; gap: 12px; cursor: pointer; font-size: 0.9rem; color: var(--text-dim); line-height: 1.5; }
        .checkbox-label input[type="checkbox"] { display: none; }
        .custom-checkbox { width: 22px; height: 22px; border: 2px solid var(--input-border); border-radius: 6px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--text-main); transition: all 0.2s; }
        .checkbox-label input:checked + .custom-checkbox { background: linear-gradient(135deg, var(--primary), var(--secondary)); border-color: transparent; box-shadow: 0 2px 10px var(--primary-glow); }

        /* Nav buttons */
        .btn-row { display: flex; gap: 14px; margin-top: 24px; }
        .btn-back {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px; border-radius: 14px; border: 2px solid var(--input-border);
          background: transparent; color: var(--text-dim); font-family: inherit; font-size: 1rem;
          font-weight: 700; cursor: pointer; transition: all 0.3s;
        }
        .btn-back:hover { border-color: var(--primary); color: var(--primary); }
        .btn-next, .btn-submit {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 28px; border-radius: 14px; border: none;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff; font-family: inherit; font-size: 1rem; font-weight: 800; cursor: pointer;
          text-transform: uppercase; letter-spacing: 1px;
          box-shadow: 0 6px 24px var(--primary-glow); transition: all 0.3s;
        }
        .btn-submit:disabled, .btn-next:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>
    </main>
  );
};

export default Register;
