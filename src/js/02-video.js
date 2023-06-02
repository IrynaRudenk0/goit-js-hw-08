import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";


const onPlay = function(event) {
    const currentTime = event.seconds;
    localStorage.setItem(CURRENT_TIME, currentTime);
};

player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });

player.on('timeupdate', throttle(onPlay,1000));


const savedTime = localStorage.getItem(CURRENT_TIME);

player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log ("Error: wrong setting time!")
            break;

        default:
            console.log ("Error setting time!")
            break;
    }
});