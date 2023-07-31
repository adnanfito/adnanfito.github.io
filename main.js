const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const light = document.querySelector('.light-theme');
const dark = document.querySelector('.particles');
const lightProfile = document.querySelector('.light-profile');
const darkProfile = document.querySelector('.dark-profile');

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    moon.classList.add('hidden');
    sun.classList.remove('hidden');
    light.classList.add('hidden');
    dark.classList.remove('hidden');
    lightProfile.classList.add('hidden');
    darkProfile.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    localStorage.removeItem('theme');
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
    dark.classList.add('hidden');
    light.classList.remove('hidden');
    darkProfile.classList.add('hidden');
    lightProfile.classList.remove('hidden');
  }
});

const hamburger = document.querySelector('#hamburger');
const content = document.querySelector('.hamburger-content');

hamburger.addEventListener('click', function () {
  if (hamburger.checked) {
    content.style.right = '0';
  } else {
    content.style.right = '-50rem';
  }
});

var messageArray = ['Front End Developer'];
var textPosition = 0;
var speed = 150;

typewriter = () => {
  document.querySelector('.status').innerHTML = messageArray[0].substring(0, textPosition) + "<span class='animate-blinker'>\u007C</span>";
  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
  // else {
  //   textPosition = 0;
  //   setTimeout(typewriter, speed);
  // }
};
window.addEventListener('load', typewriter);
