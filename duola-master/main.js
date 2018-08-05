!function () {
    let flag = true;
    let player = document.querySelector('.music');
    player.addEventListener('click',function () {
        if (flag) {
            document.querySelector('audio').pause();
            player.classList.remove('play');
            player.classList.add('pause');
            flag = false;
        } else {
            document.querySelector('audio').play();
            player.classList.remove('pause');
            player.classList.add('play');
            flag = true;
        }
    })
}();
!function () {
    let info = document.querySelector('#info');
    let container = document.querySelector('#container');
    let paper = document.querySelector('#paper');
    let style = document.querySelector('#style');
    let n = 1;
    let timer;
    timer = setTimeout(function WriteCode() {
        paper.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
        style.innerHTML = code.substring(0, n);
        paper.scrollTop = paper.scrollHeight;
        n += 7;
        if (n < code.length) {
            timer = setTimeout(WriteCode, 1);
        } 
    }, 1)
}();