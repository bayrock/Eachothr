/*
Eachothr
routes.js
*/

const lobbies = require('./lobbies')
const nickname = require('nicknames')
const gravatar = require('gravatar')

// TODO delete names upon disconnect
const takennicks = []

function validateSession(req) {
	if (req.session.user != null) return

	let randname = nickname.allRandom()
	while (takennicks.indexOf(randname) != -1)
		randname = nickname.allRandom()

	takennicks.push(randname)

	req.session.user = {
		name: randname,
		avatar: gravatar.url(randname, {s: '33', r: 'pg', d: 'retro'})
	}

	console.log(req.session.user.name + ' was born')
}

module.exports = (app) => {
	app.get('/', (req, res) => {
		validateSession(req)

		const udata = req.session.user
		udata.destination = 'Homepage'

		res.render('home', {
			userdata: udata,
			lobbydata: lobbies.data
		})
	})

	app.get('/lobby', (req, res) => {
		validateSession(req)

		let lobbyID = Number(req.query["id"])
		if (Number.isInteger(lobbyID))
			lobbyID-- // Don't want lobby 0 to exist as an ID

		const lobby = lobbies.data[lobbyID]

		if (lobby == null) {
			// TODO Add 404 and/or redirection page
			res.status(400).send("That lobby doesn't exist")
			return;
		}

		const udata = req.session.user
		udata.destination = `Lobby ${lobbyID+1} (${lobby.getTitle()})`
		udata.curlobby = lobby
		lobby.joinQueue(udata)

		res.render('lobby', {
			userdata: udata,
			lobbydata: lobby
		})
	})
}
