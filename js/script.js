// TOGGLE NAVIGATION
function toggle() {
  let button = document.getElementById('h-container');
  let nav = document.getElementById('navigation');
  button.classList.toggle('active')
  nav.classList.toggle('active')
}

// WORD CAROUSEL
const words = ['Dreamer', 'Problem solver', 'Team leader','Team player', 'Traveller', 'Culture sucker', 'Language addicted', 'Art enthusiast', 'Detail oriented'];
let counter = 0;
let word = document.getElementById('carousel-words');
setInterval(updateCarouselWords, 1500);
function updateCarouselWords() {
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length) {
    counter =0;
  }
}

const today = new Date();
const year = today.getFullYear();