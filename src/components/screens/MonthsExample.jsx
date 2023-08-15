import React, { useState } from 'react';
import '../../styles/App.scss';

const months = [
  { name: 'January', value: false },
  { name: 'February', value: false },
  { name: 'March', value: false },
  { name: 'April', value: false },
  { name: 'May', value: false },
  { name: 'June', value: false },
  { name: 'July', value: false },
  { name: 'August', value: false },
  { name: 'September', value: false },
  { name: 'October', value: false },
  { name: 'November', value: false },
  { name: 'December', value: false },
];

const MonthsExample = () => {
  const [monthsData, setMonthsData] = useState(months);

  const handleMonthClick = (index) => {
    const updatedMonthsData = [...monthsData];
    updatedMonthsData[index].value = !updatedMonthsData[index].value;
    setMonthsData(updatedMonthsData);
  };

  const getTotalValue = () => {
    const trueMonths = monthsData.filter((month) => month.value === true);
    return trueMonths.length * 10;
  };

  return (
    <div className="App">
      <h1>Monthly Values</h1>
      <div className="month-buttons">
        {monthsData.map((month, index) => (
          <button
            key={index}
            onClick={() => handleMonthClick(index)}
            className={month.value ? 'active' : ''}
          >
            {month.name}
          </button>
        ))}
      </div>
      <div className="totals">
        <h2>Total Values</h2>
        {monthsData.map((month, index) => (
          <p key={index}>
            {month.name}: {month.value ? '10' : '0'}
          </p>
        ))}
        <p>Total: {getTotalValue()}</p>
      </div>
    </div>
  );
};

export default MonthsExample;
