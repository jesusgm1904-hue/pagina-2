// Gráfica de crecimiento e impacto ambiental
const ctx = document.getElementById('imaChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Estudiantes de Manufactura Avanzada',
        data: [100, 150, 230, 310, 420, 500],
        backgroundColor: 'rgba(255,102,0,0.7)'
      },
      {
        label: 'Eficiencia Ambiental (%)',
        data: [60, 65, 70, 76, 83, 90],
        backgroundColor: 'rgba(0,51,102,0.7)'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    },
    scales: {
      x: { ticks: { color: 'white' }, grid: { color: '#444' } },
      y: { ticks: { color: 'white' }, grid: { color: '#444' } }
    }
  }
});
