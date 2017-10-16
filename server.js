/*
Eachothr
server.js
*/

// Mandatory housekeeping
const express = require('express')
const app = express()

const session = require("express-session")({
	secret: process.env.SECRET || "none",
	resave: true,
	saveUninitialized: true
})

const sharedsession = require("express-socket.io-session")

app.set('views', __dirname + '/app/server/views')
app.set('view engine', 'jade')
app.set('port', process.env.PORT || 80)
app.use(express.static(__dirname + '/app/public'))
app.use(session)

// Define the development environment
if (app.get('env') === 'development')
	app.locals.pretty = true

// Begin listening on the environment's port
const port = app.get('port')
const server = app.listen(port)

// Abstract routes to their own file
require('./app/server/routes')(app)

// Initialize the io server
const io = require('socket.io')(server)
io.use(sharedsession(session))

// Abstract events to their own file
require('./app/server/events')(io)

// Initialize the game lobbies
require('./app/server/lobbies').Init()
