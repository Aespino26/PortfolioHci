const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Sample Data',
    data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 69, 90],
    backgroundColor: getRandomColorArray(12), // Random background color
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
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

// Function to generate an array of random background colors
function getRandomColorArray(length) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
    colors.push(randomColor);
  }
  return colors;
}
