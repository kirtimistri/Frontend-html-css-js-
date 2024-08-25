score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("keycode is: ", e.keyCode)
    if (e.keyCode == 38) {
        shin = document.querySelector('.shin');
        shin.classList.add('animateshin');
        setTimeout(() => {
            shin.classList.remove('animateshin')
        }, 700);
    }
    if (e.keyCode == 39) {
        shin = document.querySelector('.shin');
        shinx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
        shin.style.left = shinx + 130 + "px";
    }
    if (e.keyCode == 37) {
        shin = document.querySelector('.shin');
        shinx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
        shin.style.left = (shinx - 130) + "px";
    }
}
setInterval(() => {
    shin = document.querySelector('.shin');
    gameover = document.querySelector('.gameover')
    mom = document.querySelector('.mom');
    dx = parseInt(window.getComputedStyle(shin, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(shin, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(mom, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(mom, null).getPropertyValue('top'));
    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    if (offsetx < 2 && offsety > 100) {
        gameover.style.visibility = 'visible';
        console.log("Game Over")
        mom.classList.remove('momani')
    }
    else if (offsetx < 50 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(()=>{
            cross=true;
        },1000);
        anidur=parseFloat(window.getComputedStyle(mom, null).getPropertyValue('animationduration'));
        newdur =anidur
    }
}, 10);
function updatescore(score) {
    scorecount.innerHTML = "Your Score: " + score;
}

