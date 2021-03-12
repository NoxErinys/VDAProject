
var eraSeperator = 0;

var charts = [];
var toolTip = {
    shared: false,
    content: "{name}: {y}"
};


var firstYearTrendChartData = []
var firstYearTrendChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Stocks Trend First Year After IPO"
    },
    axisX: {
        title: "Days since IPO",
        valueFormatString: "Day 0",
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Percentage",
        valueFormatString: "0%"
    },
    toolTip: toolTip,
    //legend: legend,
    data: firstYearTrendChartData,
    legend: {
        legendMarkerType: "square",
        itemclick: function (e) {
            var legendText = e.dataSeries.legendText;
            if (legendText.includes("Before")) {
                //hide 2019 and below
                if (charts[0].data[0].visible) {
                    for (var i = 0; i < eraSeperator; i++) {
                        charts[0].data[i].set("visible", false, false);
                        charts[1].data[i].set("visible", false, false);
                    }
                } else {
                    //show 2019 and below
                    for (var i = 0; i < eraSeperator; i++) {
                        charts[0].data[i].set("visible", true, false);
                        charts[1].data[i].set("visible", true, false);
                    }
                }

            } else {
                //hide 2020 and above
                if (charts[0].data[eraSeperator].visible) {
                    for (var i = eraSeperator; i < charts[0].data.length; i++) {
                        charts[0].data[i].set("visible", false, false);
                        charts[1].data[i].set("visible", false, false);
                    }
                } else {
                    //show 2020 and above
                    for (var i = eraSeperator; i < charts[0].data.length; i++) {
                        charts[0].data[i].set("visible", true, false);
                        charts[1].data[i].set("visible", true, false);
                    }
                }
            }
            charts[0].render();
            charts[1].render();
        }
    }

}


var firstYearTrendZoomedChartData = []
var firstYearTrendZoomedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Stocks Trend First Year After IPO (Zoomed)"
    },
    axisX: {
        title: "Days since IPO",
        valueFormatString: "Day 0",
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Percentage",
        valueFormatString: "0%",
        maximum: 3
    },
    toolTip: toolTip,
    //legend: legend,
    data: firstYearTrendZoomedChartData,
    legendMarkerType: "square",
    legend: {
        legendMarkerType: "square",
        itemclick: function (e) {
            var legendText = e.dataSeries.legendText;
            if (legendText.includes("Before")) {
                //hide 2019 and below
                if (charts[0].data[0].visible) {
                    for (var i = 0; i < eraSeperator; i++) {
                        charts[0].data[i].set("visible", false, false);
                        charts[1].data[i].set("visible", false, false);
                    }
                } else {
                    //show 2019 and below
                    for (var i = 0; i < eraSeperator; i++) {
                        charts[0].data[i].set("visible", true, false);
                        charts[1].data[i].set("visible", true, false);
                    }
                }

            } else {
                //hide 2020 and above
                if (charts[0].data[eraSeperator].visible) {
                    for (var i = eraSeperator; i < charts[0].data.length; i++) {
                        charts[0].data[i].set("visible", false, false);
                        charts[1].data[i].set("visible", false, false);
                    }
                } else {
                    //show 2020 and above
                    for (var i = eraSeperator; i < charts[0].data.length; i++) {
                        charts[0].data[i].set("visible", true, false);
                        charts[1].data[i].set("visible", true, false);
                    }
                }
            }
            charts[0].render();
            charts[1].render();
        }
    }
}





var dataArray = [];

var lines = stockStartingTrendDataTable.split(/[\r\n]+/g);
var row = lines[1].split(",");
var stock = row[0];
var ipo = row[1].substring(0, 4);

var chartDataPoints = [];
var value = 1;
var maxValue = Number.MIN_VALUE;

var legendInstalledCount = 0;

var execludedStocks = ["EMP", "ACCD", "AMER", "LX", "BRPAR", "VISL", "XELA"];

for (var i = 1; i < lines.length; i++) {
    var row = lines[i].split(",");
    var percent = parseFloat(row[5]);


    if (row[0] != stock) {
        //push series to chart options                
        var color = "rgba(150, 150, 150, 0.25)";
        if (parseInt(ipo) >= 2020) {
            color = "rgba(255, 165, 0, 0.4)";
        }


        var showInLegend = false;
        var legendText = "";
        if (legendInstalledCount == 0 && parseInt(ipo) < 2020) {
            legendText = "Before 2020";
            showInLegend = true;
            legendInstalledCount++;
        } else if (legendInstalledCount == 1 && parseInt(ipo) >= 2020) {
            eraSeperator = firstYearTrendChartData.length;
            color = "rgba(255, 165, 0, 0.5)";
            legendText = "2020 & After";
            showInLegend = true;
            legendInstalledCount++;
        }



        if (execludedStocks.indexOf(stock) == -1) { //stock not in execluded list

            firstYearTrendChartData.push(
                {
                    type: "line",
                    showInLegend: false,
                    legendText: legendText,
                    name: stock,
                    color: color,
                    markerSize: 0,
                    dataPoints: chartDataPoints,
                    //yValueFormatString: "#%",
                }
            );

            if (maxValue > 2 && parseInt(ipo) >= 2020) {
                color = "rgba(255, 165, 0, 0.15)";
            } else if (maxValue > 2 && parseInt(ipo) < 2020) {
                color = "rgba(150, 150, 150, 0.15)";
            }

            firstYearTrendZoomedChartData.push(
                {
                    type: "line",
                    showInLegend: showInLegend,
                    legendText: legendText,
                    name: stock,
                    color: color,
                    markerSize: 0,
                    dataPoints: chartDataPoints,
                    yValueFormatString: "#%",
                    legendMarkerType: "square"
                }
            );
        }



        stock = row[0];
        ipo = row[1].substring(0, 4);
        value = 1;
        maxValue = Number.MIN_VALUE;
        chartDataPoints = [];

    }

    if (chartDataPoints.length < 200) {
        //if (chartDataPoints.length == 0) percent = 0;
        if (value > maxValue) maxValue = value;
        chartDataPoints.push({ x: chartDataPoints.length, y: value, name: row[0] });
        //chartDataPoints.push({y: value});
        value = value + percent * value;

    }

}



window.onload = function () {

    charts.push(new CanvasJS.Chart("firstYearTrendChart", firstYearTrendChartOptions));
    charts.push(new CanvasJS.Chart("firstYearTrendZoomedChart", firstYearTrendZoomedChartOptions));

    syncCharts(charts, true, true, true); 

    for (var i = 0; i < charts.length; i++) {
        charts[i].render();
    }

}

function syncCharts(charts, syncToolTip, syncCrosshair, syncAxisXRange) {

    if (!this.onToolTipUpdated) {
        this.onToolTipUpdated = function (e) {
            for (var j = 0; j < charts.length; j++) {
                if (charts[j] != e.chart)
                    charts[j].toolTip.showAtX(e.entries[0].xValue, e.entries[0].dataSeriesIndex);
            }
        }
    }

    if (!this.onToolTipHidden) {
        this.onToolTipHidden = function (e) {
            for (var j = 0; j < charts.length; j++) {
                if (charts[j] != e.chart)
                    charts[j].toolTip.hide();
            }
        }
    }

    if (!this.onCrosshairUpdated) {
        this.onCrosshairUpdated = function (e) {
            for (var j = 0; j < charts.length; j++) {
                if (charts[j] != e.chart)
                    charts[j].axisX[0].crosshair.showAt(e.value);
            }
        }
    }

    if (!this.onCrosshairHidden) {
        this.onCrosshairHidden = function (e) {
            for (var j = 0; j < charts.length; j++) {
                if (charts[j] != e.chart)
                    charts[j].axisX[0].crosshair.hide();
            }
        }
    }

    if (!this.onRangeChanged) {
        this.onRangeChanged = function (e) {
            for (var j = 0; j < charts.length; j++) {
                if (e.trigger === "reset") {
                    charts[j].options.axisX.viewportMinimum = charts[j].options.axisX.viewportMaximum = null;
                    charts[j].options.axisY.viewportMinimum = charts[j].options.axisY.viewportMaximum = null;
                    charts[j].render();
                } else if (charts[j] !== e.chart) {
                    charts[j].options.axisX.viewportMinimum = e.axisX[0].viewportMinimum;
                    charts[j].options.axisX.viewportMaximum = e.axisX[0].viewportMaximum;
                    charts[j].render();
                }
            }
        }
    }

    for (var i = 0; i < charts.length; i++) {

        //Sync ToolTip
        if (syncToolTip) {
            if (!charts[i].options.toolTip)
                charts[i].options.toolTip = {};

            charts[i].options.toolTip.updated = this.onToolTipUpdated;
            charts[i].options.toolTip.hidden = this.onToolTipHidden;
        }

        //Sync Crosshair
        if (syncCrosshair) {
            if (!charts[i].options.axisX)
                charts[i].options.axisX = { crosshair: { enabled: true } };

            charts[i].options.axisX.crosshair.updated = this.onCrosshairUpdated;
            charts[i].options.axisX.crosshair.hidden = this.onCrosshairHidden;
        }

        //Sync Zoom / Pan
        if (syncAxisXRange) {
            charts[i].options.zoomEnabled = true;
            charts[i].options.rangeChanged = this.onRangeChanged;
        }
    }
}