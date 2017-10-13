/*
Hesitate
routes.js
*/

const nickname = require('nicknames')
const gravatar = require('gravatar')

module.exports = (app) => {

	app.get('/', (req, res) => {
	  if (req.session.user == null) {
			let randname = nickname.allRandom()

			req.session.user = {
				name: randname,
				avatar: gravatar.url(randname, {s: '33', r: 'pg', d: 'retro'})
			}

			console.log(req.session.user.name + ' was born')
	  }

		res.render('home', { udata: req.session.user })
		res.end()
	})
}
