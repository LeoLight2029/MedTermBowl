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

const questions = [
    'Name an example of every level of body organization from the nervous system',
    'What is the name of the long tail-like structure found in a neuron?',
    'What are the two types of neurons?',
    'What are the two divisions of the peripheral nervous system?',
    'The sympathetic nerves can be found in which part of the PNS?',
    'Which part of the nervous system controls voluntary movement?',
    'What is the name of the organ which coordinates most of the body’s activities?',
    'What is the name of the disease which has loss of memory as an effect of the disease?',
    'How many pairs of spinal nerves are there?',
    'How many pairs of cranial nerves are there?',
    'What does the parasympathetic nervous system control?',
    'What do motor neurons do?',
    'Which part of a neuron has branched projections?',
    'Which part of a neuron forms synapses?',
    'Which part of the nervous system provides information about touch, temperature, and pain?',
    'What is the function of the spinal cord in the body?',
    'True or False: a brain tumor can be either malignant or benign',
    'True or False: A brain tumor can incite other diseases based on the location of the tumor',
    'What does the sympathetic nervous system control?',
    'What muscles are directly involved in the somatic system?',
    'Which part of the neuron contains the major organelles in the body?',
    'What are the two main divisions of the nervous system?',
    'True or False: A brain tumor is intracranial',
    'True or False: Alzheimer’s is spelled A-l-z-e-h-i-m-e-r-’-s D-i-s-e-a-s-e?'
]
const answers = [
    '(Neural cells, nervous tissue, spinal cord, nervous system)',
    'axon',
    'motor and sensory',
    'ANS and somatic',
    'ANS',
    'somatic',
    'brain',
    'Alzheimer’s Disease',
    '31',
    '12',
    'rest-or-digest reaction',
    'send responses from brain to muscles',
    'dendrites',
    'axons',
    'somatic',
    'acts as a pathway for electrical impulses',
    'T',
    'T',
    'fight-or-flight reaction',
    'skeletal or striated muscle',
    'nerve cell body',
    'CNS and PNS',
    'T',
    'F'
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

function correct(){
    storedNumber++
    localStorage.setItem('questionNumber', storedNumber)
    localStorage.setItem('correctState', 'correct')
    window.location.href='../selectorPage/selector.html'
}
function incorrect(){
    storedNumber++
    localStorage.setItem('questionNumber', storedNumber)
    localStorage.setItem('correctState', 'incorrect')
    window.location.href='../selectorPage/selector.html'
    
}
function reveal(){
    document.getElementById('revealedAnswer').classList.add('on')
}
