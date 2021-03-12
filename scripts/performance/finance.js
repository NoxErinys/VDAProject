var chart = new CanvasJS.Chart("finance", {
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
        y: -13.186852890093476
    },
    {
        x: new Date(2012, 0, 0),
        y: 8.865909808177562
    },
    {
        x: new Date(2013, 0, 0),
        y: 43.53382827579155
    },
    {
        x: new Date(2014, 0, 0),
        y: 50.68720993209851
    },
    {
        x: new Date(2015, 0, 0),
        y: 47.21386931199601
    },
    {
        x: new Date(2016, 0, 0),
        y: 64.2225561835488
    },
    {
        x: new Date(2017, 0, 0),
        y: 88.02881935492711
    },
    {
        x: new Date(2018, 0, 0),
        y: 73.87588243074852
    },
    {
        x: new Date(2019, 0, 0),
        y: 103.25099705724126
    }
]
                },
                {        
                    type: "line",
                    lineColor: "#2F7700",
                    markerType: "none",
                    dataPoints: [
    {
        x: new Date(2019, 0, 0),
        y: 103.25099705724126
    },
    {
        x: new Date(2020, 0, 0),
        y: 107.72285877435857
    }
]
                }]
            });
            
            chart.render()
            