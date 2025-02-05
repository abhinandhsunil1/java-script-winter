// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');
// Constants for p tag to display query selectors
const noun1Display = document.getElementById('choosenNoun1');
const verbDisplay = document.getElementById('choosenVerb');
const adjectiveDisplay = document.getElementById('choosenAdjective');
const noun2Display = document.getElementById('choosenNoun2');
const settingDisplay = document.getElementById('choosenSetting');
const storyDisplay = document.getElementById('story');
const studentInfoDisplay = document.getElementById('studentId');
// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
// Variables for pre-defined arrays
const nouns1 = ["The cat", "A dragon", "My neighbor", "An astronaut", "The teacher"];
const verbs = ["jumps", "runs", "flies", "eats", "sings"];
const adjectives = ["happy", "angry", "colorful", "mysterious", "giant"];
const nouns2 = ["apple", "mountain", "robot", "pizza", "book"];
const settings = ["in the park", "on the moon", "under the sea", "in a haunted house", "at the zoo"];
// Variables for count to grab array elements
let storyParts = ["", "", "", "", ""];
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    storyParts[0] = nouns1[Math.floor(Math.random() * nouns1.length)];
    noun1Display.innerText = storyParts[0];
}

function verb_on_click() {
    storyParts[1] = verbs[Math.floor(Math.random() * verbs.length)];
    verbDisplay.innerText = storyParts[1];
}

function adjective_on_click() {
    storyParts[2] = adjectives[Math.floor(Math.random() * adjectives.length)];
    adjectiveDisplay.innerText = storyParts[2];
}

function noun2_on_click() {
    storyParts[3] = nouns2[Math.floor(Math.random() * nouns2.length)];
    noun2Display.innerText = storyParts[3];
}

function setting_on_click() {
    storyParts[4] = settings[Math.floor(Math.random() * settings.length)];
    settingDisplay.innerText = storyParts[4];
}

// concatenate the user story and display
function playback_on_click() {
    storyDisplay.innerText = storyParts.join(' ');
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    storyParts[0] = nouns1[Math.floor(Math.random() * nouns1.length)];
    storyParts[1] = verbs[Math.floor(Math.random() * verbs.length)];
    storyParts[2] = adjectives[Math.floor(Math.random() * adjectives.length)];
    storyParts[3] = nouns2[Math.floor(Math.random() * nouns2.length)];
    storyParts[4] = settings[Math.floor(Math.random() * settings.length)];
    noun1Display.innerText = storyParts[0];
    verbDisplay.innerText = storyParts[1];
    adjectiveDisplay.innerText = storyParts[2];
    noun2Display.innerText = storyParts[3];
    settingDisplay.innerText = storyParts[4];
    storyDisplay.innerText = storyParts.join(' ');
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

// Display student info on page load
window.onload = function() {
    studentInfoDisplay.innerText = "Abhinandh Sunil - Georgian College";
};
