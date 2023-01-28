import Player from "@vimeo/player";
const throttle = require("lodash.throttle");

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
	console.log('played the video!');
});
