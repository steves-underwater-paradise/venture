; TODO: Replace the random chance with a noise map
if (random.nextDouble() > 0.25L:
    setBlockState(originX, originY, originZ, 'minecraft:short_grass')
)

return(true)
