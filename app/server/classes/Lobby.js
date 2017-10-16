
class Lobby {
	constructor(title, owner, mode) {
		this.title = title
		this.owner = owner ? owner : "Dedicated"

		this.queue = {}

		console.log(`Lobby - ${this.title} - was initialized by ${this.owner}`)
  }
	// Getters
	getTitle() { return this.title }
	getOwner() { return this.owner }

	// Setters
	setTitle(newtitle) { this.title = newtitle }

	// Methods
	joinQueue(userdata) {
		const name = userdata.name
		this.queue[name] = name
		//console.log(`${userdata.name} was added to ${this.title} queue`)
	}

	// TODO Why doesn't this work from events.js disconnect?
	leaveQueue(userdata) {
		delete this.queue[userdata.name]
		//console.log(`${userdata.name} left the ${this.title} queue`)
	}
}

module.exports = Lobby
