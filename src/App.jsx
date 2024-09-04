
import React, { useState } from 'react';
import TemperatureInput from "./components/TemperatureInput.jsx";
import ConversionButtons from "./components/ConversionButtons.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";
import ResetButton from "./components/ResetButton.jsx";

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');
  const [result, setResult] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConvert = (targetScale) => {
    if (!temperature) {
      setResult('No has ingresado temperatura a convertir');
      return;
    }

    const tempValue = parseFloat(temperature);
    if (isNaN(tempValue)) {
      setResult('La temperatura ingresada no es válida');
      return;
    }

    let tempInCelsius;

    switch (scale) {
      case 'Celsius':
        tempInCelsius = tempValue;
        break;
      case 'Fahrenheit':
        tempInCelsius = (tempValue - 32) * (5 / 9);
        break;
      case 'Kelvin':
        tempInCelsius = tempValue - 273.15;
        break;
      default:
        setResult('Escala de temperatura no válida');
        return;
    }

    let convertedTemp;
    switch (targetScale) {
      case 'Celsius':
        convertedTemp = tempInCelsius;
        break;
      case 'Fahrenheit':
        convertedTemp = (tempInCelsius * 9 / 5) + 32;
        break;
      case 'Kelvin':
        convertedTemp = tempInCelsius + 273.15;
        break;
      default:
        setResult('Escala de destino no válida');
        return;
    }

    setResult(`${temperature} ${scale} = ${convertedTemp.toFixed(2)} ${targetScale}`);
  };

  const handleConvertAll = () => {
    if (!temperature) {
      setModalContent('No has ingresado temperatura a convertir');
      setIsModalOpen(true);
      return;
    }

    const tempValue = parseFloat(temperature);
    if (isNaN(tempValue)) {
      setModalContent('La temperatura ingresada no es válida');
      setIsModalOpen(true);
      return;
    }

    let tempInCelsius;

    switch (scale) {
      case 'Celsius':
        tempInCelsius = tempValue;
        break;
      case 'Fahrenheit':
        tempInCelsius = (tempValue - 32) * (5 / 9);
        break;
      case 'Kelvin':
        tempInCelsius = tempValue - 273.15;
        break;
      default:
        setModalContent('Escala de temperatura no válida');
        setIsModalOpen(true);
        return;
    }

    const conversions = {
      Celsius: tempInCelsius,
      Fahrenheit: (tempInCelsius * 9 / 5) + 32,
      Kelvin: tempInCelsius + 273.15,
    };

    let resultString = `${temperature} ${scale}:\n`;
    for (const [scale, temp] of Object.entries(conversions)) {
      resultString += `${temperature} ${scale} = ${temp.toFixed(2)} ${scale}\n`;
    }

    setModalContent(resultString);
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setTemperature('');
    setScale('Celsius');
    setResult('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>Conversor de Temperatura</h1>
      <TemperatureInput
        temperature={temperature}
        scale={scale}
        onTemperatureChange={setTemperature}
        onScaleChange={setScale}
      />
      <ConversionButtons
        onConvert={handleConvert}
        onConvertAll={handleConvertAll}
      />
      <ResultDisplay result={result} />
      <ResetButton onReset={handleReset} />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <pre>{modalContent}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
