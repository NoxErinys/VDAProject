var colorPalette = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']
//var colorPalette = ["#000000", "#FFFF00", "#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059", "#FFDBE5", "#7A4900", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87", "#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80", "#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100", "#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F", "#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09", "#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66", "#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C", "#34362D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81", "#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00", "#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700", "#549E79", "#FFF69F", "#201625", "#72418F", "#BC23FF", "#99ADC0", "#3A2465", "#922329", "#5B4534", "#FDE8DC", "#404E55", "#0089A3", "#CB7E98", "#A4E804", "#324E72", "#6A3A4C"]

var charts = [];
var amCharts = [];
var industryCharts = [];
var toolTip = {
    shared: false
};
var legend = {
    cursor: "pointer",
    itemclick: function (e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
};

var chartGlobal;

var volumeChartData = [];
var percentChartData = [];
var industryVolumeChartData = [];
var industryPercentChartData = [];

var marketCapChartData = [];
var marketCapPercentChartData = [];

var volumeAmChartData = [];
var percentAmChartData = [];
var marketCapAmChartData = [];
var marketCapPercentAmChartData = [];



var marketCapChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Market Cap By Sector"
    },
    axisX: {
        title: "Date",
        stripLines: [
            {
                value: new Date(2019, 11, 31),
                label: "COVID-19",
                labelFontColor: "#a8a8a8",
                labelBackgroundColor: "rgba(10, 10, 10, 0.0)",
                startValue: new Date(2019, 11, 31),
                endValue: new Date(2020, 11, 31),
                color: "rgba(10, 10, 10, 0.05)"
            }
        ],
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Trillion USD"
    },
    toolTip: toolTip,
    legend: legend,
    data: marketCapChartData,
    xValueFormatString: "DD MMM YYYY",
    yValueFormatString: "#.##",
    legendMarkerType: "square"
}

var marketCapPercentChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Market Share By Sector"
    },
    axisX: {
        title: "Date",
        stripLines: [
            {
                value: new Date(2019, 11, 31),
                label: "COVID-19",
                labelFontColor: "#a8a8a8",
                labelBackgroundColor: "rgba(10, 10, 10, 0.0)",
                startValue: new Date(2019, 11, 31),
                endValue: new Date(2020, 11, 31),
                color: "rgba(10, 10, 10, 0.05)"
            }
        ],
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Percentage",
        suffix: " %"
    },
    toolTip: toolTip,
    legend: legend,
    data: marketCapPercentChartData
}

var volumeChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Transaction Volume By Sector"
    },
    axisX: {
        title: "Date",
        stripLines: [
            {
                value: new Date(2019, 11, 31),
                label: "COVID-19",
                labelFontColor: "#a8a8a8",
                labelBackgroundColor: "rgba(10, 10, 10, 0.0)",
                startValue: new Date(2019, 11, 31),
                endValue: new Date(2020, 11, 31),
                color: "rgba(10, 10, 10, 0.05)"
            }
        ],
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Million Transactions"
    },
    toolTip: toolTip,
    legend: legend,
    data: volumeChartData,
    xValueFormatString: "DD MMM YYYY",
    yValueFormatString: "#.##",
    legendMarkerType: "square"
}


var percentChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Transaction Percent By Sector"
    },
    axisX: {
        title: "Date",
        stripLines: [
            {
                value: new Date(2019, 11, 31),
                label: "COVID-19",
                labelFontColor: "#a8a8a8",
                labelBackgroundColor: "rgba(10, 10, 10, 0.0)",
                startValue: new Date(2019, 11, 31),
                endValue: new Date(2020, 11, 31),
                color: "rgba(10, 10, 10, 0.05)"
            }
        ],
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Percentage",
        suffix: " %"
    },
    toolTip: toolTip,
    legend: legend,
    data: percentChartData
}


var lines = sectorDataTable.split(/[\r\n]+/g);
var sector = lines[1].split(",")[0];

var industryVolumeChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: sector + ": Transaction Volume By Industry"
    },
    axisX: {
        title: "Date",
        stripLines: [
            {
                value: new Date(2019, 11, 31),
                label: "COVID-19",
                labelFontColor: "#a8a8a8",
                labelBackgroundColor: "rgba(10, 10, 10, 0.0)",
                startValue: new Date(2019, 11, 31),
                endValue: new Date(2020, 11, 31),
                color: "rgba(10, 10, 10, 0.05)"
            }
        ],
        crosshair: {
            enabled: true
        }
    },
    axisY: {
        title: "Million Transactions"
    },
    toolTip: {
        shared: false
    },
    legend: legend,
    data: industryVolumeChartData,
    xValueFormatString: "DD MMM YYYY",
    yValueFormatString: "#.##",
    legendMarkerType: "square"
}

var industryPercentChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: sector + ": Transaction Percent By Industry"
    },
    axisY: {
        title: "Percentage",
        suffix: " %"
    },
    toolTip: toolTip,
    legend: legend,
    data: industryPercentChartData
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


function loadData() {


    var patternsList = [];
    for (var i = 0; i < 35; i++) {
        var patternTypes = ["RectPattern", "LinePattern"];
        var random = Math.random();
        var type = patternTypes[patternsList.length % patternTypes.length];
        var recSize = Math.round(random * 12) + 1;
        var shapeSize = recSize + Math.round(random * 10);
        var rotation = Math.round(90 * random);
        var gap = random * 5 + 2;

        var pattern = {
            "type": type,
            "rectWidth": recSize,
            "rectHeight": recSize,
            "width": shapeSize,
            "height": shapeSize,
            "fill": colorPalette[i % colorPalette.length],
            "backgroundFill": colorPalette[i % colorPalette.length],
            "backgroundOpacity": 0.3,
            "rotation": rotation,
            "strokeWidth": 0
        }

        if (type == "LinePattern") {
            pattern = {
                "type": type,
                "width": 1000,
                "height": 1000,
                "gap": gap,
                "fill": colorPalette[i % colorPalette.length],
                "backgroundFill": colorPalette[i % colorPalette.length],
                "backgroundOpacity": 0.3,
                "stroke": colorPalette[i % colorPalette.length],
                "rotation": rotation,
                "strokeWidth": 1
            }
        }

        patternsList.push(pattern);
    }



    var lines = sectorDataTable.split(/[\r\n]+/g);

    for (var i = 1; i < lines.length; i++) {

        var row = lines[i].split(",");
        var sector = row[0];

        var volumeChartDataPoints = [];
        var percentChartDataPoints = [];
        var volumeChartAmDataPoints = [];
        var percentChartAmDataPoints = [];

        for (var column = 0; column < row.length / 2 - 1; column++) {
            var volume = parseFloat((parseFloat(row[2 * column + 1]) / 1000000).toFixed(2));
            var percent = parseFloat(parseFloat(row[2 * column + 2]).toFixed(2));
            var date = new Date(2010 + column, 11, 31);
            volumeChartDataPoints.push({ y: volume, x: date, label: sector });
            percentChartDataPoints.push({ y: percent, x: date, label: sector });
            volumeChartAmDataPoints.push({ "volume": volume, "date": date });
            percentChartAmDataPoints.push({ "percent": percent, "date": date });

        }

        volumeChartData.push(
            {
                type: "stackedArea",
                click: sectorClicked,
                //showInLegend: true,
                color: colorPalette[volumeChartData.length % colorPalette.length],
                name: sector,
                dataPoints: volumeChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.##",
                legendMarkerType: "square"


            }
        )



        volumeAmChartData.push({
            "type": "LineSeries",
            "name": sector,
            "stacked": true,
            "tooltipText": "Series: {name}\nValue: {valueY}",
            "stroke": colorPalette[volumeAmChartData.length % colorPalette.length],
            "strokeOpacity": 1,
            "fill": patternsList[volumeAmChartData.length % patternsList.length],
            "fillOpacity": 1,
            "dataFields": {
                "valueY": "volume",
                "dateX": "date"
            },
            "data": volumeChartAmDataPoints
        })

        percentChartData.push(
            {
                type: "stackedArea",
                click: sectorClicked,
                //showInLegend: true,
                color: colorPalette[percentChartData.length % colorPalette.length],
                name: sector,
                dataPoints: percentChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.### %",
                legendMarkerType: "square"
            }
        )

        percentAmChartData.push({
            "type": "LineSeries",
            "name": sector,
            "stacked": true,
            "tooltipText": "Series: {name}\nValue: {valueY}",
            "stroke": colorPalette[percentAmChartData.length % colorPalette.length],
            "strokeOpacity": 1,
            "fill": patternsList[percentAmChartData.length % patternsList.length],
            "fillOpacity": 1,
            "dataFields": {
                "valueY": "percent",
                "dateX": "date"
            },
            "data": percentChartAmDataPoints,
            "events": {
                "hit": function (ev) {
                    console.log("clicked on ", ev.target);
                }
            }
        })

    }


    charts.push(new CanvasJS.Chart("sectorVolumeContainer", volumeChartOptions))
    charts.push(new CanvasJS.Chart("sectorPercentContainer", percentChartOptions))




    am4core.useTheme(am4themes_patterns);

    var sectorVolumeAmChart = am4core.createFromConfig({

        "series": volumeAmChartData,
        "titles": [{
            "text": "Transaction Volume By Sector",
            "fontSize": 25,
            "marginBottom": 0
          }],
        "xAxes": [{
            "type": "DateAxis",
            "title": {
                "text": "Date"
            }
        }],
        "yAxes": [{
            "type": "ValueAxis",
            "title": {
                "text": "Transactions (M)"
            }
        }],
        "cursor": {
            "type": "XYCursor",
            "maxTooltipDistance": 1
        }


    }, "sectorVolumeAmContainer", am4charts.XYChart);

    var sectorPercentAmChart = am4core.createFromConfig({

        "series": percentAmChartData,
        "titles": [{
            "text": "Transaction Percent By Sector",
            "fontSize": 25,
            "marginBottom": 0
          }],
        "xAxes": [{
            "type": "DateAxis",
            "title": {
                "text": "Date"
            }
        }],
        "yAxes": [{
            "type": "ValueAxis",
            "title": {
                "text": "Percent %"
            }
        }],
        "cursor": {
            "type": "XYCursor",
            "maxTooltipDistance": 1
        },


    }, "sectorPercentAmContainer", am4charts.XYChart);

    amCharts.push(sectorVolumeAmChart);
    amCharts.push(sectorPercentAmChart);

    //Load Industries charts

    var industriesInSectorLines = getIndustriesInSector(lines[1].split(",")[0]);

    for (var i = 1; i < industriesInSectorLines.length; i++) {

        var row = industriesInSectorLines[i].split(",");
        var industry = row[1];

        var volumeChartDataPoints = [];
        var percentChartDataPoints = []
        for (var column = 0; column < row.length / 2 - 1; column++) {
            var volume = parseFloat((parseFloat(row[2 * column + 2]) / 1000000).toFixed(2));
            var percent = parseFloat(parseFloat(row[2 * column + 3]).toFixed(2));
            var date = new Date(2010 + column, 11, 31);
            volumeChartDataPoints.push({ y: volume, x: date, label: industry });
            percentChartDataPoints.push({ y: percent, x: date, label: industry });
        }

        industryVolumeChartData.push(
            {
                type: "stackedArea",
                showInLegend: true,
                name: industry,
                dataPoints: volumeChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.##",
                legendMarkerType: "square"


            }
        )

        industryPercentChartData.push(
            {
                type: "stackedArea",
                showInLegend: true,
                name: industry,
                dataPoints: percentChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.### %",
                legendMarkerType: "square"
            }
        )

    }


    //Load Market Cap charts

    var lines = marketCapTable.split(/[\r\n]+/g);
    var row = lines[1].split(",");
    var sector = row[0];

    var capChartDataPoints = [];
    var percentCapChartDataPoints = []

    var capAmChartDataPoints = [];
    var percentCapAmChartDataPoints = []

    for (var i = 1; i < lines.length + 1; i++) {
        var row = ["no sector", "2020-12-31", "0.0", "0.0"];
        if (i < lines.length) {
            var row = lines[i].split(",");
        }

        var date = new Date(row[1] + " 00:00:00");
        var cap = parseFloat((parseFloat(row[2]) / 1000000000000).toFixed(2));
        var percent = parseFloat(parseFloat(row[3]).toFixed(2));

        if (row[0] != sector) {
            //push series to chart options

            marketCapChartData.push(
                {
                    type: "stackedArea",
                    click: sectorClicked,
                    //showInLegend: true,
                    color: colorPalette[marketCapChartData.length % colorPalette.length],
                    name: sector,
                    dataPoints: capChartDataPoints,
                    xValueFormatString: "DD MMM YYYY",
                    legendMarkerType: "square"
                }
            );

            marketCapAmChartData.push({
                "type": "LineSeries",
                "name": sector,
                "stacked": true,
                "tooltipText": "Series: {name}\nValue: {valueY}",
                "stroke": colorPalette[marketCapAmChartData.length % colorPalette.length],
                "strokeOpacity": 1,
                "fill": patternsList[marketCapAmChartData.length % patternsList.length],
                "fillOpacity": 1,
                "dataFields": {
                    "valueY": "value",
                    "dateX": "date"
                },
                "data": capAmChartDataPoints
            });

            marketCapPercentChartData.push(
                {
                    type: "stackedArea",
                    click: sectorClicked,
                    //showInLegend: true,
                    color: colorPalette[marketCapPercentChartData.length % colorPalette.length],
                    name: sector,
                    dataPoints: percentCapChartDataPoints,
                    xValueFormatString: "DD MMM YYYY",
                    //yValueFormatString: "#.### %",
                    legendMarkerType: "square"
                }
            );

            marketCapPercentAmChartData.push({
                "type": "LineSeries",
                "name": sector,
                "stacked": true,
                "tooltipText": "Series: {name}\nValue: {valueY}",
                "stroke": colorPalette[marketCapPercentAmChartData.length % colorPalette.length],
                "strokeOpacity": 1,
                "fill": patternsList[marketCapPercentAmChartData.length % patternsList.length],
                "fillOpacity": 1,
                "dataFields": {
                    "valueY": "percent",
                    "dateX": "date"
                },
                "data": percentCapAmChartDataPoints
            });

            sector = row[0]
            capChartDataPoints = [];
            percentCapChartDataPoints = []
            capAmChartDataPoints = []
            percentCapAmChartDataPoints = []

        }

        capChartDataPoints.push({ y: cap, x: date, label: row[0] });
        percentCapChartDataPoints.push({ y: percent, x: date, label: row[0] });
        capAmChartDataPoints.push({ "value": cap, "date": date });
        percentCapAmChartDataPoints.push({ "percent": percent, "date": date });

    }

    charts.push(new CanvasJS.Chart("sectorMarketCapContainer", marketCapChartOptions))
    charts.push(new CanvasJS.Chart("sectorMarketCapPercentContainer", marketCapPercentChartOptions))

    syncCharts(charts, true, true, true); // syncCharts(charts, syncToolTip, syncCrosshair, syncAxisXRange)

    for (var i = 0; i < charts.length; i++) {
        charts[i].render();
    }


    var sectorVolumeAmChart = am4core.createFromConfig({

        "series": marketCapAmChartData,
        "titles": [{
            "text": "Market Cap By Sector",
            "fontSize": 25,
            "marginTop": 0,
            "marginBottom": 0
          }],
        "xAxes": [{
            "type": "DateAxis",
            "title": {
                "text": "Date"
            }
        }],
        "yAxes": [{
            "type": "ValueAxis",
            "title": {
                "text": "Trillions USD"
            }
        }],
        "cursor": {
            "type": "XYCursor",
            "maxTooltipDistance": 1
        },


    }, "sectorMarketCapAmContainer", am4charts.XYChart);

    var sectorCapPercentAmChart = am4core.createFromConfig({

        "series": marketCapPercentAmChartData,
        "titles": [{
            "text": "Market Share By Sector",
            "fontSize": 25,
            "marginBottom": 0
          }],
        "xAxes": [{
            "type": "DateAxis",
            "title": {
                "text": "Date"
            }
        }],
        "yAxes": [{
            "type": "ValueAxis",
            "title": {
                "text": "Percent %"
            }
        }],
        "cursor": {
            "type": "XYCursor",
            "maxTooltipDistance": 1
        },


    }, "sectorMarketCapPercentAmContainer", am4charts.XYChart);

    amCharts.push(sectorVolumeAmChart);
    amCharts.push(sectorCapPercentAmChart);

    industryCharts.push(new CanvasJS.Chart("industryVolumeContainer", industryVolumeChartOptions))
    industryCharts.push(new CanvasJS.Chart("industryPercentContainer", industryPercentChartOptions))

    for (var i = 0; i < industryCharts.length; i++) {
        industryCharts[i].render();
    }


    for (var i = 0; i < charts[0].data.length; i++) {
        var sectorName = charts[0].data[i].options.name;
        var color = charts[0].data[i].color;
        var checkBox = `<label class="container">${sectorName}<input type="checkbox" checked="true" onchange="sectorCheckBoxChanged(${i}, this)"><span style="background-color: ${color};" class="checkmark"></span></label>`;
        //var checkBox = `<div class="sector-filter-item"><input type="checkbox" id="sector-${i}" name="${sectorName}" value="${i}" checked="true" onchange="sectorCheckBoxChanged(${i}, this)"><span>${sectorName}</span><br></div>`;
        document.getElementById("sector-filter").insertAdjacentHTML('beforeend', checkBox);
    }
}

function sectorCheckBoxChanged(dataSeriesIndex, checkBoxObject) {

    var isEnabled = checkBoxObject.checked;

    for (var i = 0; i < charts.length; i++) {
        charts[i].data[dataSeriesIndex].set("visible", isEnabled, true);
    }

    for (var i = 0; i < amCharts.length; i++) {
        //charts[i].data[dataSeriesIndex].set("visible", isEnabled, true);
        if (isEnabled) {
            amCharts[i].series.getIndex(dataSeriesIndex).show()
        } else {
            amCharts[i].series.getIndex(dataSeriesIndex).hide()
        }
    }


}

function colorBlindSwitchToggled(switchObject) {
    var isEnabled = switchObject.checked;

    if (isEnabled) {
        document.getElementById("canvas-charts").style.display = "none"
        document.getElementById("am-charts").style.display = "block"
    } else {
        document.getElementById("canvas-charts").style.display = "block"
        document.getElementById("am-charts").style.display = "none"

        for (var i = 0; i < charts.length; i++) {
            charts[i].render();
        }
    }

}

function getIndustriesInSector(sector) {
    var lines = industryDataTable.split(/[\r\n]+/g);

    var industriesInSectorLines = [];
    industriesInSectorLines.push(lines[0]);

    for (var i = 1; i < lines.length; i++) {
        var row = lines[i].split(",");
        if (sector === row[0]) {
            industriesInSectorLines.push(lines[i]);
        }
    }

    return industriesInSectorLines;
}

function sectorClicked(e) {

    var sector = e.dataSeries.name;

    industryCharts[0].options.title.text = sector + ": Transaction Volume By Industry"

    var industriesInSectorLines = getIndustriesInSector(sector);

    var volumeChartData = []
    var percentChartData = []

    for (var i = 1; i < industriesInSectorLines.length; i++) {

        var row = industriesInSectorLines[i].split(",");
        var industry = row[1];

        var volumeChartDataPoints = [];
        var percentChartDataPoints = []
        for (var column = 0; column < row.length / 2 - 1; column++) {
            var volume = parseFloat((parseFloat(row[2 * column + 2]) / 1000000).toFixed(2));
            var percent = parseFloat(parseFloat(row[2 * column + 3]).toFixed(2));
            var date = new Date(2010 + column, 11, 31);
            volumeChartDataPoints.push({ y: volume, x: date, label: industry });
            percentChartDataPoints.push({ y: percent, x: date, label: industry });
        }


        volumeChartData.push(
            {
                type: "stackedArea",
                showInLegend: true,
                name: industry,
                dataPoints: volumeChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.##",
                legendMarkerType: "square"


            }
        )

        percentChartData.push(
            {
                type: "stackedArea",
                showInLegend: true,
                name: industry,
                dataPoints: percentChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.### %",
                legendMarkerType: "square"
            }
        )

        industryCharts[0].options.data = volumeChartData;
        industryCharts[0].render();
        industryCharts[1].options.data = percentChartData;
        industryCharts[1].render();


    }
}




window.onload = function () {

    loadData();

}

