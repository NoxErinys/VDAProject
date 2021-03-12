var chart = new CanvasJS.Chart("major_pharmaceuticals", {
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
        y: 38.61531994203639
    },
    {
        x: new Date(2012, 12, 0),
        y: 23.74733633244354
    },
    {
        x: new Date(2013, 4, 0),
        y: 147.49871540697387
    },
    {
        x: new Date(2013, 8, 0),
        y: 127.51490824570448
    },
    {
        x: new Date(2013, 12, 0),
        y: 207.6975547413075
    },
    {
        x: new Date(2014, 4, 0),
        y: 169.6615974059986
    },
    {
        x: new Date(2014, 8, 0),
        y: 171.8713420389003
    },
    {
        x: new Date(2014, 12, 0),
        y: 139.57086770042702
    },
    {
        x: new Date(2015, 4, 0),
        y: 129.58245532207613
    },
    {
        x: new Date(2015, 8, 0),
        y: 202.9031777380523
    },
    {
        x: new Date(2015, 12, 0),
        y: 180.8616174158962
    },
    {
        x: new Date(2016, 4, 0),
        y: 152.85380534068372
    },
    {
        x: new Date(2016, 8, 0),
        y: 100.28218341944643
    },
    {
        x: new Date(2016, 12, 0),
        y: 70.08144197713287
    },
    {
        x: new Date(2017, 4, 0),
        y: 55.43171817254837
    },
    {
        x: new Date(2017, 8, 0),
        y: 36.79107016462379
    },
    {
        x: new Date(2017, 12, 0),
        y: 51.75692650601826
    },
    {
        x: new Date(2018, 4, 0),
        y: 29.80755930503335
    },
    {
        x: new Date(2018, 8, 0),
        y: 28.338482596459613
    },
    {
        x: new Date(2018, 12, 0),
        y: -2.3304734820867026
    },
    {
        x: new Date(2019, 4, 0),
        y: 7.6838365120994325
    },
    {
        x: new Date(2019, 8, 0),
        y: -15.684545192345055
    },
    {
        x: new Date(2019, 12, 0),
        y: -0.4534619685061472
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
        y: -0.4534619685061472
    },
    {
        x: new Date(2020, 4, 0),
        y: -8.811008137962816
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
        y: -8.811008137962816
    },
    {
        x: new Date(2020, 8, 0),
        y: 7.232735349193078
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
        y: 7.232735349193078
    },
    {
        x: new Date(2020, 12, 0),
        y: 28.156914940139828
    }
]
        },
        
                ]
            });
            
            chart.render()
            