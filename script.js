function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado').innerText = resultado;
  }

  function restar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2;
    document.getElementById('resultado').innerText = resultado;
  }

  function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = resultado;
  }

  function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 / num2;
    document.getElementById('resultado').innerText = resultado;
  }

  function potencia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = Math.pow(num1, num2);
    document.getElementById('resultado').innerText = resultado;
  }

  function raiz() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const resultado = Math.sqrt(num1);
    document.getElementById('resultado').innerText = resultado;
  }

  

  function convertir() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let conversionResult = 0;

    switch (conversionType) {
      case 'masa':
        // Conversiones de masa
        conversionResult = {
          'Gramo': inputValue,
          'Kilogramo': inputValue / 1000,
          'Libra': inputValue * 0.00220462,
          'Onza': inputValue * 0.03527396,
        };
        break;
      case 'volumen':
        // Conversiones de volumen
        conversionResult = {
          'Litro': inputValue,
          'Mililitro': inputValue * 1000,
          'Metro cúbico': inputValue / 1000,
          'Galón': inputValue * 0.264172,
        };
        break;
      case 'longitud':
        // Conversiones de longitud
        conversionResult = {
          'Metro': inputValue,
          'Kilómetro': inputValue / 1000,
          'Pulgada': inputValue * 39.3701,
          'Pie': inputValue * 3.28084,
        };
        break;
      case 'densidad':
        // Conversiones de densidad
        conversionResult = {
          'Kilogramo/metro cúbico': inputValue,
          'Gramo/cm cúbico': inputValue * 0.001,
          'Libra/galón': inputValue * 0.0083454,
        };
        break;
      case 'informatica':
        // Conversiones de unidades informáticas
        conversionResult = {
          'Byte': inputValue,
          'Kilobyte': inputValue / 1024,
          'Megabyte': inputValue / (1024 * 1024),
          'Gigabyte': inputValue / (1024 * 1024 * 1024),
        };
        break;
      default:
        conversionResult = 'Error: Tipo de conversión no válido';
    }

    // Construir el mensaje con los resultados de la conversión
    let resultMessage = '';
    for (const unit in conversionResult) {
      if (conversionResult.hasOwnProperty(unit)) {
        const value = conversionResult[unit];
        resultMessage += `${value} ${unit}<br>`;
      }
    }

    document.getElementById('conversionResult').innerHTML = resultMessage;
  }

  
