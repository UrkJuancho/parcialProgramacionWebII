import React from 'react';

const ConversionButtons = ({ onConvert, onConvertAll }) => {
    return (
        <div className="conversion-buttons">
            <button onClick={() => onConvert('Celsius')}>Convertir a Celsius</button>
            <button onClick={() => onConvert('Fahrenheit')}>Convertir a Fahrenheit</button>
            <button onClick={() => onConvert('Kelvin')}>Convertir a Kelvin</button>
            <button onClick={onConvertAll}>Convertir a Todas las Escalas</button>
        </div>
    );
};

export default ConversionButtons;
