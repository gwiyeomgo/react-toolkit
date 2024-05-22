import React, { useState } from 'react';
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return React.createElement('p', null, 'The water would boil.');
  }
  return React.createElement('p', null, 'The water would not boil.');
}
function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return React.createElement(
    'fieldset',
    null,
    React.createElement(
      'legend',
      null,
      'Enter temperature in ',
      scaleNames[scale],
      ':',
    ),
    React.createElement('input', {
      value: temperature,
      onChange: (e) => onTemperatureChange(e.target.value),
    }),
  );
}
//https://ko.legacy.reactjs.org/docs/lifting-state-up.html
//state 끌어올리기 예시
/***
 * state는 렌더링에 그 값을 필요로 하는 컴포넌트에 먼저 추가됩니다. 그러고 나서 다른 컴포넌트도 역시 그 값이 필요하게 되면 그 값을 그들의 가장 가까운 공통 조상으로 끌어올리면 됩니다.

 */
export function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');
  const handleCelsiusChange = (temperature) => {
    setScale('c');
    setTemperature(temperature);
  };
  const handleFahrenheitChange = (temperature) => {
    setScale('f');
    setTemperature(temperature);
  };
  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return React.createElement(
    'div',
    null,
    React.createElement(TemperatureInput, {
      scale: 'c',
      temperature: celsius,
      onTemperatureChange: handleCelsiusChange,
    }),
    React.createElement(TemperatureInput, {
      scale: 'f',
      temperature: fahrenheit,
      onTemperatureChange: handleFahrenheitChange,
    }),
    React.createElement(BoilingVerdict, { celsius: parseFloat(celsius) }),
  );
}
