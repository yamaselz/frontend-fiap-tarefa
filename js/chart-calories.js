// Bar Chart Example
var ctx = document.getElementById("CaloriesChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["08/Mar", "09/Mar", "10/Mar", "11/Mar", "12/Mar", "13/Mar"],
    datasets: [{
      label: "kCal",
      backgroundColor: "rgba(50,205,50,1)",
      borderColor: "rgba(50,205,50,1)",
      data: [4500, 2500, 2000, 5000, 3900, 4000],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'day'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10000,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
