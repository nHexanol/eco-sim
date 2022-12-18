module.exports = 
function set(terr, option) {
  // stupidity check
  if (!terr) throw new Error('No territory specified');
  if (option.damage > 11 || option.damage < 0) throw new RangeError('Invalid damage value (0 - 11)');
  if (option.attack > 11 || option.attack < 0) throw new RangeError('Invalid attack value (0 - 11)');
  if (option.health > 11 || option.health < 0) throw new RangeError('Invalid health value (0 - 11)');
  if (option.defense > 11 || option.defense < 0) throw new RangeError('Invalid defense value (0 - 11)');
  if (option.strongerMinions > 4 || option.strongerMinions < 0) throw new RangeError('Invalid minion damage value (0 - 4)');
  if (option.towerMultiAttacks > 1 || option.towerMultiAttacks < 0) throw new RangeError('Invalid multi amount value (0 - 1)');
  if (option.towerAura > 3 || option.towerAura < 0) throw new RangeError('Invalid aura amount value (0 - 3)');
  if (option.towerVolley > 3 || option.towerVolley < 0) throw new RangeError('Invalid volley amount value (0 - 3)');
  if (option.xpSeeking > 9 || option.xpSeeking < 0) throw new RangeError('Invalid xp seeking value (0 - 9)');
  if (option.tomeSeeking > 3 || option.tomeSeeking < 0) throw new RangeError('Invalid tome seeking value (0 - 3)');
  if (option.emeraldSeeking > 5 || option.emeraldSeeking < 0) throw new RangeError('Invalid emerald seeking value (0 - 5)');
  if (option.largerResourceStorage > 6 || option.largerResourceStorage < 0) throw new RangeError('Invalid resource storage value (0 - 6)');
  if (option.largerEmeraldStorage > 6 || option.largerEmeraldStorage < 0) throw new RangeError('Invalid emerald storage value (0 - 6)');
  if (option.efficientResource > 6 || option.efficientResource < 0) throw new RangeError('Invalid resource efficiency value (0 - 6)');
  if (option.efficientEmeralds > 3 || option.efficientEmeralds < 0) throw new RangeError('Invalid emerald efficiency value (0 - 3)');
  if (option.resourceRate > 3 || option.resourceRate < 0) throw new RangeError('Invalid resource rate value (0 - 3)');
  if (option.emeraldsRate > 3 || option.emeraldsRate < 0) throw new RangeError('Invalid emerald rate value (0 - 3)');
  if (option.tax.global > 60 || option.tax.global < 5) throw new RangeError('Invalid global tax value (5 - 60)');
  if (option.tax.ally > 60 || option.tax.ally < 5) throw new RangeError('Invalid ally tax value (5 - 60)');

  // set the values
  terr.upgrades.damage = option.damage;
  terr.upgrades.attack = option.attack;
  terr.upgrades.health = option.health;
  terr.upgrades.defense = option.defense;
  terr.bonuses.strongerMinions = option.strongerMinions;
  terr.bonuses.towerMultiAttacks = option.towerMultiAttacks;
  terr.bonuses.towerAura = option.towerAura;
  terr.bonuses.towerVolley = option.towerVolley;
  terr.bonuses.xpSeeking = option.xpSeeking;
  terr.bonuses.tomeSeeking = option.tomeSeeking;
  terr.bonuses.emeraldSeeking = option.emeraldSeeking;
  terr.bonuses.largerResourceStorage = option.largerResourceStorage;
  terr.bonuses.largerEmeraldStorage = option.largerEmeraldStorage;
  terr.bonuses.efficientResource = option.efficientResource;
  terr.bonuses.efficientEmeralds = option.efficientEmeralds;
  terr.bonuses.resourceRate = option.resourceRate;
  terr.bonuses.emeraldsRate = option.emeraldsRate;

}