import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleOperation = (e) => {
    e.preventDefault();
    const operation = e.target.value;

    switch (operation) {
      case 'add':
        setValue(prevValue => prevValue + 2);
        break;
      case 'sub':
        setValue(prevValue => prevValue - 2);
        break;
      case 'div':
        setValue(prevValue => prevValue / 2);
        break;
      case 'multi':
        setValue(prevValue => prevValue * 2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-container">
      <div className="counter-wrapper">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="value">
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="input-field"
            />
          </div>
          <div className="button-container">
            <button
              value="add"
              onClick={handleOperation}
              className="button"
            >
              Add (+2)
            </button>
            <button
              value="sub"
              onClick={handleOperation}
              className="button"
            >
              Subtract (-2)
            </button>
            <button
              value="multi"
              onClick={handleOperation}
              className="button"
            >
              Multiply (×2)
            </button>
            <button
              value="div"
              onClick={handleOperation}
              className="button"
            >
              Divide (÷2)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;