import { calculateAge } from '../utils/calculateAge';

function AgeResult({ dob }) {
  const { years, months, days } = calculateAge(dob);

  return (
    <div className="result-card">
      <h2>Your Age:</h2>
      <p>{years} Years, {months} Months, {days} Days</p>
    </div>
  );
}

export default AgeResult;