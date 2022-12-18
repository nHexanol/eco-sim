const upgrades = require('./upgrades.json');
module.exports = 
function updateTicker(terrs, loadedTerrs) {
  console.log(loadedTerrs)
  for (var i in loadedTerrs) {
    terrs[loadedTerrs[i]].maxStorage.emeralds = terrs[loadedTerrs[i]].baseStorage.emeralds * upgrades.largerEmeraldStorage;
    terrs[loadedTerrs[i]].maxStorage.ore = terrs[loadedTerrs[i]].baseStorage.ore * upgrades.largerResourceStorage;
    terrs[loadedTerrs[i]].maxStorage.crops = terrs[loadedTerrs[i]].baseStorage.crops * upgrades.largerResourceStorage;
    terrs[loadedTerrs[i]].maxStorage.fish = terrs[loadedTerrs[i]].baseStorage.fish * upgrades.largerResourceStorage;
    terrs[loadedTerrs[i]].maxStorage.wood = terrs[loadedTerrs[i]].baseStorage.wood * upgrades.largerResourceStorage;

    terrs[loadedTerrs[i]].storage.emeralds += ((terrs[loadedTerrs[i]].resources.emeralds * upgrades.bonuses.efficientEmeralds.value[terrs[loadedTerrs[i]].bonuses.efficientEmerald] * (1 / upgrades.bonuses.emeraldsRate.value[terrs[loadedTerrs[i]].bonuses.emeraldsRate])) / 60 / 15);
    terrs[loadedTerrs[i]].storage.ore += 4 * ((terrs[loadedTerrs[i]].resources.ore * upgrades.bonuses.efficientResource.value[terrs[loadedTerrs[i]].bonuses.efficientResource] * (1 / upgrades.bonuses.resourceRate.value[terrs[loadedTerrs[i]].bonuses.resourceRate])) / 60 / 60);
    terrs[loadedTerrs[i]].storage.crops += 4 * ((terrs[loadedTerrs[i]].resources.crops * upgrades.bonuses.efficientResource.value[terrs[loadedTerrs[i]].bonuses.efficientResource] * (1 / upgrades.bonuses.resourceRate.value[terrs[loadedTerrs[i]].bonuses.resourceRate])) / 60 / 60);
    terrs[loadedTerrs[i]].storage.fish += 4 * ((terrs[loadedTerrs[i]].resources.fish * upgrades.bonuses.efficientResource.value[terrs[loadedTerrs[i]].bonuses.efficientResource] * (1 / upgrades.bonuses.resourceRate.value[terrs[loadedTerrs[i]].bonuses.resourceRate])) / 60 / 60);
    terrs[loadedTerrs[i]].storage.wood += 4 * ((terrs[loadedTerrs[i]].resources.wood * upgrades.bonuses.efficientResource.value[terrs[loadedTerrs[i]].bonuses.efficientResource] * (1 / upgrades.bonuses.resourceRate.value[terrs[loadedTerrs[i]].bonuses.resourceRate])) / 60 / 60);

    if (!hq) {
      terrs[loadedTerrs[i]].maxStorage.emeralds = terrs[loadedTerrs[i]].baseStorage.emeralds * upgrades.bonuses.largerEmeraldsStorage.value[terrs[loadedTerrs[i]].bonuses.largerEmeraldStorage];
      terrs[loadedTerrs[i]].maxStorage.ore = terrs[loadedTerrs[i]].baseStorage.ore * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage];
      terrs[loadedTerrs[i]].maxStorage.crops = terrs[loadedTerrs[i]].baseStorage.crops * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage];
      terrs[loadedTerrs[i]].maxStorage.fish = terrs[loadedTerrs[i]].baseStorage.fish * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage];
      terrs[loadedTerrs[i]].maxStorage.wood = terrs[loadedTerrs[i]].baseStorage.wood * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage];
    }
    else {
      terrs[loadedTerrs[i]].maxStorage.emeralds = terrs[loadedTerrs[i]].baseStorage.emeralds * upgrades.bonuses.largerEmeraldsStorage.value[terrs[loadedTerrs[i]].bonuses.largerEmeraldStorage] * 5;
      terrs[loadedTerrs[i]].maxStorage.ore = terrs[loadedTerrs[i]].baseStorage.ore * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage] * 5;
      terrs[loadedTerrs[i]].maxStorage.crops = terrs[loadedTerrs[i]].baseStorage.crops * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage] * 5;
      terrs[loadedTerrs[i]].maxStorage.fish = terrs[loadedTerrs[i]].baseStorage.fish * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage] * 5;
      terrs[loadedTerrs[i]].maxStorage.wood = terrs[loadedTerrs[i]].baseStorage.wood * upgrades.bonuses.largerResourceStorage.value[terrs[loadedTerrs[i]].bonuses.largerResourceStorage] * 5;
    }
    for (var j in loadedTerrs) {
      console.log(terrs[loadedTerrs[i]], i);
    }
    // set upgrades
    terrs[loadedTerrs[i]].upgrades.damage;

  }
}