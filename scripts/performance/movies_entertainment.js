var chart = new CanvasJS.Chart("movies_entertainment", {
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
        y: 3.33416296938411
    },
    {
        x: new Date(2012, 12, 0),
        y: -6.570079205896604
    },
    {
        x: new Date(2013, 4, 0),
        y: 26.092882676945862
    },
    {
        x: new Date(2013, 8, 0),
        y: 44.62926666405667
    },
    {
        x: new Date(2013, 12, 0),
        y: 64.82661353915749
    },
    {
        x: new Date(2014, 4, 0),
        y: 48.452684629496105
    },
    {
        x: new Date(2014, 8, 0),
        y: 56.00693768405017
    },
    {
        x: new Date(2014, 12, 0),
        y: 48.2470072004087
    },
    {
        x: new Date(2015, 4, 0),
        y: 63.324167105421125
    },
    {
        x: new Date(2015, 8, 0),
        y: 74.48874584446752
    },
    {
        x: new Date(2015, 12, 0),
        y: 58.89130080176851
    },
    {
        x: new Date(2016, 4, 0),
        y: 57.59961561163446
    },
    {
        x: new Date(2016, 8, 0),
        y: 64.72263656777909
    },
    {
        x: new Date(2016, 12, 0),
        y: 75.14200366937041
    },
    {
        x: new Date(2017, 4, 0),
        y: 79.64158369070228
    },
    {
        x: new Date(2017, 8, 0),
        y: 78.10829061100364
    },
    {
        x: new Date(2017, 12, 0),
        y: 94.52340970159574
    },
    {
        x: new Date(2018, 4, 0),
        y: 118.20016207432676
    },
    {
        x: new Date(2018, 8, 0),
        y: 148.81372053100696
    },
    {
        x: new Date(2018, 12, 0),
        y: 123.84525061307953
    },
    {
        x: new Date(2019, 4, 0),
        y: 149.53431312290053
    },
    {
        x: new Date(2019, 8, 0),
        y: 131.2487757313028
    },
    {
        x: new Date(2019, 12, 0),
        y: 136.9265023039565
    }
]
                },
                {
            type: "line",
            lineColor: "#00FF00",
            markerType: "none",
            dataPoints: [
    {
        x: new Date(2019, 12, 0),
        y: 136.9265023039565
    },
    {
        x: new Date(2020, 4, 0),
        y: 138.49372029994714
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
        y: 138.49372029994714
    },
    {
        x: new Date(2020, 8, 0),
        y: 167.14022322581957
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
        y: 167.14022322581957
    },
    {
        x: new Date(2020, 12, 0),
        y: 171.12002516874873
    }
]
        },
        
                ]
            });
            
            chart.render()
            