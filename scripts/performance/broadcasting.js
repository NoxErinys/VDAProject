var chart = new CanvasJS.Chart("broadcasting", {
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
        y: 2.789626752193115
    },
    {
        x: new Date(2012, 12, 0),
        y: 15.767656022687902
    },
    {
        x: new Date(2013, 4, 0),
        y: 74.18861621258532
    },
    {
        x: new Date(2013, 8, 0),
        y: 85.90559141854439
    },
    {
        x: new Date(2013, 12, 0),
        y: 114.97305380746147
    },
    {
        x: new Date(2014, 4, 0),
        y: 101.4489167860487
    },
    {
        x: new Date(2014, 8, 0),
        y: 118.27513836788722
    },
    {
        x: new Date(2014, 12, 0),
        y: 120.91075373117327
    },
    {
        x: new Date(2015, 4, 0),
        y: 127.4181345886746
    },
    {
        x: new Date(2015, 8, 0),
        y: 114.39389355160273
    },
    {
        x: new Date(2015, 12, 0),
        y: 123.08993650957129
    },
    {
        x: new Date(2016, 4, 0),
        y: 154.07327244477665
    },
    {
        x: new Date(2016, 8, 0),
        y: 155.62488459498542
    },
    {
        x: new Date(2016, 12, 0),
        y: 168.46822573530324
    },
    {
        x: new Date(2017, 4, 0),
        y: 181.1851518919332
    },
    {
        x: new Date(2017, 8, 0),
        y: 177.10898795931604
    },
    {
        x: new Date(2017, 12, 0),
        y: 168.44620086621103
    },
    {
        x: new Date(2018, 4, 0),
        y: 199.68550240321443
    },
    {
        x: new Date(2018, 8, 0),
        y: 218.99188310379566
    },
    {
        x: new Date(2018, 12, 0),
        y: 197.78119920393345
    },
    {
        x: new Date(2019, 4, 0),
        y: 236.22491846537372
    },
    {
        x: new Date(2019, 8, 0),
        y: 229.80626726854354
    },
    {
        x: new Date(2019, 12, 0),
        y: 253.5489134083238
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
        y: 253.5489134083238
    },
    {
        x: new Date(2020, 4, 0),
        y: 222.85827903007265
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
        y: 222.85827903007265
    },
    {
        x: new Date(2020, 8, 0),
        y: 257.1607019162652
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
        y: 257.1607019162652
    },
    {
        x: new Date(2020, 12, 0),
        y: 272.723566844995
    }
]
        },
        
                ]
            });
            
            chart.render()
            