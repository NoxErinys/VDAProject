var chart = new CanvasJS.Chart("computer_software_data_processing", {
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
        y: 8.003396213830499
    },
    {
        x: new Date(2012, 0, 0),
        y: 23.452988783075355
    },
    {
        x: new Date(2013, 0, 0),
        y: 31.950558222894813
    },
    {
        x: new Date(2014, 0, 0),
        y: 103.20127804826913
    },
    {
        x: new Date(2015, 0, 0),
        y: 109.29863096264694
    },
    {
        x: new Date(2016, 0, 0),
        y: 132.73316542555204
    },
    {
        x: new Date(2017, 0, 0),
        y: 133.0192439326265
    },
    {
        x: new Date(2018, 0, 0),
        y: 170.78700806966737
    },
    {
        x: new Date(2019, 0, 0),
        y: 170.37740353195744
    },
    {
        x: new Date(2020, 0, 0),
        y: 206.11076067454854
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
        y: 206.11076067454854
    },
    {
        x: new Date(2021, 0, 0),
        y: 261.97722763731997
    }
]
                }]
            });
            
            chart.render()
            