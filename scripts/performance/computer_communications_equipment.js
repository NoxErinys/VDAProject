var chart = new CanvasJS.Chart("computer_communications_equipment", {
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
        y: -17.646097787182725
    },
    {
        x: new Date(2012, 12, 0),
        y: -18.062349279779184
    },
    {
        x: new Date(2013, 4, 0),
        y: -22.854349021305737
    },
    {
        x: new Date(2013, 8, 0),
        y: -7.4777761599689825
    },
    {
        x: new Date(2013, 12, 0),
        y: 2.0579001341819065
    },
    {
        x: new Date(2014, 4, 0),
        y: 17.0703058351789
    },
    {
        x: new Date(2014, 8, 0),
        y: 41.05808052768651
    },
    {
        x: new Date(2014, 12, 0),
        y: 34.25433310717601
    },
    {
        x: new Date(2015, 4, 0),
        y: 35.00118307531986
    },
    {
        x: new Date(2015, 8, 0),
        y: 34.32164656666292
    },
    {
        x: new Date(2015, 12, 0),
        y: 29.868215861180303
    },
    {
        x: new Date(2016, 4, 0),
        y: 26.03721208245645
    },
    {
        x: new Date(2016, 8, 0),
        y: 46.767599351252684
    },
    {
        x: new Date(2016, 12, 0),
        y: 58.45215924161778
    },
    {
        x: new Date(2017, 4, 0),
        y: 69.67483170227445
    },
    {
        x: new Date(2017, 8, 0),
        y: 76.224140495295
    },
    {
        x: new Date(2017, 12, 0),
        y: 94.50974876274698
    },
    {
        x: new Date(2018, 4, 0),
        y: 100.25779819971704
    },
    {
        x: new Date(2018, 8, 0),
        y: 111.90965175881455
    },
    {
        x: new Date(2018, 12, 0),
        y: 90.9757146430175
    },
    {
        x: new Date(2019, 4, 0),
        y: 113.62164101911094
    },
    {
        x: new Date(2019, 8, 0),
        y: 92.743927838142
    },
    {
        x: new Date(2019, 12, 0),
        y: 92.44742480502617
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
        y: 92.44742480502617
    },
    {
        x: new Date(2020, 4, 0),
        y: 92.38398622292
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
        y: 92.38398622292
    },
    {
        x: new Date(2020, 8, 0),
        y: 95.72274201338034
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
        y: 95.72274201338034
    },
    {
        x: new Date(2020, 12, 0),
        y: 120.43526619440269
    }
]
        },
        
                ]
            });
            
            chart.render()
            