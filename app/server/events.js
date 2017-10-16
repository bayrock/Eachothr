/*
Hesitate
events.js
*/

module.exports = (io) => {

	// User connected
	io.on('connection', (socket) => {
		const handshake = socket.handshake.session
		const user = handshake.user

		if (user == null)
			console.log('Anon connected to unknown destination')
		else
			console.log(`${user.name} connected to ${user.destination}`)

		// User disconnected
		socket.on('disconnect', () => {
			if (user == null)
				return

			console.log(`${user.name} disconnected from ${user.destination}`)

			if (user.curlobby != null) {
				//console.log(user.curlobby.queue)
				delete user.curlobby.queue[user.name]
				//console.log(user.curlobby.queue)
				user.curlobby = null
			}
		})
	})

}
