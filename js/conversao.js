function converterReal() {
  const real = parseFloat(document.getElementById('real').value) || 0;

  const taxaDolar = 0.20;
  const taxaEuro = 0.18;  

  document.getElementById('dolar').textContent = (real * taxaDolar).toFixed(2);
  document.getElementById('euro').textContent = (real * taxaEuro).toFixed(2);
}

document.getElementById('real').addEventListener('input', converterReal);

converterReal();
