import React from 'react';

const TemperatureInput = ({ temperature, scale, onTemperatureChange, onScaleChange }) => {
    return (
        <div className="temperature-input">
            <input
                type="number"
                value={temperature}
                onChange={(e) => onTemperatureChange(e.target.value)}
                placeholder="Digita la temperatura a convertir"
            />
            <select value={scale} onChange={(e) => onScaleChange(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
        </div>
    );
};

export default TemperatureInput;
