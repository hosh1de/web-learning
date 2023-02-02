let phrases = [
    'computer science',
    'markdown',
    'html',
    'css',
    'figma',
    'javascript',
    'json',
    'ajax',
    'npm',
    'pug',
    'sass',
    'emmet',
    'bootstrap',
    'gulp',
    'makefile',
    'es6+',
    'babel',
    'eslint',
    'prettier',
    'webpack',
    'jquery',
    'css-in-js',
    'react',
    'angular',
    'vue',
    'visual studio code',
    'debugging',
    'chrome devtools',
    'postman',
    'ssh',
    'git',
    'regular expressions',
    'canvas',
    'optimization',
    'code commenting',
    'touch typing',
    'semantic html',
    'seo',
    'bem',
    'design principles',
    'refactoring'
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

for (let i = 0; i <= 4; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i]);
}

button.addEventListener('click', function () {
    smoothly(phrase, 'textContent', getRandomElement(phrases));
});