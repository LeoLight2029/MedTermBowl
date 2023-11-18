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

let winner = localStorage.getItem('winner')
let teams = JSON.parse(localStorage.getItem('randomizedList'))
console.log(teams)
if(winner=='1'){
    document.getElementById('winningteam').textContent=teams.slice(0,5).join(', ')
}else if(winner='2'){
    document.getElementById('winningteam').textContent=teams.slice(5,10).join(', ')
}else{
    document.getElementById('winningteam').textContent=teams.slice(10,15).join(', ')
}
function newGame(){
    localStorage.clear()
window.location.href = '../index.html';
}