//DARK MODE
document.getElementById('darkMode').addEventListener('click',()=>{
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.setAttribute('data-bs-theme','light')
  }
  else {
      document.documentElement.setAttribute('data-bs-theme','dark')
  }
})

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