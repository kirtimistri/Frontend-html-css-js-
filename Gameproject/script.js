score = 0;
cross = true;
audiogo = new Audio('gameover.mp3');
audiobg = new Audio('bg.mp3');
setTimeout(() => {
    audiobg.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("keycode is: ", e.keyCode);
    if (e.keyCode == 38) {
        let shin = document.querySelector('.shin');
        shin.classList.add('animateshin');
        setTimeout(() => {
            shin.classList.remove('animateshin');
        }, 700);
    }
    if (e.keyCode == 39) {
        let shin = document.querySelector('.shin');
        let shinx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
        shin.style.left = shinx + 130 + "px";
    }
    if (e.keyCode == 37) {
        let shin = document.querySelector('.shin');
        let shinx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
        shin.style.left = (shinx - 130) + "px";
    }
}
setInterval(() => {
    let shin = document.querySelector('.shin');
    let gameover = document.querySelector('.gameover');
    let mom = document.querySelector('.mom');
    let dx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(shin, null).getPropertyValue('top'));
    let ox = parseInt(window.getComputedStyle(mom, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(mom, null).getPropertyValue('top'));

    let offsetx = Math.abs(dx - ox);
    let offsety = Math.abs(dy - oy);

    if (offsetx < 30 && offsety < 70) {
        gameover.style.visibility = 'visible';
        console.log("Game Over");
        mom.classList.remove('momani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audiobg.pause();
        }, 1000);
    } else if (offsetx < 50 && cross) {
        score += 1;
        console.log('score', score)
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let anidur = parseFloat(window.getComputedStyle(mom, null).getPropertyValue('animation-duration'));
            let newdur = anidur - 0.1;
            mom.style.animationDuration = newdur + 's';
            console.log('new animation duration ', newdur);
        }, 500);
    }
}, 10);
document.querySelector('.exit').addEventListener('click', function() {
    if (confirm("Are you sure you want to close the window?")) {
        window.close();}
    })
document.querySelector('.Retry').addEventListener('click', function() { location.reload();})
function updatescore(score) {
    let scorecount = document.querySelector('#scorecount');
    scorecount.innerHTML = "Your Score: " + score;
}