const upgrades = require('./upgrades.json');
const Graph = require('node-dijkstra');
var terrs, route;
var hq = null;
const { fork } = require('child_process');
const init = require("./init.js");
const changeTradeStyle = require("./style.js");
const move = require("./move.js");
const updateTicker = require("./updateTicker.js");
terrs = require('./baseProperty.json');

// initial setup
const total = {
  usage: {
    emeralds: 0,
    ore: 0,
    crops: 0,
    fish: 0,
    wood: 0
  },
  storage: {
    emeralds: 0,
    ore: 0,
    crops: 0,
    fish: 0,
    wood: 0
  }
}


function createInstance(id) {
  // TODO: create a child process by fork()ing the thing
  const child = fork('./main.js');

}

function getUsageAndStorage(total, loadedTerrs) {
  for (var i in loadedTerrs) {
    // reset first
    total.usage.emeralds = 0;
    total.usage.ore = 0;
    total.usage.crops = 0;
    total.usage.fish = 0;
    total.usage.wood = 0;
    total.storage.emeralds = 0;
    total.storage.ore = 0;
    total.storage.crops = 0;
    total.storage.fish = 0;
    total.storage.wood = 0;

    // usage
    total.usage.emeralds += terrs[loadedTerrs[i]].usage.emeralds;
    total.usage.ore += terrs[loadedTerrs[i]].usage.ore;
    total.usage.crops += terrs[loadedTerrs[i]].usage.crops;
    total.usage.fish += terrs[loadedTerrs[i]].usage.fish;
    total.usage.wood += terrs[loadedTerrs[i]].usage.wood;

    // storage
    total.storage.emeralds += terrs[loadedTerrs[i]].storage.emeralds;
    total.storage.ore += terrs[loadedTerrs[i]].storage.ore;
    total.storage.crops += terrs[loadedTerrs[i]].storage.crops;
    total.storage.fish += terrs[loadedTerrs[i]].storage.fish;
    total.storage.wood += terrs[loadedTerrs[i]].storage.wood;
  }
}

function requestRes(terr, res, amount) {
  if (terr.hq) {
    return;
  }
  else {
    if (amount > terr.storage[res]) {
      terr.warned || console.log(`Territory ${terr.name} is using more resources than it can hold!`);
      terr.warned = true;
    }
  }
}

const loadedTerrs = init(["Jungle Lake", "Jungle Upper", "Jungle Mid", "Temple of Legends", "City of Troms", "South Pigmen Ravines", "Herb Cave", "Jungle Lower", "Great Bridge Jungle", "Dernel Jungle Mid", "Dernel Jungle Lower", "Dernel Jungle Upper"], "Jungle Lake");
// const loadedTerrs = init()

var secondTick = setInterval(updateTicker, 1000, terrs, loadedTerrs);
var resourceTick = setInterval(move, 10000, terrs);
