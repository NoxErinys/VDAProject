var chart = new CanvasJS.Chart("hotels", {
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
        y: -15.649368249539492
    },
    {
        x: new Date(2012, 12, 0),
        y: -6.815766836445803
    },
    {
        x: new Date(2013, 4, 0),
        y: 11.3710978600608
    },
    {
        x: new Date(2013, 8, 0),
        y: 13.81759360509379
    },
    {
        x: new Date(2013, 12, 0),
        y: 57.171136983152294
    },
    {
        x: new Date(2014, 4, 0),
        y: 57.86360898941709
    },
    {
        x: new Date(2014, 8, 0),
        y: 102.41453215866474
    },
    {
        x: new Date(2014, 12, 0),
        y: 73.3082341794465
    },
    {
        x: new Date(2015, 4, 0),
        y: 73.47863082584145
    },
    {
        x: new Date(2015, 8, 0),
        y: 59.43263937423431
    },
    {
        x: new Date(2015, 12, 0),
        y: 56.86203423014379
    },
    {
        x: new Date(2016, 4, 0),
        y: 63.84891096814776
    },
    {
        x: new Date(2016, 8, 0),
        y: 67.4131472944505
    },
    {
        x: new Date(2016, 12, 0),
        y: 77.50615257587192
    },
    {
        x: new Date(2017, 4, 0),
        y: 100.46323560947204
    },
    {
        x: new Date(2017, 8, 0),
        y: 107.69073849636996
    },
    {
        x: new Date(2017, 12, 0),
        y: 132.27440207165978
    },
    {
        x: new Date(2018, 4, 0),
        y: 137.01445446092657
    },
    {
        x: new Date(2018, 8, 0),
        y: 139.5037688720169
    },
    {
        x: new Date(2018, 12, 0),
        y: 119.69552990754481
    },
    {
        x: new Date(2019, 4, 0),
        y: 148.35906090267116
    },
    {
        x: new Date(2019, 8, 0),
        y: 138.08343688949935
    },
    {
        x: new Date(2019, 12, 0),
        y: 155.30151241886574
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
        y: 155.30151241886574
    },
    {
        x: new Date(2020, 4, 0),
        y: 118.53905165033476
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
        y: 118.53905165033476
    },
    {
        x: new Date(2020, 8, 0),
        y: 142.12124840738528
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
        y: 142.12124840738528
    },
    {
        x: new Date(2020, 12, 0),
        y: 171.18210975972644
    }
]
        },
        
                ]
            });
            
            chart.render()
            