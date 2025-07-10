function Countdown({ dob }) {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = nextBirthday - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="result-card">
      <h3>Next Birthday In:</h3>
      <p>{daysLeft} days 🎉</p>
    </div>
  );
}

export default Countdown;