var chart = new CanvasJS.Chart("computer_software_prepackaged_software", {
                animationEnabled: true,
                theme: "dark1",
                axisX:{      
                    title: "Year",
                    valueFormatString: "YYYY",
                    intervalType: "year",
                    interval: 1,
                    minimum: new Date(2009,11,30),
                    titleFontColor: "#aaa"
                },
                axisY: {
                    title: "Change in percentage",
                    suffix: "%",
                    titleFontColor: "#aaa"
                },
                data: [{        
                    type: "line",
                    markerType: "none",
                    dataPoints: [
    {
        x: new Date(2010, 0, 0),
        y: 0
    },
    {
        x: new Date(2011, 0, 0),
        y: 20.199692929479966
    },
    {
        x: new Date(2012, 0, 0),
        y: -16.120251840921547
    },
    {
        x: new Date(2013, 0, 0),
        y: 49.79391752122954
    },
    {
        x: new Date(2014, 0, 0),
        y: 56.26897900843702
    },
    {
        x: new Date(2015, 0, 0),
        y: 43.1069790555002
    },
    {
        x: new Date(2016, 0, 0),
        y: 47.62006681308525
    },
    {
        x: new Date(2017, 0, 0),
        y: 57.33077537225774
    },
    {
        x: new Date(2018, 0, 0),
        y: 96.78119251840249
    },
    {
        x: new Date(2019, 0, 0),
        y: 119.1999130888874
    },
    {
        x: new Date(2020, 0, 0),
        y: 162.02543713089148
    }
]
                },
                {        
                    type: "line",
                    lineColor: "#00e34f",
                    markerType: "none",
                    dataPoints: [
    {
        x: new Date(2020, 0, 0),
        y: 162.02543713089148
    },
    {
        x: new Date(2021, 0, 0),
        y: 252.34878030373514
    }
]
                }]
            });
            
            chart.render()
            