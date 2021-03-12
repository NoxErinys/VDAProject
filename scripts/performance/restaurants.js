var chart = new CanvasJS.Chart("restaurants", {
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
        y: -10.095663918401456
    },
    {
        x: new Date(2012, 12, 0),
        y: -5.5651283440178645
    },
    {
        x: new Date(2013, 4, 0),
        y: 10.12396336327447
    },
    {
        x: new Date(2013, 8, 0),
        y: 22.94330048859827
    },
    {
        x: new Date(2013, 12, 0),
        y: 44.280747056443815
    },
    {
        x: new Date(2014, 4, 0),
        y: 36.78292930875227
    },
    {
        x: new Date(2014, 8, 0),
        y: 45.232255648231
    },
    {
        x: new Date(2014, 12, 0),
        y: 61.05215607701359
    },
    {
        x: new Date(2015, 4, 0),
        y: 59.364802452155374
    },
    {
        x: new Date(2015, 8, 0),
        y: 62.57120644507805
    },
    {
        x: new Date(2015, 12, 0),
        y: 48.84913743149288
    },
    {
        x: new Date(2016, 4, 0),
        y: 49.4749850098526
    },
    {
        x: new Date(2016, 8, 0),
        y: 55.00604479631211
    },
    {
        x: new Date(2016, 12, 0),
        y: 60.70102029307044
    },
    {
        x: new Date(2017, 4, 0),
        y: 64.00643149275986
    },
    {
        x: new Date(2017, 8, 0),
        y: 48.43006174529316
    },
    {
        x: new Date(2017, 12, 0),
        y: 60.56349610956133
    },
    {
        x: new Date(2018, 4, 0),
        y: 67.22518761153108
    },
    {
        x: new Date(2018, 8, 0),
        y: 66.70399752664525
    },
    {
        x: new Date(2018, 12, 0),
        y: 52.63820455953551
    },
    {
        x: new Date(2019, 4, 0),
        y: 74.95730778743454
    },
    {
        x: new Date(2019, 8, 0),
        y: 81.7126592473292
    },
    {
        x: new Date(2019, 12, 0),
        y: 79.76495829542942
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
        y: 79.76495829542942
    },
    {
        x: new Date(2020, 4, 0),
        y: 65.10816660847678
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
        y: 65.10816660847678
    },
    {
        x: new Date(2020, 8, 0),
        y: 98.57390474430733
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
        y: 98.57390474430733
    },
    {
        x: new Date(2020, 12, 0),
        y: 108.1469083919626
    }
]
        },
        
                ]
            });
            
            chart.render()
            