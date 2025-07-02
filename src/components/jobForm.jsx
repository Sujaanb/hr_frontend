import { useState } from "react";

function JobForm() {
  const [formData, setFormData] = useState({
    job_title: "",
    location: "",
    reporting_relationship: "",
    function: "",
    role_overview: "",
    key_responsibilities: "",
    qualifications: "",
    skills_and_competencies: "",
    our_company: "",
    our_culture: "",
    local_llm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  //Inline styles
  const containerStyle = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    resize: "vertical",
  };

  const checkboxStyle = {
    marginRight: "8px",
    transform: "scale(1.2)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={headingStyle}>📝 Job Description Form</h2>

      {/* Required fields */}
      {[
        { label: "Job Title", name: "job_title" },
        { label: "Location", name: "location" },
        { label: "Reporting To", name: "reporting_relationship" },
        { label: "Function / Department", name: "function" },
        { label: "Role Overview", name: "role_overview" },
        { label: "Key Responsibilities", name: "key_responsibilities" },
        { label: "Qualifications", name: "qualifications" },
        { label: "Skills & Competencies", name: "skills_and_competencies" },
      ].map((field) => (
        <div key={field.name}>
          <label style={labelStyle}>{field.label} *</label>
          <textarea
            name={field.name}
            value={formData[field.name]}
            required
            onChange={handleChange}
            rows={2}
            style={inputStyle}
          />
        </div>
      ))}

      {/* Optional Fields */}
      <div>
        <label style={labelStyle}>Company Website (Optional)</label>
        <input
          type="url"
          name="our_company"
          value={formData.our_company}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Company Culture Link (Optional)</label>
        <input
          type="url"
          name="our_culture"
          value={formData.our_culture}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Boolean Field */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "#333", fontSize: "14px" }}>
          <input
            type="checkbox"
            name="local_llm"
            checked={formData.local_llm}
            onChange={handleChange}
            style={checkboxStyle}
          />
          Use Local LLM for JD Generation
        </label>
      </div>

      <button
        type="submit"
        style={isHovered ? buttonHoverStyle : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Submit
      </button>
    </form>
  );
}

export default JobForm;
