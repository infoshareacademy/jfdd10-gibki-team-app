var players = require('./players.json');

const newPlayers = players.reduce((result, { id, ...player }) => {
    result[id] = player;
    return result
}, {})

console.log(JSON.stringify(newPlayers, null, 2))