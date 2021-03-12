var chart = new CanvasJS.Chart("technology", {
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
                y: 5.5020435129110155
            },
            {
                x: new Date(2012, 0, 0),
                y: 11.098667840392906
            },
            {
                x: new Date(2013, 0, 0),
                y: 59.97996131009994
            },
            {
                x: new Date(2014, 0, 0),
                y: 63.22475535532773
            },
            {
                x: new Date(2015, 0, 0),
                y: 92.44285327539846
            },
            {
                x: new Date(2016, 0, 0),
                y: 99.29757986971143
            },
            {
                x: new Date(2017, 0, 0),
                y: 137.92529344620306
            },
            {
                x: new Date(2018, 0, 0),
                y: 135.91626647518126
            },
            {
                x: new Date(2019, 0, 0),
                y: 173.70961201424555
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
                y: 173.70961201424555
            },
            {
                x: new Date(2020, 0, 0),
                y: 213.5895533658754
            }
        ]
    }]
});

chart.render()
