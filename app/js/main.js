ctx = document.getElementById('graph').getContext('2d');

const scatterData = {
    datasets: [{
        label: 'primes',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        data: [],

    },{
        label: 'non-primes',
        backgroundColor: 'rgba(0,128,0,1)',
        data: []
    }]
}

var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: scatterData,
    options: {
        scales: {
            x: {
                position: 'bottom'
            },
            y: {
						type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
						display: true,
						position: 'left'
					},
          y2: {
						type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
						display: true,
						position: 'right',
						reverse: true,
						// grid line settings
						gridLines: {
							drawOnChartArea: false, // only want the grid lines for one axis to show up
						}
          }
        },
        showLines: false,
        elements: {
          line: {
              tension: 0 // disables bezier curves
          }
        }
}});

// scatterChart.data.datasets[0].data

eel.expose(updateDataSet)
function updateDataSet(data,bool){

  if (bool){scatterChart.data.datasets[0].data.push(data)}
  else {scatterChart.data.datasets[1].data.push(data)}

  scatterChart.update()

}

eel.expose(reset)
function reset(){

  scatterChart.data.datasets[0].data = []
  scatterChart.update()

}
