// Area Chart Example
var ctx = document.getElementById("WeightChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "Peso em Kg",
      lineTension: 0.7,
      backgroundColor: "rgba(50,205,50,0.2)",
      borderColor: "rgba(50,205,50,1)",
      pointRadius: 8,
      pointBackgroundColor: "rgba(50,205,50,1)",
      pointBorderColor: "rgba(50,205,50,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(50,205,50,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [75, 76, 77, 75, 75, 75, 74, 74, 76, 78, 77, 76, 75],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 40,
          max: 100,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});