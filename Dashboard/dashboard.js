let chart;

function gerarDadosParaGrafico(real) {
  const dias = [];
  const hoje = new Date();
  for (let i = 6; i >= 0; i--) {
    const dia = new Date(hoje);
    dia.setDate(hoje.getDate() - i);
    dias.push(dia.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
  }

  function gerarSerie(base) {
    return dias.map(() => (real * base * (0.9 + Math.random() * 0.2)).toFixed(4));
  }

  return {
    dias,
    taxas: {
      USD: gerarSerie(0.20),
      EUR: gerarSerie(0.18),
      GBP: gerarSerie(0.15),
      JPY: gerarSerie(26),
      AUD: gerarSerie(0.30)
    }
  };
}

function criarGrafico(real = 1) {
  const { dias, taxas } = gerarDadosParaGrafico(real);

  const ctx = document.getElementById('taxasChart').getContext('2d');

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dias,
      datasets: [
        {
          label: 'USD',
          data: taxas.USD,
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          fill: true,
          tension: 0.3,
        },
        {
          label: 'EUR',
          data: taxas.EUR,
          borderColor: '#6b46c1',
          backgroundColor: 'rgba(107, 70, 193, 0.2)',
          fill: true,
          tension: 0.3,
        },
        {
          label: 'GBP',
          data: taxas.GBP,
          borderColor: '#d69e2e',
          backgroundColor: 'rgba(214, 158, 46, 0.2)',
          fill: true,
          tension: 0.3,
        },
        {
          label: 'JPY',
          data: taxas.JPY,
          borderColor: '#dd6b20',
          backgroundColor: 'rgba(221, 107, 32, 0.2)',
          fill: true,
          tension: 0.3,
        },
        {
          label: 'AUD',
          data: taxas.AUD,
          borderColor: '#2f855a',
          backgroundColor: 'rgba(47, 133, 90, 0.2)',
          fill: true,
          tension: 0.3,
        },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: {
          display: true,
          text: 'Simulação da Variação da Taxa de Câmbio (últimos 7 dias)'
        }
      },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const inputReal = document.getElementById('real');

  criarGrafico(parseFloat(inputReal.value) || 1);

  inputReal.addEventListener('input', () => {
    const valor = parseFloat(inputReal.value) || 1;
    criarGrafico(valor);
  });
});
