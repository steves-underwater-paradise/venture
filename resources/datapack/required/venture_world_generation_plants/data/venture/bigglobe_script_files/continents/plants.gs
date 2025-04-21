for (int z in range[minModifiableZ, maxModifiableZ]:
    for (int x in range[minModifiableX, maxModifiableX]:
        ArrayList choices = new()
        var altitude = `venture:continents/altitude`(x, z)
        var temperature = `venture:continents/temperature`(x, z)
        var moisture = `venture:continents/moisture`(x, z)
        choices.add(ConfiguredFeature('venture:continents/plants/grass'))

        if (choices.isEmpty():
            continue()
        )

        ConfiguredFeature feature = choices.get(random.nextInt(choices.size()))
        if (feature != null:
            int y = roundInt(altitude)
            if (getBlockState(x, y, z) == BlockState('minecraft:air'):
                placeFeature(x, y, z, feature)
            )
        )
    )
)
