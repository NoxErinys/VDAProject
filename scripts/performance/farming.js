var chart = new CanvasJS.Chart("farming", {
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
        y: 4.50066182854431
    },
    {
        x: new Date(2012, 12, 0),
        y: 21.812920647221063
    },
    {
        x: new Date(2013, 4, 0),
        y: 30.88842376748468
    },
    {
        x: new Date(2013, 8, 0),
        y: 28.208967644761785
    },
    {
        x: new Date(2013, 12, 0),
        y: 34.175779629963756
    },
    {
        x: new Date(2014, 4, 0),
        y: 24.905366283337102
    },
    {
        x: new Date(2014, 8, 0),
        y: 41.277161399844786
    },
    {
        x: new Date(2014, 12, 0),
        y: 78.02820574297483
    },
    {
        x: new Date(2015, 4, 0),
        y: 66.41969866561682
    },
    {
        x: new Date(2015, 8, 0),
        y: 62.874230506904254
    },
    {
        x: new Date(2015, 12, 0),
        y: 50.85139123164758
    },
    {
        x: new Date(2016, 4, 0),
        y: 54.24948186653789
    },
    {
        x: new Date(2016, 8, 0),
        y: 61.6220112935122
    },
    {
        x: new Date(2016, 12, 0),
        y: 79.43306029389358
    },
    {
        x: new Date(2017, 4, 0),
        y: 86.16338667961173
    },
    {
        x: new Date(2017, 8, 0),
        y: 86.19410242609217
    },
    {
        x: new Date(2017, 12, 0),
        y: 88.45573965770396
    },
    {
        x: new Date(2018, 4, 0),
        y: 79.78246856218377
    },
    {
        x: new Date(2018, 8, 0),
        y: 73.65650463394708
    },
    {
        x: new Date(2018, 12, 0),
        y: 66.72449710174168
    },
    {
        x: new Date(2019, 4, 0),
        y: 92.18130529194245
    },
    {
        x: new Date(2019, 8, 0),
        y: 84.5155092141859
    },
    {
        x: new Date(2019, 12, 0),
        y: 88.15003347092967
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
        y: 88.15003347092967
    },
    {
        x: new Date(2020, 4, 0),
        y: 60.74490758781566
    }
]
        },
        {
            type: "line",
            lineColor: "#FF0000",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2020, 4, 0),
        y: 60.74490758781566
    },
    {
        x: new Date(2020, 8, 0),
        y: 52.490780048126396
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
        y: 52.490780048126396
    },
    {
        x: new Date(2020, 12, 0),
        y: 65.55333031065105
    }
]
        },
        
                ]
            });
            
            chart.render()
            