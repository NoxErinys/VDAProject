var chart = new CanvasJS.Chart("computer_manufacturing", {
                animationEnabled: true,
                theme: "light2",
                axisX:{      
                    title: "Year",
                    valueFormatString: "YYYY",
                    intervalType: "year",
                    interval: 1,
                    minimum: new Date(2012,11,30),
                    stripLines:[
                        {                
                            startValue: new Date(2020,0,1),
                            endValue: new Date(2021,0,1),                
                            color:"rgba(0, 0, 0, 0.1)",
                            label: "COVID-19",
                            labelFontSize: 10,
                        }
                    ]
                },
                axisY: {
                    title: "Price change in percentage",
                    suffix: "%",
                },
                data: [{        
                    type: "line",
                    markerType: "none",
                    dataPoints: [
    {
        x: new Date(2012, 4, 0),
        y: 0
    },
    {
        x: new Date(2012, 8, 0),
        y: -7.023463926990331
    },
    {
        x: new Date(2012, 12, 0),
        y: -11.372208562659083
    },
    {
        x: new Date(2013, 4, 0),
        y: -5.619174422623672
    },
    {
        x: new Date(2013, 8, 0),
        y: -10.107184965789727
    },
    {
        x: new Date(2013, 12, 0),
        y: -2.7319286541644345
    },
    {
        x: new Date(2014, 4, 0),
        y: 3.6507700277113457
    },
    {
        x: new Date(2014, 8, 0),
        y: 6.777579321835063
    },
    {
        x: new Date(2014, 12, 0),
        y: 2.374010649063379
    },
    {
        x: new Date(2015, 4, 0),
        y: 5.038551049849772
    },
    {
        x: new Date(2015, 8, 0),
        y: -6.087243536256949
    },
    {
        x: new Date(2015, 12, 0),
        y: -13.487301312222272
    },
    {
        x: new Date(2016, 4, 0),
        y: -9.084688387360373
    },
    {
        x: new Date(2016, 8, 0),
        y: 8.217427384315272
    },
    {
        x: new Date(2016, 12, 0),
        y: 15.127027222316286
    },
    {
        x: new Date(2017, 4, 0),
        y: 20.469792001941457
    },
    {
        x: new Date(2017, 8, 0),
        y: 21.740883009279614
    },
    {
        x: new Date(2017, 12, 0),
        y: 24.281338121046744
    },
    {
        x: new Date(2018, 4, 0),
        y: 21.222883152772482
    },
    {
        x: new Date(2018, 8, 0),
        y: 40.67747210138427
    },
    {
        x: new Date(2018, 12, 0),
        y: 20.839159979255484
    },
    {
        x: new Date(2019, 4, 0),
        y: 48.032681996720456
    },
    {
        x: new Date(2019, 8, 0),
        y: 39.82200229342429
    },
    {
        x: new Date(2019, 12, 0),
        y: 50.292788843320665
    }
]
                },
                {
            type: "line",
            lineColor: "#FF0000",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2019, 12, 0),
        y: 50.292788843320665
    },
    {
        x: new Date(2020, 4, 0),
        y: 42.195504484809334
    }
]
        },
        {
            type: "line",
            lineColor: "#00FF00",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2020, 4, 0),
        y: 42.195504484809334
    },
    {
        x: new Date(2020, 8, 0),
        y: 63.983031493507255
    }
]
        },
        {
            type: "line",
            lineColor: "#00FF00",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2020, 8, 0),
        y: 63.983031493507255
    },
    {
        x: new Date(2020, 12, 0),
        y: 81.32219235004858
    }
]
        },
        
                ]
            });
            
            chart.render()
            