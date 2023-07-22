      //STEP 2 - Chart Data
      const chartData = [
        {
          "seriesname": "Employer: K 73,500",
          "data": [
              {
                  "value": "20"
              },
              {
                  "value": "25"
              },
              {
                  "value": "30"
              },
              {
                  "value": "35"
              },
              {
                  "value": "40"
              },
              {
                  "value": "45"
              },
              {
                  "value": "50"
              },
              {
                  "value": "55"
              },
              {
                  "value": "60"
              },
              {
                  "value": "65"
              },
              {
                  "value": "70"
              },
              {
                  "value": "75"
              },
              {
                  "value": "80"
              },
          ]
      },
      {
          "seriesname": "Employee: K 52,500",
          "data": [
            {
              "value": "30"
          },
          {
              "value": "35"
          },
          {
              "value": "40"
          },
          {
              "value": "45"
          },
          {
              "value": "50"
          },
          {
              "value": "55"
          },
          {
              "value": "60"
          },
          {
              "value": "65"
          },
          {
              "value": "70"
          },
          {
              "value": "75"
          },
          {
              "value": "80"
          },
          {
              "value": "85"
          },
          {
              "value": "90"
          },
          ]
      },
      {
        "seriesname": "Total Interest: K 244,313",
        "data": [
          {
            "value": "40"
        },
        {
            "value": "45"
        },
        {
            "value": "50"
        },
        {
            "value": "55"
        },
        {
            "value": "60"
        },
        {
            "value": "65"
        },
        {
            "value": "70"
        },
        {
            "value": "75"
        },
        {
            "value": "80"
        },
        {
            "value": "85"
        },
        {
            "value": "90"
        },
        {
            "value": "102"
        },
        {
            "value": "104"
        },
        ]
    }
  ]

    //STEP 3 - Chart Configurations
    const columnChartConfig = {
    type: 'stackedcolumn2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            // "xAxisName": "Country",
            // "yAxisName": "Reserves (MMbbl)",
            "numberPrefix": "$",
            "legendPosition": 'top',
            "theme": "fusion",
            "paletteColors": "#0800A3, #4935FF, #85AFFF",
  
            },
            "categories": [
              {
                  "category": [
                      {
                          "label": "20"
                      },
                      {
                          "label": ""
                      },
                      {
                          "label": "25"
                      },
                      {
                        "label": ""
                    },
                      {
                          "label": "30"
                      },
                      {
                        "label": ""
                    },
                      {
                          "label": "35"
                      },
                      {
                        "label": ""
                    },
                      {
                          "label": "40"
                      },
                      {
                        "label": ""
                    },
                      {
                          "label": "60"
                      },
                      {
                        "label": ""
                    },
                      {
                          "label": "65"
                      },
                  ]
              }
          ],
        // Chart Data
        "dataset": chartData
        }
    };
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(columnChartConfig);
    fusioncharts.render();
    });
