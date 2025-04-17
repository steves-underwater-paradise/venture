int trunkRadius = 1
int treeHeight = random.nextInt(15, 30)
for (int y in range[originY, originY + treeHeight):
    ; Place the trunk
    setBlockState(originX, y, originZ, 'minecraft:spruce_log')

    int altitude_corrected_y = y - roundInt(`venture:continents/altitude`)
    if (altitude_corrected_y == 0:
        continue()
    )

    ; Place the leaves in a circular ring around them
    double fraction = double(altitude_corrected_y) / double(treeHeight)
    double leavesRadius = -3.0L * fraction ^ 2 - 0.1L * fraction + 4.0L
    boolean isYEven = y & 1 == 0
    if (isYEven:
        ; Place half sized leaf rings for even Y values
        leavesRadius = leavesRadius >> 1
    )

    int leavesRadiusRounded = roundInt(leavesRadius)
    for (int x in range[originX - leavesRadiusRounded, originX + leavesRadiusRounded]:
        for (int z in range[originZ - leavesRadiusRounded, originZ + leavesRadiusRounded]:
            if (x == originX && z == originZ:
                continue()
            )

            ; Occasionally skip an inner leaf to break up the uniformity of the tree
            if (isYEven && random.nextDouble() > 0.85L:
                continue()
            )

            double distance = sqrt(pow(x - originX, 2.0L) + pow(z - originZ, 2.0L))
            if (distance > leavesRadius:
                continue()
            )

            setBlockState(x, y, z, BlockState('minecraft:spruce_leaves', distance: abs(x - originX) + abs(z - originZ)))
        )
    )
)
; Place a top leaf block above the trunk as a cap
setBlockState(originX, originY + treeHeight, originZ, 'minecraft:spruce_leaves')

return(true)
