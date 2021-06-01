score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
  console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 38) {
    Dino = document.querySelector('.Dino');
    Dino.classList.add('animate-Dino');
    setTimeout(() => {
      Dino.classList.remove('animate-Dino')
    }, 700);
  }
  if (e.keyCode == 39) {
    Dino = document.querySelector('.Dino');
    dinox = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
    Dino.style.left = dinox + 112 + "px";
  }
  if (e.keyCode == 37) {
    Dino = document.querySelector('.Dino');
    dinox = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
    Dino.style.left = (dinox - 112) + "px";
  }
}


setInterval(() => {
  Dino = document.querySelector('.Dino');
  GameOver = document.querySelector('.GameOver');
  Obstacle = document.querySelector('.Obstacle');

  dx = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('top'));

  ox = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY)
  if (offsetX < 73 && offsetY < 52) {
    GameOver.innerHTML = "Game Over - Reload to Play Again"
    Obstacle.classList.remove('obstacle-Ani')
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(window.getComputedStyle(Obstacle, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.1;
      Obstacle.style.animationDuration = newDur + 's';
      console.log('New animation duration: ', newDur)
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score :" + score
}
