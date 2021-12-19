import Player from '@vimeo/player';
const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    console.log(player);
// iframe.addEventListener('play', onIframePlay);
// function onIframePlay(event) {
//      console.log(e.target.value);
//      const timeUpdate = e.target.value;
//     localStorage.setItem(STORAGE_KEY, timeUpdate);
    

// }


// player.on('timeupdate',  onPlay);
//    function onPlay(e) {
//     // data is an object containing properties specific to that event
//     console.log(e.target.value);
//      const timeUpdate = e.target.value;
//     localStorage.setItem(STORAGE_KEY, timeUpdate);
// };  



//      const seconds = localStorage.getItem(STORAGE_KEY);
// player.setCurrentTime(30.456).then(function (seconds) {
   
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });



//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });   

    

    