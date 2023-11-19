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


//button stuff
document.getElementById('randomizeTeam').addEventListener('click', function(){

const classmates = [
    "Veronica",
    "Lola",
    "Joyce",
    "N'Riyah",
    "River",
    "Zuri",
    "Amanda",
    "Ikshita",
    "Caitlin",
    "Ally",
    "Eliana",
    "Katalina",
    "Danielle",
    "Carrie",
    "Chloe"
];

function randomizeList(min, max) {
    const list = [];
    for (let i = min; i <= max; i++) {
    list.push(i);
    }
    for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
    }
    
const randomizedList = randomizeList(0, 14);

function teammaker(person_1, person_2){
    let team = randomizedList.slice(person_1,person_2)
    for(i=0;i<team.length;i++){
        team[i]=classmates[team[i]]
    }
    return team;
}
localStorage.setItem('randomizedList', JSON.stringify(teammaker(0, 15)));

    function displayTeam(teamId, teamMembers) {
        const teamElement = document.getElementById(`teammaker${teamId}`);
        teamElement.innerHTML = teamMembers.join('<br><br>');
    }

    displayTeam(1, teammaker(0, 5));
    displayTeam(2, teammaker(5, 10));
    displayTeam(3, teammaker(10, 15));
});

document.getElementById('start1').addEventListener('click', function(){
    window.location.href = 'gamePage/gamepage.html';
}); 
function buzzerPage(){
    window.location.href = 'buzzingPage/buzing.html';
}
function infoPage(){
    window.location.href = 'infoPage/info.html';
    localStorage.clear()
}