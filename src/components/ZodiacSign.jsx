function getZodiacSign(month, day) {
  const zodiac = [
    ["Capricorn", 20], ["Aquarius", 19], ["Pisces", 20],
    ["Aries", 20], ["Taurus", 21], ["Gemini", 21],
    ["Cancer", 23], ["Leo", 23], ["Virgo", 23],
    ["Libra", 23], ["Scorpio", 22], ["Sagittarius", 22], ["Capricorn", 31]
  ];

  // month is 0-based, so adjust accordingly
  return day < zodiac[month][1] ? zodiac[month === 0 ? 12 : month - 1][0] : zodiac[month][0];
}

function ZodiacSign({ dob }) {
  const sign = getZodiacSign(dob.getMonth(), dob.getDate());

  return (
    <div className="result-card">
      <h3>🔮 Your Zodiac Sign:</h3>
      <p>{sign}</p>
    </div>
  );
}

export default ZodiacSign;