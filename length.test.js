const C2F = require('./C2F')
test('Correct conversion of 0°C to 32°F', () => {
    require(0).toEqual(32)
})

const F2C = require('./F2C')
test('Correct conversion of 360°F to 160°F', () => {
    require(320).toEqual(160)
}) 

const K2M = require('./K2M')
test('Correct conversion of 80 Kmh to 49.709695376 Mph', () => {
    require(80).toEqual(49.709695376)
}) 

const M2K = require('./M2K')
test('Correct conversion of 100 Mph to 160.9344 Kmh', () => {
    require(100).toEqual(160.9344)
}) 