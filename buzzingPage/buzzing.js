//STARS
function createRandomStar() {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(star);
}

function removeStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.remove());
}

function createRandomStars(count) {
  for (let i = 0; i < count; i++) {
      createRandomStar();
  }
}

  createRandomStars(1000);

window.addEventListener('resize', function() {
  removeStars();
  createRandomStars(1500); 

});
let isSpacePressed = false;

function playBuzzingSound() {
  buzzingAudio.play();
}

function stopBuzzingSound() {
  buzzingAudio.pause();
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !isSpacePressed) {
    isSpacePressed = true;
    playBuzzingSound();
    document.getElementById('box').classList.add('active')
    setTimeout(function() {
      document.getElementById('box').classList.remove('active') 
      isSpacePressed = false;
    }, 1300);
  }
});
