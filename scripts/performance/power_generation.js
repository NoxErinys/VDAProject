var chart = new CanvasJS.Chart("power_generation", {
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
        y: -0.2728023669149877
    },
    {
        x: new Date(2012, 12, 0),
        y: 0.15837555742834297
    },
    {
        x: new Date(2013, 4, 0),
        y: 29.53064240155763
    },
    {
        x: new Date(2013, 8, 0),
        y: 17.902603726004457
    },
    {
        x: new Date(2013, 12, 0),
        y: 19.555981660120082
    },
    {
        x: new Date(2014, 4, 0),
        y: 31.874332687740733
    },
    {
        x: new Date(2014, 8, 0),
        y: 32.146756851730046
    },
    {
        x: new Date(2014, 12, 0),
        y: 42.87851852406567
    },
    {
        x: new Date(2015, 4, 0),
        y: 38.50397130305967
    },
    {
        x: new Date(2015, 8, 0),
        y: 36.477546303694496
    },
    {
        x: new Date(2015, 12, 0),
        y: 41.611393937006355
    },
    {
        x: new Date(2016, 4, 0),
        y: 57.06478590419289
    },
    {
        x: new Date(2016, 8, 0),
        y: 59.33460874424739
    },
    {
        x: new Date(2016, 12, 0),
        y: 58.33734269045574
    },
    {
        x: new Date(2017, 4, 0),
        y: 66.96751204627603
    },
    {
        x: new Date(2017, 8, 0),
        y: 73.09087586581008
    },
    {
        x: new Date(2017, 12, 0),
        y: 69.2684434931696
    },
    {
        x: new Date(2018, 4, 0),
        y: 70.80364153293442
    },
    {
        x: new Date(2018, 8, 0),
        y: 72.86880470522688
    },
    {
        x: new Date(2018, 12, 0),
        y: 73.80341799583424
    },
    {
        x: new Date(2019, 4, 0),
        y: 86.42425930374732
    },
    {
        x: new Date(2019, 8, 0),
        y: 92.62131780252683
    },
    {
        x: new Date(2019, 12, 0),
        y: 91.67744961082316
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
        y: 91.67744961082316
    },
    {
        x: new Date(2020, 4, 0),
        y: 87.57767776299292
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
        y: 87.57767776299292
    },
    {
        x: new Date(2020, 8, 0),
        y: 96.66955177175906
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
        y: 96.66955177175906
    },
    {
        x: new Date(2020, 12, 0),
        y: 104.18027130304819
    }
]
        },
        
                ]
            });
            
            chart.render()
            