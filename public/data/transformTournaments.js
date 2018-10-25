var tournaments = require('./tournaments.json');

const newTournaments = tournaments.reduce((result, { id, playersIds, ...tournament }) => {
    result[id] = { ...tournament, playersIds: playersIds.map(x => x.toString())}
    return result
}, {})

console.log(JSON.stringify(newTournaments, null, 2))