var chart = new CanvasJS.Chart("computer_software", {
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
        y: -2.1771125577492256
    },
    {
        x: new Date(2012, 12, 0),
        y: 9.09049042134022
    },
    {
        x: new Date(2013, 4, 0),
        y: 11.677137616553082
    },
    {
        x: new Date(2013, 8, 0),
        y: 11.079472100592653
    },
    {
        x: new Date(2013, 12, 0),
        y: 30.648398899155083
    },
    {
        x: new Date(2014, 4, 0),
        y: 23.88818614896887
    },
    {
        x: new Date(2014, 8, 0),
        y: 29.122053779890905
    },
    {
        x: new Date(2014, 12, 0),
        y: 24.201054365120953
    },
    {
        x: new Date(2015, 4, 0),
        y: 28.160792287921794
    },
    {
        x: new Date(2015, 8, 0),
        y: 26.319504992431092
    },
    {
        x: new Date(2015, 12, 0),
        y: 35.803489526767876
    },
    {
        x: new Date(2016, 4, 0),
        y: 30.195844108713672
    },
    {
        x: new Date(2016, 8, 0),
        y: 43.73066166816659
    },
    {
        x: new Date(2016, 12, 0),
        y: 42.40059816946007
    },
    {
        x: new Date(2017, 4, 0),
        y: 59.34877952121926
    },
    {
        x: new Date(2017, 8, 0),
        y: 68.09199599454047
    },
    {
        x: new Date(2017, 12, 0),
        y: 77.21760910662427
    },
    {
        x: new Date(2018, 4, 0),
        y: 87.09056406359738
    },
    {
        x: new Date(2018, 8, 0),
        y: 112.43314490651468
    },
    {
        x: new Date(2018, 12, 0),
        y: 94.75375976781405
    },
    {
        x: new Date(2019, 4, 0),
        y: 126.17383395433836
    },
    {
        x: new Date(2019, 8, 0),
        y: 127.73946432573806
    },
    {
        x: new Date(2019, 12, 0),
        y: 132.885586617974
    }
]
                },
                {
            type: "line",
            lineColor: "#00FF00",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2019, 12, 0),
        y: 132.885586617974
    },
    {
        x: new Date(2020, 4, 0),
        y: 136.89201751841404
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
        y: 136.89201751841404
    },
    {
        x: new Date(2020, 8, 0),
        y: 178.85849102743572
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
        y: 178.85849102743572
    },
    {
        x: new Date(2020, 12, 0),
        y: 199.90647954519824
    }
]
        },
        
                ]
            });
            
            chart.render()
            