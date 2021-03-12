const HEIGHT = 50;
const AGGREGATION = 5;
const AVERAGE_POINTS = 5;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const TRANSPARENCY_RANGES = [
    // { from: 0,    to: 0.1,   is: 0 },
    // { from: 0.1,  to: 0.3,   is: 0.2 },
    // { from: 0.4,  to: 0.6,   is: 0.5 },
    // { from: 0.7,  to: 1,     is: 0.7 }
]

const IMPORTANT_DATES = [
    new Date(2005, 0, 1),
    new Date(2008, 8, 16),
    new Date(2011, 7, 1),
    new Date(2016, 5, 14),
    new Date(2018, 8, 20),
    new Date(2020, 1, 24)
]

function getTransparecy(transparency) {
    for(range of TRANSPARENCY_RANGES){
        if (transparency >= range.from && transparency < range.to){
            return range.is;
        }
    }
    return transparency;
}

function getAbsoluteTransparency(transparency) {
    const absoluteTransparency = Math.abs(transparency);
    const maxTransparency = 0.8;

    if(absoluteTransparency >= maxTransparency){
        return maxTransparency;
    } 

    return absoluteTransparency;
}

function drawHistoricalChart(canvas, data) {
    canvas.width = data.length * 1 / AGGREGATION + IMPORTANT_DATES.length;
    canvas.height = HEIGHT;

    const ctx = canvas.getContext('2d');
    let points = [];
    let display = [];
    let markedDates = Array.from({length: IMPORTANT_DATES.length}, _ => false);

    for(let index = 0; index < data.length; index += AGGREGATION) {
        points.push({
            priceChange: data.slice(index, index + AGGREGATION).reduce((sum, el) => sum + el.price_change, 0),
            date: new Date(data[index].year, data[index].month - 1, data[index].day)
        });
    }

    const smallestChange = Math.min(...points.map(p => p.priceChange));
    const biggestChange = Math.max(...points.map(p => p.priceChange));
    const changeFactor = Math.min(Math.abs(smallestChange), biggestChange) * 0.6;

    console.log(`Changes between: ${smallestChange} and ${biggestChange} with factor ${changeFactor}`);
    
    for(let index = 0; index < points.length; index++) {
        const transparency = getTransparecy(points[index].priceChange < 0 ? Math.min(1, points[index].priceChange / changeFactor * -1) 
                                                                          : Math.min(1, points[index].priceChange / changeFactor) * 0.6) ;
        
        if(IMPORTANT_DATES.some((range, i) => points[index].date > range && !markedDates[i])) {
            markedDates[markedDates.findIndex(d => d == false)] = true;
            display.push("marker");
        }
        
        display.push(points[index].priceChange < 0 ? transparency  * (-1) : transparency);
    }

    let bars = [];

     ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
     ctx.fillRect(0, 0, canvas.width, HEIGHT);

    for(let index = 0; index < display.length; index += AVERAGE_POINTS) {
        const averageValue = display.slice(index, index + AVERAGE_POINTS).reduce((sum, el) => sum + el, 0);
        var displayValue = averageValue;

        if(typeof averageValue === "string"){
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.fillRect(index, HEIGHT * 0 / 6, AVERAGE_POINTS, HEIGHT / 6);
            ctx.fillRect(index, HEIGHT * 2 / 6, AVERAGE_POINTS, HEIGHT / 3);
            ctx.fillRect(index, HEIGHT * 5 / 6, AVERAGE_POINTS, HEIGHT / 6);
        }
        else {
            // If something continues down a trend, take that into account
            if(bars.length > 2 && Math.sign(bars[bars.length - 1]) == Math.sign(bars[bars.length - 2]) && Math.abs(bars[bars.length - 1]) > 0.3){
                displayValue += (bars[bars.length - 1] + bars[bars.length - 2]) / 4;
            }
    
            const transparency = Math.min(0.8, Math.abs(displayValue));

            ctx.fillStyle = displayValue < 0 ? `rgba(255, 0, 0, ${transparency})` : `rgba(0, 255, 0, ${transparency})`;
            ctx.fillRect(index, 0, AVERAGE_POINTS, HEIGHT);

            bars.push(Math.min(0.8, Math.abs(averageValue)) * Math.sign(averageValue));
        }

    }
}

for(var sector in window.historicalData) {
    var canvas = document.getElementById(`history-${sector}`);
    if(!canvas) continue;

    drawHistoricalChart(canvas, window.historicalData[sector]);
}

