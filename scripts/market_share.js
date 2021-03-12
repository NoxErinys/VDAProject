var charts = [];
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

var marketCapChartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Market Cap By Sector"
    },
    axisX: {
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

    var lines = sectorDataTable.split(/[\r\n]+/g);

    for (var i = 1; i < lines.length; i++) {

        var row = lines[i].split(",");
        var sector = row[0];

        var volumeChartDataPoints = [];
        var percentChartDataPoints = []
        for (var column = 0; column < row.length / 2 - 1; column++) {
            var volume = parseFloat((parseFloat(row[2 * column + 1]) / 1000000).toFixed(2));
            var percent = parseFloat(parseFloat(row[2 * column + 2]).toFixed(2));
            var date = new Date(2010 + column, 11, 31);
            volumeChartDataPoints.push({ y: volume, x: date, label: sector });
            percentChartDataPoints.push({ y: percent, x: date, label: sector });
        }

        volumeChartData.push(
            {
                type: "stackedArea",
                click: sectorClicked,
                //showInLegend: true,
                name: sector,
                dataPoints: volumeChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.##",
                legendMarkerType: "square"


            }
        )

        percentChartData.push(
            {
                type: "stackedArea",
                click: sectorClicked,
                //showInLegend: true,
                name: sector,
                dataPoints: percentChartDataPoints,
                xValueFormatString: "DD MMM YYYY",
                //yValueFormatString: "#.### %",
                legendMarkerType: "square"
            }
        )

    }


    charts.push(new CanvasJS.Chart("sectorVolumeContainer", volumeChartOptions))
    charts.push(new CanvasJS.Chart("sectorPercentContainer", percentChartOptions))



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
                    name: sector,
                    dataPoints: capChartDataPoints,
                    xValueFormatString: "DD MMM YYYY",
                    legendMarkerType: "square"
                }
            );

            marketCapPercentChartData.push(
                {
                    type: "stackedArea",
                    click: sectorClicked,
                    //showInLegend: true,
                    name: sector,
                    dataPoints: percentCapChartDataPoints,
                    xValueFormatString: "DD MMM YYYY",
                    //yValueFormatString: "#.### %",
                    legendMarkerType: "square"
                }
            )

            sector = row[0]
            capChartDataPoints = [];
            percentCapChartDataPoints = []

        }

        capChartDataPoints.push({ y: cap, x: date, label: row[0] });
        percentCapChartDataPoints.push({ y: percent, x: date, label: row[0] });

    }

    charts.push(new CanvasJS.Chart("sectorMarketCapContainer", marketCapChartOptions))
    charts.push(new CanvasJS.Chart("sectorMarketCapPercentContainer", marketCapPercentChartOptions))

    syncCharts(charts, true, true, true); // syncCharts(charts, syncToolTip, syncCrosshair, syncAxisXRange)

    for (var i = 0; i < charts.length; i++) {
        charts[i].render();
    }


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

