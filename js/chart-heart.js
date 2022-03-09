// Area Chart Example
var ctx = document.getElementById("HeartChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["05AM", "06AM", "07AM", "08AM", "09AM", "10AM", "11AM", "12PM", "13PM", "14PM", "15PM", "16PM", "17PM"],
    datasets: [{
      label: "Batimentos por Minuto (BPM)",
      lineTension: .1,
      backgroundColor: "rgba(50,205,50,0.2)",
      borderColor: "rgba(50,205,50,1)",
      pointRadius: 8,
      pointBackgroundColor: "rgba(50,205,50,1)",
      pointBorderColor: "rgba(50,205,50,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(50,205,50,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [50, 100, 80, 60, 70, 75, 73, 72, 130, 78, 77, 76, 75],
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
          max: 200,
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