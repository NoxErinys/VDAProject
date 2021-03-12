var chart = new CanvasJS.Chart("energy", {
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
        y: -8.787250166312617
    },
    {
        x: new Date(2012, 0, 0),
        y: 1.1172875818101886
    },
    {
        x: new Date(2013, 0, 0),
        y: 11.591619662138115
    },
    {
        x: new Date(2014, 0, 0),
        y: -0.4873822099944931
    },
    {
        x: new Date(2015, 0, 0),
        y: -24.870775817958986
    },
    {
        x: new Date(2016, 0, 0),
        y: -0.8035780072669496
    },
    {
        x: new Date(2017, 0, 0),
        y: 2.3634328153454476
    },
    {
        x: new Date(2018, 0, 0),
        y: -11.265478267335212
    },
    {
        x: new Date(2019, 0, 0),
        y: -0.5570335929129158
    }
]
                },
                {        
                    type: "line",
                    lineColor: "#A00500",
                    markerType: "none",
                    dataPoints: [
    {
        x: new Date(2019, 0, 0),
        y: -0.5570335929129158
    },
    {
        x: new Date(2020, 0, 0),
        y: -23.438796964676115
    }
]
                }]
            });
            
            chart.render()
            