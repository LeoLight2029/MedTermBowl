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