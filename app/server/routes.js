/*
Hesitate
routes.js
*/

const nickname = require('nicknames')

module.exports = (app) => {

	app.get('/', (req, res) => {
	  if (req.session.user == null) {
			req.session.user = {
				name: nickname.allRandom()
			}

			console.log(req.session.user.name + ' was born')
	  }

		res.render('home')
		res.end()
	})
}
