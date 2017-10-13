
class Lobby {
	constructor(title, slots, owner, mode) {
		this.title = title
		this.slots = slots
		this.owner = owner ? owner : "Dedicated"
		this.mode = mode ? mode : title

		console.log(`Lobby - ${this.title} - was initialized by ${this.owner}`)
  }
	// Getters
	getTitle() { return	this.title }
	getSlots() { return	this.slots }
	getOwner() { return	this.owner }
	getMode() { return this.mode }
	// Setters
	setTitle(newtitle)	{	this.title = newtitle	}

	// Methods
	// Functionality goes here
}

module.exports = Lobby
