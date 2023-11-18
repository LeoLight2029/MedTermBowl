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
function team(teamNumber){
    if(localStorage.getItem(`player${teamNumber}hearts`)==='../images/2hearts.png' || localStorage.getItem(`player${teamNumber}hearts`)==='../images/1hearts.png'){
        localStorage.setItem('teamSelected', teamNumber)
        window.location.href='../questionPage/question.html'
    }else{
        return;
    }
}