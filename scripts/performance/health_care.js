var chart = new CanvasJS.Chart("health_care", {
    animationEnabled: true,
    theme: "dark1",
    axisX: {
        title: "Year",
        valueFormatString: "YYYY",
        intervalType: "year",
        interval: 1,
        minimum: new Date(2009, 11, 30),
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
                y: 2.49413178333657
            },
            {
                x: new Date(2012, 0, 0),
                y: 23.30929685662693
            },
            {
                x: new Date(2013, 0, 0),
                y: 81.6183665962092
            },
            {
                x: new Date(2014, 0, 0),
                y: 79.3321761604045
            },
            {
                x: new Date(2015, 0, 0),
                y: 90.12367720797337
            },
            {
                x: new Date(2016, 0, 0),
                y: 79.69513951696534
            },
            {
                x: new Date(2017, 0, 0),
                y: 105.68789427599519
            },
            {
                x: new Date(2018, 0, 0),
                y: 109.44531581072646
            },
            {
                x: new Date(2019, 0, 0),
                y: 127.46920211979199
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
                y: 127.46920211979199
            },
            {
                x: new Date(2020, 0, 0),
                y: 145.10403350179334
            }
        ]
    }]
});

chart.render()
