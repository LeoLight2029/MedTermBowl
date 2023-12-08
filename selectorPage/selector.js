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
function changeHoverColor() {
    for(i=1;i<4;i++){
        if (localStorage.getItem(`player${i}hearts`)==='../images/0hearts.png') {
        document.getElementById(`teambutton${i}`).classList.add('customHover');
        } else {
        document.getElementById(`teambutton${i}`).classList.remove('customHover');
        }
    }
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
function team(teamNumber){
    if(localStorage.getItem(`player${teamNumber}hearts`)==='../images/2hearts.png' || localStorage.getItem(`player${teamNumber}hearts`)==='../images/1hearts.png'){
        if(localStorage.getItem('correctState')==='correct'){
            addCharge(teamNumber)
            window.location.href='../gamePage/gamepage.html'
        }else if(localStorage.getItem('correctState')==='incorrect'){
            removeCharge(teamNumber)
            window.location.href='../gamePage/gamepage.html'
        }
    }else{
        return;
    }
}