//STARS
function createRandomStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2; // Random size between 0 and 2px
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

const questions = [
    'hi',
    'hello',
    'ur mom'
]
const answers = [
    'bye',
    'goodbye',
    'ur dad'
]

let storedNumber = localStorage.getItem('questionNumber')
if(storedNumber){
    document.getElementById('question').textContent=questions[storedNumber]
    document.getElementById('revealedAnswer').textContent=answers[storedNumber]
}else{
    localStorage.setItem('questionNumber', 0)
    document.getElementById('question').textContent=questions[localStorage.getItem('questionNumber')]
    document.getElementById('revealedAnswer').textContent=answers[localStorage.getItem('questionNumber')]
}

function addCharge(playerNumber){
    if(localStorage.getItem(`player${playerNumber}charge`)=='../images/0charge.png'){
        localStorage.setItem(`player${playerNumber}charge`,'../images/1charge.png')
    }else if(localStorage.getItem(`player${playerNumber}charge`)=='../images/1charge.png'){
        localStorage.setItem(`player${playerNumber}charge`,'../images/2charge.png')
    }
}
function removeCharge(playerNumber){
    if(localStorage.getItem(`player${playerNumber}charge`)!='../images/0charge.png'){
        localStorage.setItem(`player${playerNumber}charge`,'../images/0charge.png')
    }
}

function correct(){
    storedNumber++
    localStorage.setItem('questionNumber', storedNumber)
    addCharge(localStorage.getItem('teamSelected'))
    window.location.href='../gamePage/gamepage.html'
}
function incorrect(){
    storedNumber++
    localStorage.setItem('questionNumber', storedNumber)
    removeCharge(localStorage.getItem('teamSelected'))
    window.location.href='../gamePage/gamepage.html'
    
}
function reveal(){
    document.getElementById('revealedAnswer').classList.add('on')
}
