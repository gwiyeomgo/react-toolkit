import React, { useState } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: any) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict({ celsius }: { celsius: number }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

type Props = {
  temperature: string;
  scale: 'f' | 'c';
  onTemperatureChange: any;
};
function TemperatureInput({ temperature, scale, onTemperatureChange }: Props) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
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

  const handleCelsiusChange = (temperature: string) => {
    setScale('c');
    setTemperature(temperature);
  };

  const handleFahrenheitChange = (temperature: string) => {
    setScale('f');
    setTemperature(temperature);
  };

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
