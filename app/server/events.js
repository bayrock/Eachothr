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
			console.log('Anon connected')
		else
			console.log(`${user.name} connected`)

		// User disconnected
		socket.on('disconnect', () => {
			if (user != null)
				console.log(`${user.name} disconnected`)
		})
	})

}
