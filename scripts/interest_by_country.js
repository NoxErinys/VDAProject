var data = [];
var countries = [];
var countryCodes = [];
var changePercentages = [];
var maxChange = Number.MIN_VALUE;

var lines = interestByCountryDataTable.split(/[\r\n]+/g);

for (var i = 1; i < lines.length; i++) {
    var row = lines[i].split(",");
    var country = row[0];
    var code = getCountryCode(country);
    var changePercent = parseFloat(row[3]);
    countries.push(country);
    countryCodes.push(code);
    changePercentages.push(changePercent);

    if (Math.abs(changePercent) > maxChange) maxChange = Math.abs(changePercent);
}

for (var i = 0; i < countryCodes.length; i++) {

    var code = countryCodes[i];
    var countryName = countries[i];
    var changePercent = changePercentages[i] / maxChange;
    var color = "rgba(56, 56, 71, 0.4)";
    var hoverColor = "rgba(0, 200, 0, 0.7)";

    const noChangeZone = 0.0;
    if (changePercent >= noChangeZone) {
        var colorComponents = Math.round( 255 * (1 - changePercent));
        color = "rgba(" + colorComponents + ", 255, " + colorComponents + ", 1)";
        hoverColor = "rgba(0, 200, 0, 0.7)";
    } else if (changePercent <= -1 * noChangeZone) {
        var colorComponents = Math.round( 255 * (1 + changePercent));
        //color = "rgba(255, 0, 0," + changePercent * -1 + ")";
        color = "rgba(255, "  + colorComponents  +  ", " + colorComponents + ", 1)";

        hoverColor = "rgba(255, 0, 0, 0.7)";
    } else {
        color = "rgba(100, 100, 100, 1)";
        hoverColor = "rgba(100, 100, 100, 0.7)";
    }

    data.push({
        "id": code,
        "name": countryName,
        "value": changePercentages[i],
        "displayValue": (changePercentages[i] * 100).toFixed(2) + "%",
        "fill": am4core.color(color),
        "hoverColor": am4core.color(hoverColor)
    });
}

var map = am4core.createFromConfig({
    "geodata": am4geodata_worldLow,
    "projection": "Miller",
    "series": [{
        "type": "MapPolygonSeries",
        "data": data,
        "useGeodata": true,
        "exclude": ["AQ"],
        "mapPolygons": {
            "tooltipText": '{name}{value.formatNumber(": 0.00%")}',
            "propertyFields": {
                "fill": "fill"
            },
            "stroke": "#e5e5e5",
            //"strokeOpacity": 0.5,
            "fill": "#e9e9e9",
            "states": {
                "hover": {
                    "properties": {
                        "opacity": 0.6,
                        "stroke": "#bbb"
                    }
                }
            }
        }
    }]
}, "map-chart-div", am4maps.MapChart);




function getCountryCode(country) {
    var code = "";
    var lines = isoCountryCodesDataTable.split(/[\r\n]+/g);

    for (var i = 1; i < lines.length; i++) {
        var row = lines[i].split(",");
        var countryName = row[1];

        if (countryName == country) {
            code = row[0];
            break;
        }
    }
    return code;
}