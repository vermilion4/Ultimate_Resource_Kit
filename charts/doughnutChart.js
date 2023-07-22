// Charts data
const common = {
  showLabel: false,
  showValue: false
};

function createDoughnutData (label1, value1, label2, value2)
{
  return [
    {
      "label": label1,
      "value": value1,
      "color": "#D4F7EE",
      ...common
    },
    {
      "label": label2,
      "value": value2,
      "color": "#22d6aa",
      ...common
    }
  ];
}

const doughnutChartData = createDoughnutData("Average", "22", "", "78");

const secondDoughnutChartData = createDoughnutData("Top", "5", "", "95");

const thirdDoughnutChartData = createDoughnutData("Me", "41", "", "59");

// Charts Configuration function
function chartConfig (centerLabel, data, location)
{
  const doughnutChartConfig = {
    type: 'doughnut2d',
    renderAt: `${ location }`,
    width: '10%',
    height: '250',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      "chart": {
        "numberSuffix": "%",
        "showLegend": false,
        "theme": "fusion",
        "defaultCenterLabel": `${ centerLabel }`,
        "centerLabel": "$value",
        "paletteColors": "#22d6aa",
        "pieRadius": 40,
        "doughnutRadius": 30,
      },
      // Chart Data
      "data": data
    }

  };
  return doughnutChartConfig;
}




// Render charts
FusionCharts.ready(function ()
{
  var chart1 = new FusionCharts(chartConfig('78%', doughnutChartData, 'doughnut-container'));
  var chart2 = new FusionCharts(chartConfig('95%', secondDoughnutChartData, 'doughnut-container-2'));
  var chart3 = new FusionCharts(chartConfig('59%', thirdDoughnutChartData, 'doughnut-container-3'));
  chart1.render();
  chart2.render();
  chart3.render();


});
