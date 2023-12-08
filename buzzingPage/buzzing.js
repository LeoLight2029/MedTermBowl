//STAR
function createRandomStar(className, duration, delay) {
  const star = document.createElement('div');
  star.className = 'star ' + className;
  const size = Math.random() * 2;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  if (className === 'moving-star') {
      star.style.animation = `fall ${duration}s linear ${delay}s infinite`;
  }
  document.body.appendChild(star);
}

function removeStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.remove());
}

function createRandomStars(count, className) {
  for (let i = 0; i < count; i++) {
      const duration = Math.random() * 20 + 30;
      const delay = Math.random() * 40;
      createRandomStar(className, duration, delay);
  }
}

createRandomStars(500, 'still-star');
createRandomStars(250, 'moving-star');

window.addEventListener('resize', function() {
  removeStars();
  createRandomStars(500, 'still-star');
  createRandomStars(250, 'moving-star');
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
