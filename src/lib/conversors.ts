export function convertTemperature(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  if (!fromUnit || !toUnit) {
    throw new Error(`Invalid units: ${fromUnit} or ${toUnit}`);
  }
  
  // Si las unidades son iguales, no hay conversión
  if (fromUnit === toUnit) {
    return value;
  }
  
  console.log(`Converting Temperature: ${value} ${fromUnit} to ${toUnit}`);
  
  // Convertir primero a Celsius como base
  let celsiusValue = value;
  
  if (fromUnit === "fahrenheit") {
    celsiusValue = ((value - 32) * 5) / 9;
  } else if (fromUnit === "kelvin") {
    celsiusValue = value - 273.15;
  }
  // Si ya es celsius, no necesita conversión
  
  // Convertir de Celsius a la unidad destino
  if (toUnit === "celsius") {
    return celsiusValue;
  } else if (toUnit === "fahrenheit") {
    return (celsiusValue * 9) / 5 + 32;
  } else if (toUnit === "kelvin") {
    return celsiusValue + 273.15;
  }
  
  return value;
}

export function convertLength(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  // Si las unidades son iguales, no hay conversión
  if (fromUnit === toUnit) {
    return value;
  }
  
  console.log(`Converting Length: ${value} ${fromUnit} to ${toUnit}`);
  
  // Factores de conversión a metros (unidad base)
  const conversionRates: { [key: string]: number } = {
    millimeters: 0.001,
    centimeters: 0.01,
    meters: 1,
    kilometers: 1000,
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.34,
  };

  if (fromUnit in conversionRates && toUnit in conversionRates) {
    const valueInMeters = value * conversionRates[fromUnit];
    return valueInMeters / conversionRates[toUnit];
  }
  
  return value;
}

export function convertWeight(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  // Si las unidades son iguales, no hay conversión
  if (fromUnit === toUnit) {
    return value;
  }
  
  console.log(`Converting Weight: ${value} ${fromUnit} to ${toUnit}`);
  
  // Factores de conversión a gramos (unidad base)
  const conversionRates: { [key: string]: number } = {
    milligrams: 0.001,
    grams: 1,
    kilograms: 1000,
    ounces: 28.3495,
    pounds: 453.592,
    tons: 1000000,
  };

  if (fromUnit in conversionRates && toUnit in conversionRates) {
    const valueInGrams = value * conversionRates[fromUnit];
    return valueInGrams / conversionRates[toUnit];
  }
  
  return value;
}

export function convertTime(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  // Si las unidades son iguales, no hay conversión
  if (fromUnit === toUnit) {
    return value;
  }
  
  console.log(`Converting Time: ${value} ${fromUnit} to ${toUnit}`);
  
  // Factores de conversión a segundos (unidad base)
  const conversionRates: { [key: string]: number } = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2629800, // Aproximadamente 30.44 días
    years: 31557600, // Aproximadamente 365.25 días
  };

  if (fromUnit in conversionRates && toUnit in conversionRates) {
    const valueInSeconds = value * conversionRates[fromUnit];
    return valueInSeconds / conversionRates[toUnit];
  }
  
  return value;
}

export default {
  convertTemperature,
  convertLength,
  convertWeight,
  convertTime,
};