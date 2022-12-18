module.exports = function move(terrs) {
  // check for full res
  for (var i in terrs) {
    if (!terrs[i].loaded) continue;
    if (!terrs[i].hq)
      if (terrs[i].storage.emeralds > terrs[i].maxStorage.emeralds) {
        terrs[i].storage.emeralds = terrs[i].baseStorage.emeralds;
      }
    if (terrs[i].storage.ore > terrs[i].maxStorage.ore) {
      terrs[i].storage.ore = terrs[i].baseStorage.ore;
    }
    if (terrs[i].storage.crops > terrs[i].maxStorage.crops) {
      terrs[i].storage.crops = terrs[i].baseStorage.crops;
    }
    if (terrs[i].storage.fish > terrs[i].maxStorage.fish) {
      terrs[i].storage.fish = terrs[i].baseStorage.fish;
    }
    if (terrs[i].storage.wood > terrs[i].maxStorage.wood) {
      terrs[i].storage.wood = terrs[i].baseStorage.wood;
    }
    // move res onto hq
    if (terrs[i].nextTerr !== null) {
      // tp the res to hq after route.length + 1 
      setTimeout(function () {
        terrs[hq].storage.emeralds += terrs[i].storage.emeralds;
        terrs[hq].storage.ore += terrs[i].storage.ore;
        terrs[hq].storage.crops += terrs[i].storage.crops;
        terrs[hq].storage.fish += terrs[i].storage.fish;
        terrs[hq].storage.wood += terrs[i].storage.wood;
      }, terrs[i].nextTerr.length + 1 * 60000);
    }
  }
}