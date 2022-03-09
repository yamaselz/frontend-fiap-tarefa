// Pie Chart Example
var ctx = document.getElementById("GoalChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Objetivo (%)", "Feito (%)"],
    datasets: [{
      data: [45, 65],
      backgroundColor: ['#007bff', '#32CD32'],
    }],
  },
});