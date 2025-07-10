function AgeForm({ onDateChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      onDateChange(new Date(value));
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <label htmlFor="dob-input" style={{ fontWeight: 500, fontSize: '1.1rem' }}>
        Enter your Date of Birth:
      </label>
      <br />
      <input
        id="dob-input"
        type="date"
        onChange={handleChange}
        max={today}
        style={{ marginTop: '0.5rem' }}
      />
    </div>
  );
}

export default AgeForm;