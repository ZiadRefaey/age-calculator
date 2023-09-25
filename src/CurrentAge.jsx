import { useState, useRef, useEffect } from "react";
import "./CurrentAge.css";
import IconArrow from "./assets/icon-arrow.svg";
export default function CurrentAge({ currentAge, setCurrentAge }) {
  const inputRef = {
    day: useRef(null),
    month: useRef(null),
    year: useRef(null),
  };

  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const [errorDays, setErrorDays] = useState(false);
  const [errorMonths, setErrorMonths] = useState(false);
  const [errorYears, setErrorYears] = useState(false);
  function handleParentClick(inputName) {
    if (inputRef[inputName].current) {
      inputRef[inputName].current.focus();
    }
  }
  useEffect(
    function () {
      if ((days > 0 && days < 32) || days == "") {
        setErrorDays(false);
      } else {
        setErrorDays(true);
      }
    },
    [days]
  );
  useEffect(
    function () {
      if ((months > 0 && months < 13) || months == "") {
        setErrorMonths(false);
      } else {
        setErrorMonths(true);
      }
    },
    [months]
  );
  useEffect(
    function () {
      if ((years > 1900 && years < 2024) || years == "") {
        setErrorYears(false);
      } else {
        setErrorYears(true);
      }
    },
    [years]
  );
  useEffect(function () {
    setErrorDays(false);
    setErrorMonths(false);
    setErrorYears(false);
  }, []);

  function SubmitHandler(e) {
    e.preventDefault();
    if (errorDays || errorMonths || errorYears || !days || !months || !years) {
      setCurrentAge({ years: "--", months: "--", days: "--" });
      return;
    }
    const today = new Date();
    const birthday = new Date(years, Number(months), days);

    let ageYears = today.getFullYear() - birthday.getFullYear();
    let ageMonths = today.getMonth() - birthday.getMonth() + 1;
    let ageDays =
      today.getDate().toLocaleString("en-us") -
      birthday.getDate().toLocaleString("en-us");

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
    setCurrentAge({ years: ageYears, months: ageMonths, days: ageDays });
  }
  return (
    <>
      <form action="post" className="age-form" onSubmit={SubmitHandler}>
        <div className="form-inputs-container">
          <div className="input-group" onClick={() => handleParentClick("day")}>
            <label
              htmlFor="day"
              className="day"
              style={errorDays ? { color: "var(--Red)" } : { color: "#716f6f" }}
            >
              Day
            </label>
            <div className="input-container">
              <input
                type="number"
                className="day"
                id="day"
                value={days}
                placeholder="DD"
                onChange={(e) => {
                  {
                    setDays(e.target.value);
                  }
                }}
                ref={inputRef.day}
              />
            </div>
            <p
              className="error"
              style={errorDays ? { display: "block" } : { display: "none" }}
            >
              Must be a valid day
            </p>
          </div>

          <div
            className="input-group"
            onClick={() => handleParentClick("month")}
          >
            <label
              htmlFor="month"
              className="month"
              style={
                errorMonths ? { color: "var(--Red)" } : { color: "#716f6f" }
              }
            >
              month
            </label>
            <div className="input-container">
              <input
                placeholder="MM"
                type="number"
                className="month"
                id="month"
                value={months}
                onChange={(e) => {
                  setMonths(e.target.value);
                  if (months > 0 && months < 13) {
                    setErrorMonths(false);
                  } else {
                    setErrorMonths(true);
                  }
                }}
                ref={inputRef.month}
              />
            </div>
            <p
              className="error"
              style={errorMonths ? { display: "block" } : { display: "none" }}
            >
              Must be a valid month
            </p>
          </div>

          <div
            className="input-group"
            onClick={() => handleParentClick("year")}
          >
            <label
              htmlFor="year"
              className="year"
              style={
                errorYears ? { color: "var(--Red)" } : { color: "#716f6f" }
              }
            >
              year
            </label>
            <div className="input-container">
              <input
                placeholder="YY"
                type="number"
                className="year"
                id="year"
                value={years}
                onChange={(e) => {
                  setYears(e.target.value);
                  if (years > 1900 && years < 2024) {
                    setErrorYears(false);
                  } else {
                    setErrorYears(true);
                  }
                }}
                ref={inputRef.year}
              />
            </div>
            <p
              className="error"
              style={errorYears ? { display: "block" } : { display: "none" }}
            >
              Must be a valid year
            </p>
          </div>
        </div>
        <div className="seperating-line">
          <button className="submit-btn">
            <div className="img-container">
              <img src={IconArrow} alt="arrow icon" />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
