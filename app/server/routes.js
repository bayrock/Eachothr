/*
Hesitate
routes.js
*/

const lobbies = require('./lobbies')
const nickname = require('nicknames')
const gravatar = require('gravatar')

module.exports = (app) => {

	app.get('/', (req, res) => {
		if (req.session.user == null) {
			const randname = nickname.allRandom()

			req.session.user = {
				name: randname,
				avatar: gravatar.url(randname, {s: '33', r: 'pg', d: 'retro'})
			}

			console.log(req.session.user.name + ' was born')
		}

		res.render('home', {
			userdata: req.session.user,
			lobbydata: lobbies.data
		})
		res.end()
	})
}
