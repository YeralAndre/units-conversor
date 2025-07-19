import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  convertLength,
  convertTemperature,
  convertTime,
  convertWeight,
} from "../lib/conversors";

export default function ConversorCard({
  title,
  Icon,
  units,
  mode,
}: {
  title: string;
  Icon: React.ReactNode;
  units: {
    visual: string;
    id: string;
  }[];
  mode: string;
}) {
  console.log(units);
  const [selectedFromUnit, setSelectedFromUnit] = useState<string>(
    units[0].id
  );
  const [selectedToUnit, setSelectedToUnit] = useState<string>(
    units[1]?.id || units[0].id
  );
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // Resetear el estado cuando cambien las unidades (cambio de categoría)
  useEffect(() => {
    setSelectedFromUnit(units[0].id);
    setSelectedToUnit(units[1]?.id || units[0].id);
    setFromValue("");
    setToValue("");
  }, [units]);

  console.log(selectedFromUnit, selectedToUnit, fromValue, toValue);

  // Helper function para obtener el visual de una unidad por su id
  const getUnitVisual = (unitId: string): string => {
    const unit = units.find(u => u.id === unitId);
    return unit ? unit.visual : unitId;
  };

  // Función para realizar la conversión
  const performConversion = (
    value: string,
    fromUnit: string,
    toUnit: string
  ) => {
    if (!value || value === "" || parseFloat(value) === 0) {
      setToValue("");
      return;
    }

    const numValue = parseFloat(value);
    let result = 0;

    switch (mode) {
      case "temperature":
        result = convertTemperature(numValue, fromUnit, toUnit);
        console.log(
          `Converting Temperature: ${numValue} ${getUnitVisual(fromUnit)} to ${getUnitVisual(toUnit)} = ${result}`
        );
        break;
      case "length":
        result = convertLength(numValue, fromUnit, toUnit);
        console.log(
          `Converting Length: ${numValue} ${getUnitVisual(fromUnit)} to ${getUnitVisual(toUnit)} = ${result}`
        );
        break;
      case "weight":
        result = convertWeight(numValue, fromUnit, toUnit);
        console.log(
          `Converting Weight: ${numValue} ${getUnitVisual(fromUnit)} to ${getUnitVisual(toUnit)} = ${result}`
        );
        break;
      case "time":
        result = convertTime(numValue, fromUnit, toUnit);
        console.log(
          `Converting Time: ${numValue} ${getUnitVisual(fromUnit)} to ${getUnitVisual(toUnit)} = ${result}`
        );
        break;
      default:
        result = numValue;
    }

    setToValue(result.toString());
  };

  // useEffect para reconvertir cuando cambien las unidades
  useEffect(() => {
    if (fromValue && fromValue !== "") {
      performConversion(fromValue, selectedFromUnit, selectedToUnit);
    }
  }, [selectedFromUnit, selectedToUnit, mode]);

  const handleSwitchUnits = () => {
    // Intercambiar las unidades
    const tempFromUnit = selectedFromUnit;
    const tempToUnit = selectedToUnit;
    const tempFromValue = fromValue;
    const tempToValue = toValue;

    setSelectedFromUnit(tempToUnit);
    setSelectedToUnit(tempFromUnit);
    setFromValue(tempToValue);
    setToValue(tempFromValue);

    console.log(`Switched: ${getUnitVisual(tempToUnit)} -> ${getUnitVisual(tempFromUnit)}`);

    // Reconvertir con las unidades intercambiadas si hay un valor
    if (tempToValue && tempToValue !== "") {
      performConversion(tempToValue, tempToUnit, tempFromUnit);
    }
  };

  const handleFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFromValue(value);
    performConversion(value, selectedFromUnit, selectedToUnit);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newUnit = event.target.value;
    setSelectedFromUnit(newUnit);
    // La conversión se ejecutará automáticamente por el useEffect
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = event.target.value;
    setSelectedToUnit(newUnit);
    // La conversión se ejecutará automáticamente por el useEffect
  };
  return (
    <section className="card-section">
      <div className="card-header">
        {Icon}
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-content">
        <div className="card-content-from">
          <h3>Desde</h3>
          <div className="input-select-row">
            <input
              type="number"
              id="from"
              placeholder="Ingresa el valor"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            <div className="select-container">
              <select
                id="from-unit"
                value={selectedFromUnit}
                onChange={handleFromUnitChange}
              >
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.visual}
                  </option>
                ))}
              </select>
              <ChevronDown className="select-icon" />
            </div>
          </div>
        </div>
        <div className="card-content-switch">
          <ArrowLeftRight
            className="card-switch-icon"
            onClick={handleSwitchUnits}
          />
        </div>
        <div className="card-content-to">
          <h3>Hasta</h3>
          <div className="input-select-row">
            <input
              type="number"
              id="to"
              placeholder="Resultado"
              disabled
              value={toValue}
            />
            <div className="select-container">
              <select
                id="to-unit"
                value={selectedToUnit}
                onChange={handleToUnitChange}
              >
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.visual}
                  </option>
                ))}
              </select>
              <ChevronDown className="select-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
