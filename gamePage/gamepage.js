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

//TEAM HEARTS + CHARGES + OTHER FUNCTIONS 
function reset(){
    localStorage.clear();
}

//HEARTS
const teamHearts = [
  { id: 'hearts1', key: 'player1hearts' },
  { id: 'hearts2', key: 'player2hearts' },
  { id: 'hearts3', key: 'player3hearts' }
];

for (const element of teamHearts) {
    const storedHearts = localStorage.getItem(element.key);
    if (storedHearts) {
        document.getElementById(element.id).src = storedHearts;
    }else{
        localStorage.setItem(element.key, '../images/2hearts.png')
    }
}
function removeHeart(playerNumber){
    if(localStorage.getItem(`player${playerNumber}hearts`)=='../images/2hearts.png'){
        localStorage.setItem(`player${playerNumber}hearts`,'../images/1hearts.png')
        document.getElementById(`hearts${playerNumber}`).src=localStorage.getItem(`player${playerNumber}hearts`);
    } else if(localStorage.getItem(`player${playerNumber}hearts`)=='../images/1hearts.png'){
        localStorage.setItem(`player${playerNumber}hearts`,'../images/0hearts.png') 
        document.getElementById(`hearts${playerNumber}`).src=localStorage.getItem(`player${playerNumber}hearts`);
    }
}
//CHARGES
const teamCharge = [
    {id: 'charge1', key:'player1charge'},
    {id: 'charge2', key:'player2charge'},
    {id: 'charge3', key:'player3charge'}
]
for(const element of teamCharge){
    const storedCharge = localStorage.getItem(element.key)
    if(storedCharge){
        document.getElementById(element.id).src=storedCharge;
    }else{
        localStorage.setItem(element.key, '../images/0charge.png')
    }
}
//ATTACK
    function attack(number){
        localStorage.setItem(`player${number}charge`, '../images/0charge.png')
        document.getElementById(`charge${number}`).src=localStorage.getItem(`player${number}charge`)
        document.getElementById(`attack${number}`).style.display='none'
        if(number==1){
            document.getElementById('img2').classList.add('activated')
            document.getElementById('img3').classList.add('activated')
        }else if(number==2){
            document.getElementById('img1').classList.add('activated')
            document.getElementById('img3').classList.add('activated')
        }else{
            document.getElementById('img2').classList.add('activated')
            document.getElementById('img1').classList.add('activated')
        }
    }
function attacked(number){
    if(document.getElementById(`img${number}`).classList.contains('activated')){
        removeHeart(number)
        document.getElementById('img2').classList.remove('activated')
        document.getElementById('img1').classList.remove('activated')
        document.getElementById('img3').classList.remove('activated')
    }
}
for(i=1;i<4;i++){
    if(localStorage.getItem(`player${i}charge`)=='../images/2charge.png'){
        document.getElementById(`attack${i}`).style.display='inline'
    }
}
//OTHER
function repeatList(){
    const randomizedListString = localStorage.getItem('randomizedList');
    const randomizedList = JSON.parse(randomizedListString);
    console.log(randomizedList)
}
function goBack(){
    window.location.href = '../index.html';
}
function nextpage(){
    window.location.href = '../selectorPage/selector.html';
}
//WINNING
function checkCondition() {
    return Math.random() < 0.5;
}
var intervalId = setInterval(function() {
    if (checkCondition()) {
        if(localStorage.getItem('player2hearts')=='../images/0hearts.png' && localStorage.getItem('player3hearts')=='../images/0hearts.png'){
            localStorage.setItem('winner', 1)
            window.location.href = '../winningPage/winning.html';
            clearInterval(intervalId);
        }
        if(localStorage.getItem('player1hearts')=='../images/0hearts.png' && localStorage.getItem('player3hearts')=='../images/0hearts.png'){
            localStorage.setItem('winner', 2)
            window.location.href = '../winningPage/winning.html';
            clearInterval(intervalId);
        }
        
        if(localStorage.getItem('player2hearts')=='../images/0hearts.png' && localStorage.getItem('player1hearts')=='../images/0hearts.png'){
            localStorage.setItem('winner', 3)
            window.location.href = '../winningPage/winning.html';
            clearInterval(intervalId);
        }
    }
}, 1);

