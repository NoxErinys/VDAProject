
        am4core.useTheme(am4themes_animated);
        var chart = am4core.create("interest", am4charts.RadarChart);
        
        chart.data = [
    {
        "sector": "Transportation",
        "interest_2019": 0.03128378378378378,
        "interest_2020": 0.0994144144144144
    },
    {
        "sector": "Finance",
        "interest_2019": 0.025441308243727596,
        "interest_2020": 0.04925403225806454
    },
    {
        "sector": "Miscellaneous",
        "interest_2019": 0.0555316091954023,
        "interest_2020": 0.0887212643678161
    },
    {
        "sector": "Public Utilities",
        "interest_2019": 0.04424603174603175,
        "interest_2020": 0.06073412698412698
    },
    {
        "sector": "Consumer Durables",
        "interest_2019": 0.054776422764227624,
        "interest_2020": 0.07140243902439027
    },
    {
        "sector": "Consumer Non-Durables",
        "interest_2019": 0.058700716845878104,
        "interest_2020": 0.07198028673835126
    },
    {
        "sector": "Technology",
        "interest_2019": 0.06244900932400933,
        "interest_2020": 0.0948149766899767
    },
    {
        "sector": "Consumer Services",
        "interest_2019": 0.04179761904761905,
        "interest_2020": 0.09544791666666666
    },
    {
        "sector": "Health Care",
        "interest_2019": 0.045868758434547886,
        "interest_2020": 0.08416160593792163
    },
    {
        "sector": "Energy",
        "interest_2019": 0.0489859437751004,
        "interest_2020": 0.10396586345381528
    },
    {
        "sector": "Capital Goods",
        "interest_2019": 0.03227390180878553,
        "interest_2020": 0.07694444444444448
    },
    {
        "sector": "Basic Industries",
        "interest_2019": 0.03898674242424241,
        "interest_2020": 0.06414772727272726
    }
];
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "sector";

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
        valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
        valueAxis.numberFormatter.numberFormat = '#,###.%|-#,###.%s|0';
        valueAxis.fontSize = 12;

        chart.legend = new am4charts.Legend();
    
            var series2019 = chart.series.push(new am4charts.RadarSeries());
            series2019.dataFields.valueY = "interest_2019";
            series2019.dataFields.categoryX = "sector";
            series2019.name = "2019 interest";
            series2019.strokeWidth = 3;
        
            var series2020 = chart.series.push(new am4charts.RadarSeries());
            series2020.dataFields.valueY = "interest_2020";
            series2020.dataFields.categoryX = "sector";
            series2020.name = "2020 interest";
            series2020.strokeWidth = 3;
        