
const Lobby = require('./classes/Lobby')

let lobbies = {}
lobbies.data = {}

lobbies.Init = () => {
	// Setup a dedicated Button Masher lobby
	const ButtonMasher = new Lobby('Button Masher', 8)
	const title = ButtonMasher.getTitle()
	lobbies.data[title] = ButtonMasher // Store this lobby data
}

module.exports = lobbies
