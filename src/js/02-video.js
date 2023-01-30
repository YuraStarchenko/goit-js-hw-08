import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME_VIDEO = "videoplayer-current-time";

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function(e) {
	localStorage.setItem(TIME_VIDEO, e.seconds);
}, 1000)
);
player.setCurrentTime(localStorage.getItem(TIME_VIDEO));