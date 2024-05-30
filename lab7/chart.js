const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Sample Data',
    data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 69, 90],
    backgroundColor: [], // Empty array to be filled with randomized colors
    borderColor: 'rgba(128,0,0)',
    borderWidth: 2

  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.6)`; // Using alpha value to keep the colors light
}

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  // Randomize background color
  sampleData.datasets[0].backgroundColor = sampleData.labels.map(() => getRandomColor());
  
  currentChart = new Chart(ctx, {
    type: type,
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');

