var html = document.querySelector('html');
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener("change", function () {
    html.classList.toggle('dark-mode');
    localStorage.setItem('theme', html.classList.contains('dark-mode') ? 'dark' : 'light');
})

if (localStorage.getItem('theme') === 'dark') {
    html.classList.toggle('dark-mode');
    darkModeToggle.checked = true;
} else {
    darkModeToggle.checked = false;
}


var body = document.querySelector('body');
var mainMenuToggle = document.getElementById('main-menu-toggle');
const mainMenu = document.getElementById('main-menu');



mainMenuToggle.addEventListener("click", function () {
    body.classList.toggle('no-scroll');
    mainMenu.classList.toggle('open');
})

var siteInfoToggle = document.getElementById('site-info-toggle');
const siteInfo = document.getElementById('site-info');
const siteInfoOverlay = document.getElementById('site-info-overlay');

siteInfoToggle.addEventListener("click", function () {
    siteInfo.classList.toggle('open');
    siteInfoOverlay.classList.toggle('open');
})

siteInfoOverlay.addEventListener("click", function () {
    siteInfoOverlay.classList.remove('open');
    siteInfo.classList.remove('open');
})