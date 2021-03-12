var chart = new CanvasJS.Chart("air_freight", {
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
        y: -6.6386932921801645
    },
    {
        x: new Date(2012, 12, 0),
        y: 0.30296203787834486
    },
    {
        x: new Date(2013, 4, 0),
        y: 17.601378387703846
    },
    {
        x: new Date(2013, 8, 0),
        y: 18.17648809987297
    },
    {
        x: new Date(2013, 12, 0),
        y: 36.38832671461941
    },
    {
        x: new Date(2014, 4, 0),
        y: 36.44442778811802
    },
    {
        x: new Date(2014, 8, 0),
        y: 39.690870787347805
    },
    {
        x: new Date(2014, 12, 0),
        y: 42.68855281746832
    },
    {
        x: new Date(2015, 4, 0),
        y: 43.57228937112595
    },
    {
        x: new Date(2015, 8, 0),
        y: 36.18874838935638
    },
    {
        x: new Date(2015, 12, 0),
        y: 37.36879747792479
    },
    {
        x: new Date(2016, 4, 0),
        y: 38.34302267015663
    },
    {
        x: new Date(2016, 8, 0),
        y: 36.28004825113865
    },
    {
        x: new Date(2016, 12, 0),
        y: 47.55516139487969
    },
    {
        x: new Date(2017, 4, 0),
        y: 56.96519388570479
    },
    {
        x: new Date(2017, 8, 0),
        y: 61.73080485816203
    },
    {
        x: new Date(2017, 12, 0),
        y: 71.77399765723463
    },
    {
        x: new Date(2018, 4, 0),
        y: 72.21044780838919
    },
    {
        x: new Date(2018, 8, 0),
        y: 74.23372182674318
    },
    {
        x: new Date(2018, 12, 0),
        y: 56.959208531001806
    },
    {
        x: new Date(2019, 4, 0),
        y: 74.42400856398082
    },
    {
        x: new Date(2019, 8, 0),
        y: 69.59728978577247
    },
    {
        x: new Date(2019, 12, 0),
        y: 77.26764631748576
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
        y: 77.26764631748576
    },
    {
        x: new Date(2020, 4, 0),
        y: 33.732021461479675
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
        y: 33.732021461479675
    },
    {
        x: new Date(2020, 8, 0),
        y: 59.102991067247316
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
        y: 59.102991067247316
    },
    {
        x: new Date(2020, 12, 0),
        y: 89.97023510824722
    }
]
        },
        
                ]
            });
            
            chart.render()
            