var gui =
`
Guild Output
Total resource output
and overall costs

+${totalEmeraldProduction} Emeralds per Hour
${emeraldInStorage}/${emeraldStorageCapacity} in storage
[O] +${totalOreProduction} Ore per Hour
[O] ${oreInStorage}/${oreStorageCapacity} in storage
[W] +${totalFoodProduction} Wood per Hour
[W] ${woodInStorage}/${woodStorageCapacity} in storage
[F] +${totalFishProduction} Fish per Hour
[F] ${fishInStorage}/${fishStorageCapacity} in storage
[C] +${totalCropsProduction} Crops per Hour
[C] ${cropsInStorage}/${cropsStorageCapacity} in storage

Overall Cost (per hour):
- ${emeraldUsage} Emeralds (${emeraldUsagePercent}%)
- [O] ${oreUsage} Ore (${oreUsagePercent}%)
- [W] ${woodUsage} Wood (${woodUsagePercent}%)
- [F] ${fishUsage} Fish (${fishUsagePercent}%)
- [C] ${cropsUsage} Crops (${cropsUsagePercent}%)
`

console.log(gui)