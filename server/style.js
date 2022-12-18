module.exports = 
// TODO: add a way to change the trade style of a territory
function changeTradeStyle(territory, style) {
  if (style.toLowerCase() === "fastest") {
    territory.tradeStyle = "fastest";
    territory.nextTerr = [];
    var neighbors = territory['Trading Routes'].reduce((ac, k, index) => {
      return { ...ac, [k]: 1 }
    }, {});
    evString += `.addNode('${claim[i]}', ${JSON.stringify(neighbors)})`;
  }
  else if (style.toLowerCase() === "cheapest") {
    territory.tradeStyle = "cheapest";
    territory.nextTerr = [];
    var neighbors = territory['Trading Routes'].reduce((ac, k, index) => {
      return { ...ac, [k]: undefined } // placeholder for cost
    }, {});
    evString += `.addNode('${claim[i]}', ${JSON.stringify(neighbors)})`;
  }

  // have to readd the nextTerr to the territory
}