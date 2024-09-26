document.getElementById('farm-data-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    
    const crop = document.getElementById('crop').value;
    const yieldData = document.getElementById('yield').value;
    const water = document.getElementById('water').value;
    const fertilizer = document.getElementById('fertilizer').value;
  
    
    const dataOutput = document.getElementById('data-output');
    dataOutput.innerHTML = `
      <p><strong>Crop Type:</strong> ${crop}</p>
      <p><strong>Crop Yield:</strong> ${yieldData} tons</p>
      <p><strong>Water Usage:</strong> ${water} liters</p>
      <p><strong>Fertilizer Usage:</strong> ${fertilizer} kg</p>
    `;
  
    
    const ctx = document.getElementById('data-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Crop Yield (tons)', 'Water Usage (liters)', 'Fertilizer Usage (kg)'],
        datasets: [{
          label: crop,
          data: [yieldData, water, fertilizer],
          backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
        }]
      }
    });
  });
  