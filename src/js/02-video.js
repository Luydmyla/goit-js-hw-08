// ==========импортируем библиотеки 
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Vimeo);
// ==========обьявила глобальную переменную, которая хранит ключи для локал сторидж
const STORAGE_KEY = "videoplayer-current-time";
// =====инициализируем плеер=========
const options = {
    id: "vimeo-player",
    src: "https://player.vimeo.com/video/236203659",
      width: "640",
      height: "360",
      frameborder: "0",
      allowfullscreen: true,
      allow: "autoplay; encrypted-media",
        // id: 59777392,
        // width: 640,
        // loop: true
    };
    const player = new Vimeo.Player('vimeo-player', options);
player.setVolume(0);
    // // ===вызываем функцию, которая возвращает значение сщхраненной позиции из локалсторедж после перезагрузки
    setPlaybackPosition();
    // ===========метод который отслеживает событие timeupdate =======
    player.on('timeupdate', throttle(onTimeUpdate, 1000));
// ======функция обработки события (тротл вызывает функцию через промежуток времени 1с)
function onTimeUpdate(data) {
    console.log(data.seconds);
    // ====записываем текущее время в локалсторидж==== 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}
    //  ===функция возвращает сохраненную позицию из локалсторидж
function setPlaybackPosition() {
    // ==переменная сейвдДата хранит данные из локалсторидж как строку
    const savedData = localStorage.getItem(STORAGE_KEY);
    console.log(savedData);
    // =====преобразуем  строку в валидные данные (число)
    try {
        const parseddData = JSON.parse(savedData);
        console.log(parseddData);
             // проверяем - не пустой ли сейвДата, если он есть, то дальше с ним работаем. Если его нету - ничего не делаем
        if (savedData) {
            // ====возобнавляем воспроизвидение плеера с сохраненной позиции
            player.setCurrentTime(parseddData);
            player.play();
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
 // console.log("✅ This is fine, we handled parse error in try...catch");
}

   

    