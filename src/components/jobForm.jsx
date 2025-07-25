import React, { useState } from 'react';

/**
 * JobForm renders a basic form for collecting information required to generate
 * a job description. The component manages its own state for each form field
 * and simply logs the submitted data to the console. If you wish to hook
 * this up to a backend API in the future you can replace the console.log
 * with an appropriate fetch/axios call.
 */
function JobForm() {
  const [formData, setFormData] = useState({
    job_title: '',
    location: '',
    reporting_relationship: '',
    department: '',
    role_overview: '',
    key_responsibilities: '',
    qualifications: '',
    skills_and_competencies: '',
    our_company: '',
    our_culture: '',
    local_llm: false,
  });

  /**
   * Generic change handler for inputs and textareas. It supports checkboxes
   * by detecting the input type and reading the `checked` property instead
   * of the default value property.
   */
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  /**
   * Submit handler prevents the default page reload and prints the current
   * form values. In a production setting you could instead send this data
   * to an API or perform validation here.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Job description submitted! Check the console for details.');
  };

  // Inline styling objects. Using plain CSS-in-JS keeps this component
  // self‑contained without the need for external stylesheets or class names.
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      backgroundColor: '#fafafa',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    heading: {
      textAlign: 'center',
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      color: '#111827',
    },
    label: {
      display: 'block',
      fontWeight: '600',
      marginBottom: '0.25rem',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '0.625rem',
      marginBottom: '1.25rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontFamily: 'inherit',
    },
    textarea: {
      width: '100%',
      padding: '0.625rem',
      marginBottom: '1.25rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      resize: 'vertical',
      minHeight: '6rem',
      fontFamily: 'inherit',
    },
    checkboxWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    checkboxLabel: {
      marginLeft: '0.5rem',
      fontWeight: '500',
      color: '#374151',
    },
    submitButton: {
      width: '100%',
      padding: '0.75rem 0',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
  };

  return (
    <form style={styles.container} onSubmit={handleSubmit} id="job-form">
      <h2 style={styles.heading}>Job Description Form</h2>

      {/* Required fields */}
      <label style={styles.label} htmlFor="job_title">
        Job Title<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <input
        style={styles.input}
        type="text"
        id="job_title"
        name="job_title"
        placeholder="e.g. Senior Software Engineer"
        value={formData.job_title}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="location">
        Location<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <input
        style={styles.input}
        type="text"
        id="location"
        name="location"
        placeholder="e.g. Kolkata, India"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="reporting_relationship">
        Reporting To<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <input
        style={styles.input}
        type="text"
        id="reporting_relationship"
        name="reporting_relationship"
        placeholder="e.g. Head of Engineering"
        value={formData.reporting_relationship}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="department">
        Function / Department<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <input
        style={styles.input}
        type="text"
        id="department"
        name="department"
        placeholder="e.g. Technology"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="role_overview">
        Role Overview<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <textarea
        style={styles.textarea}
        id="role_overview"
        name="role_overview"
        placeholder="Provide a concise overview of the role..."
        value={formData.role_overview}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="key_responsibilities">
        Key Responsibilities<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <textarea
        style={styles.textarea}
        id="key_responsibilities"
        name="key_responsibilities"
        placeholder="List the main duties and responsibilities..."
        value={formData.key_responsibilities}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="qualifications">
        Qualifications<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <textarea
        style={styles.textarea}
        id="qualifications"
        name="qualifications"
        placeholder="List required educational qualifications..."
        value={formData.qualifications}
        onChange={handleChange}
        required
      />

      <label style={styles.label} htmlFor="skills_and_competencies">
        Skills &amp; Competencies<span style={{ color: '#dc2626' }}>*</span>
      </label>
      <textarea
        style={styles.textarea}
        id="skills_and_competencies"
        name="skills_and_competencies"
        placeholder="Highlight key skills and competencies..."
        value={formData.skills_and_competencies}
        onChange={handleChange}
        required
      />

      {/* Optional fields */}
      <label style={styles.label} htmlFor="our_company">
        Company Website (Optional)
      </label>
      <input
        style={styles.input}
        type="url"
        id="our_company"
        name="our_company"
        placeholder="https://company.example.com"
        value={formData.our_company}
        onChange={handleChange}
      />

      <label style={styles.label} htmlFor="our_culture">
        Company Culture Link (Optional)
      </label>
      <input
        style={styles.input}
        type="url"
        id="our_culture"
        name="our_culture"
        placeholder="https://culture.example.com"
        value={formData.our_culture}
        onChange={handleChange}
      />

      {/* Boolean field */}
      <div style={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id="local_llm"
          name="local_llm"
          checked={formData.local_llm}
          onChange={handleChange}
        />
        <label htmlFor="local_llm" style={styles.checkboxLabel}>
          Use Local LLM for JD Generation
        </label>
      </div>

      <button type="submit" style={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}

export default JobForm;
