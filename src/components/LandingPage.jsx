import React from 'react';
import JobForm from './jobForm.jsx';

/**
 * LandingPage wraps a simple hero section and the JobForm. The hero introduces
 * the product and provides a call‑to‑action button that scrolls to the form.
 * The layout uses inline CSS to avoid external dependencies but can easily
 * be adapted to use a framework like Tailwind or your own stylesheet.
 */
const LandingPage = () => {
  // Define styling as JavaScript objects so they can be reused throughout
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
      color: '#fff',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      maxWidth: '680px',
      margin: '0 auto 2rem auto',
      lineHeight: 1.5,
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#fff',
      color: '#3b82f6',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontSize: '1rem',
      fontWeight: 600,
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.2s, color 0.2s',
    },
    ctaButtonHover: {
      backgroundColor: '#e0e7ff',
      color: '#1e40af',
    },
    section: {
      padding: '2rem 1rem',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      maxWidth: '960px',
      margin: '0 auto',
      marginTop: '2rem',
    },
    featureCard: {
      backgroundColor: '#ffffff',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      textAlign: 'left',
    },
    featureTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#1e3a8a',
    },
    featureText: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#374151',
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to HR Agentic</h1>
        <p style={styles.heroSubtitle}>
          Simplify your recruitment process with AI‑powered job description
          generation. Provide a few details and let our intelligent assistant
          craft professional, inclusive and accurate JDs in minutes.
        </p>
        {/* The anchor links to the JobForm section via the id on the form container. */}
        <a href="#job-form" style={styles.ctaButton} onMouseOver={(e) => {
          Object.assign(e.currentTarget.style, styles.ctaButtonHover);
        }} onMouseOut={(e) => {
          Object.assign(e.currentTarget.style, styles.ctaButton);
        }}>
          Get Started
        </a>
      </header>

      {/* Feature Highlights */}
      <section style={styles.section}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1f2937' }}>
            Why choose our assistant?
          </h2>
          <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.95rem' }}>
            We combine cutting‑edge language models with domain expertise to deliver
            accurate and compelling job descriptions every time.
          </p>
        </div>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>AI‑Driven Content</h3>
            <p style={styles.featureText}>
              Leveraging advanced language models to craft descriptions that are
              tailored to your organisation and role requirements.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Customisable Fields</h3>
            <p style={styles.featureText}>
              Include or omit sections as needed. The form supports all the common
              fields HR teams require, with optional links to your company site and
              culture page.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Local LLM Support</h3>
            <p style={styles.featureText}>
              For sensitive information or offline scenarios you can opt to use a
              local large language model instead of the hosted API.
            </p>
          </div>
        </div>
      </section>

      {/* Job Form Section */}
      <section style={styles.section}>
        {/* The JobForm component includes its own styling and handles state internally. */}
        <JobForm />
      </section>
    </div>
  );
};

export default LandingPage;
