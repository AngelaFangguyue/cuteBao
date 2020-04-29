import string from './css.js'
import mobileString from  './mobileCSS'
const demo = document.querySelector('#demo');
const demo2 = document.querySelector('#demo2');
let n = 1;
let time = 50;
let id;

const player = {
    init: () => {
        if(window.document.documentElement.clientWidth>=500){
            demo.innerText = string.substr(0, n);
            demo2.innerHTML = string.substr(0, n);
        } else{
            demo.innerText = mobileString.substr(0, n);
            demo2.innerHTML = mobileString.substr(0, n);

        }

        player.play();
        player.bindEvents();
    },
    bindEvents: () => {
        document.querySelector('#btnPause').onclick = player.pause;
        document.querySelector('#btnPlay').onclick = () => {
            player.pause();
            player.play();
        }
        document.querySelector('#btnSlow').onclick = player.slow;
        document.querySelector('#btnNormal').onclick = player.normal;
        document.querySelector('#btnFast').onclick = player.fast;
    },
    run: () => {
        n += 1;
        if (n > string.length) {
            window.clearInterval(id);
            return
        }
        if(window.document.documentElement.clientWidth>=500){
            demo.innerText = string.substr(0, n);
            demo2.innerHTML = string.substr(0, n);
        } else{
            demo.innerText = mobileString.substr(0, n);
            demo2.innerHTML = mobileString.substr(0, n);
        }
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        id = setInterval(player.run, time)
    },
    pause: () => {
        window.clearInterval(id);
    },
    slow: () => {
        player.pause();
        time = 100;
        player.play();
    },
    normal: () => {
        player.pause();
        time = 50;
        player.play();
    },
    fast: () => {
        player.pause();
        time = 0;
        player.play();
    }
}

player.init();

