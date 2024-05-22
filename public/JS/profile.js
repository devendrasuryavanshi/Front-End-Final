// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Define base colors for each activity
  const baseColors = {
    'Post': '#9147FF',
    'Comment': '#FF9147',
    'Like': '#47FF91',
    'Share': '#4791FF',
    'Follow': '#FF4791',
  };
  
  const activities = ['Post', 'Comment', 'Like', 'Share', 'Follow'];
  const labels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`);
  const data = labels.map(() => ({
    Post: getRandomInt(1, 5),
    Comment: getRandomInt(1, 5),
    Like: getRandomInt(1, 5),
    Share: getRandomInt(1, 5),
    Follow: getRandomInt(1, 5),
  }));
  
  const datasets = activities.map(activity => ({
    label: activity,
    data: data.map(d => d[activity]),
    backgroundColor: baseColors[activity] + '80', // 80% opacity
    borderColor: baseColors[activity],
    borderWidth: 1
  }));
  
  // Initialize the chart
  const ctx = document.getElementById('activityChart').getContext('2d');
  const activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  

document.querySelectorAll('.tab-bar a').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
  
      document.querySelectorAll('.tab-bar a').forEach(item => {
        item.classList.remove('active-tab');
        item.classList.remove('border-blue-600');
      });
      
      event.target.classList.add('active-tab');
      event.target.classList.add('border-blue-600');
  
      const targetId = event.target.getAttribute('href').substring(1);
  
      const targetSection = document.getElementById(targetId);
  
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  

