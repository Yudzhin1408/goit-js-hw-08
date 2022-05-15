import Player from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('iframe');

const player = new Player(iframeEl);

let savedCurrentTime = 0;
populateTime();

const onPlay = function (data) {
    localStorage.setItem("video-time", data.seconds);

};


player.on('timeupdate', throttle(onPlay, 1000));
function populateTime() {
    const currentTime = localStorage.getItem("videoplayer-current-time");
    if (currentTime) {        
        savedCurrentTime = currentTime;
    }
}

 player.setCurrentTime(savedCurrentTime);