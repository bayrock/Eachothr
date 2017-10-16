
const Lobby = require('./classes/Lobby')

let lobbies = {}
lobbies.data = []

lobbies.Init = () => {
	// Setup a dedicated Button Masher lobby
	const FirstReaction = new Lobby('First Reaction')
	lobbies.data.push(FirstReaction) // Store this lobby data
}

module.exports = lobbies
