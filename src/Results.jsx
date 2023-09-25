import "./Results.css";
export default function Results({ currentAge }) {
  return (
    <>
      <div className="results-container">
        <p className="result year">
          <span className="result-number">
            {currentAge.years || currentAge.years == 0
              ? currentAge.years
              : "--"}
          </span>
          years
        </p>
        <p className="result month">
          <span className="result-number">
            {currentAge.months || currentAge.months == 0
              ? currentAge.months
              : "--"}
          </span>
          months
        </p>
        <p className="result day">
          <span className="result-number">
            {currentAge.days || currentAge.days == 0 ? currentAge.days : "--"}
          </span>
          days
        </p>
      </div>
    </>
  );
}
