async function buscarTaxas() {
  const url = 'https://v6.exchangerate-api.com/v6/a1459d03f0c4b9ac5e309d41/latest/USD';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

async function converterBRL() {
  const real = parseFloat(document.getElementById('real').value) || 0;
  const taxas = await buscarTaxas();
  if (!taxas) return;

  const taxaBRL = taxas.BRL;

  document.getElementById('dolar').textContent = (real / taxaBRL * taxas.USD).toFixed(2);
  document.getElementById('euro').textContent = (real / taxaBRL * taxas.EUR).toFixed(2);
  document.getElementById('libra').textContent = (real / taxaBRL * taxas.GBP).toFixed(2);
  document.getElementById('iene').textContent = (real / taxaBRL * taxas.JPY).toFixed(2);
  document.getElementById('australiano').textContent = (real / taxaBRL * taxas.AUD).toFixed(2);
}

document.getElementById('real').addEventListener('input', converterBRL);

converterBRL();
