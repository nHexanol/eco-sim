module.exports = function init(claim, lhq) {
  const upgrades = require('./upgrades.json');
  const Graph = require('node-dijkstra');
  const loadedTerrs = [];
  if (!claim.includes(lhq) || typeof (lhq) !== 'string') {
    throw new Error('No HQ provided.');
  }
  else if (typeof (claim) !== 'object') {
    throw new Error('No claim provided.');
  }
  hq = lhq;
  terrs = require('./baseProperty.json');
  var evString = "";
  // set trading route for loaded claim
  for (var i in claim) {
    terrs[claim[i]].loaded = true;
    terrs[claim[i]].storage = {
      emeralds: 0,
      ore: 0,
      crops: 0,
      fish: 0,
      wood: 0
    }
    terrs[claim[i]].upgrades = {
      damage: 0,
      attack: 0,
      health: 0,
      defence: 0
    }
    terrs[claim[i]].bonuses = {
      strongerMinions: 0,
      towerMultiAttacks: 0,
      towerAura: 0,
      towerVolley: 0,
      xpSeeking: 0,
      tomeSeeking: 0,
      emeraldSeeking: 0,
      largerResourceStorage: 0,
      largerEmeraldStorage: 0,
      efficientResource: 0,
      efficientEmerald: 0,
      resourceRate: 0,
      emeraldsRate: 0
    }
    terrs[claim[i]].baseStorage = {
      emeralds: 3000,
      ore: 300,
      crops: 300,
      fish: 300,
      wood: 300
    }
    terrs[claim[i]].maxStorage = {
      emeralds: 3000,
      ore: 300,
      crops: 300,
      fish: 300,
      wood: 300
    }
    terrs[claim[i]].tax = {
      global: 5,
      ally: 5,
      self: 5
    }
    if (claim[i] === hq) {
      terrs[claim[i]].nextTerr = null;
    }
    else {
      terrs[claim[i]].nextTerr = [];
    }
    loadedTerrs.push(claim[i]);
    terrs[hq].hq = true;
    route = new Graph();
    var neighbors = terrs[claim[i]]['Trading Routes'].reduce((ac, k, index) => {
      return { ...ac, [k]: terrs[claim[i]].tax.self }
    }, {});
    evString += `.addNode('${claim[i]}', ${JSON.stringify(neighbors)})`;
    // route.addNode(claim[i], neighbors);
  }
  Function('route', `route${evString};`)(route);
  for (var e in terrs) {
    if (terrs[e]) {
      terrs[e].nextTerr = route.path(e, hq);
    }
  }
  evString = '';
  // set trading route for unloaded claim

  for (var i in terrs) {
    if (!terrs.loaded) continue;
    else {
      terrs[i].loaded = false;
      terrs[i].stats = {
        damage: {
          max : 1500,
          min : 1000
        },
        attack : 0.5,
        health : 300000,
        defence : 10
      }
      terrs[i].storage = {
        emeralds: 0,
        ore: 0,
        crops: 0,
        fish: 0,
        wood: 0
      }
      terrs[i].upgrades = {
        damage: 0,
        attack: 0,
        health: 0,
        defence: 0
      }
      terrs[i].bonuses = {
        strongerMinions: 0,
        towerMultiAttacks: 0,
        towerAura: 0,
        towerVolley: 0,
        xpSeeking: 0,
        tomeSeeking: 0,
        emeraldSeeking: 0,
        largerResourceStorage: 0,
        largerEmeraldStorage: 0,
        efficientResource: 0,
        efficientEmerald: 0,
        resourceRate: 0,
        emeraldsRate: 0
      }
      terrs[i].baseStorage = {
        emeralds: 3000,
        ore: 300,
        crops: 300,
        fish: 300,
        wood: 300
      }
      terrs[i].maxStorage = {
        emeralds: 3000,
        ore: 300,
        crops: 300,
        fish: 300,
        wood: 300
      }
      terrs[i].tax = {
        global: 5,
        ally: 5,
        self: 5
      }
      terrs[i].tax = {
        global: 60,
        ally: 60,
        self: 5
      }
      evString += `.addNode("${i}", ${JSON.stringify(terrs[i]['Trading Routes'].map((e) => { return e.replace("'", "\'") }).reduce((ac, k, index) => { return { ...ac, [k]: terrs[i].tax.global } }, {}))})`;
      Function('route', `route${evString};`)(route);
    }
  }
  return loadedTerrs;
}