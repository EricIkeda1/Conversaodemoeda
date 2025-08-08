function converterReal() {
  const real = parseFloat(document.getElementById('real').value) || 0;

  const taxas = {
    dolar: 0.20,
    euro: 0.18,
    libra: 0.15,
    iene: 27.5,
    australiano: 0.29,
  };

  document.getElementById('dolar').textContent = (real * taxas.dolar).toFixed(2);
  document.getElementById('euro').textContent = (real * taxas.euro).toFixed(2);
  document.getElementById('libra').textContent = (real * taxas.libra).toFixed(2);
  document.getElementById('iene').textContent = (real * taxas.iene).toFixed(2);
  document.getElementById('australiano').textContent = (real * taxas.australiano).toFixed(2);
}

document.getElementById('real').addEventListener('input', converterReal);

converterReal();
