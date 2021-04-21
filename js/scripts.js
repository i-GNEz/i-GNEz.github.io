var h = document.documentElement,
b = document.body,
st = 'scrollTop',
sh = 'scrollHeight',
progress = document.querySelector('#progress'),
scroll;
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener('scroll', function() {

/*Refresh scroll % width*/
scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
progress.style.setProperty('--scroll', scroll + '%');

/*Apply classes for slide in bar*/
scrollpos = window.scrollY;

if (scrollpos > 10) {
    header.classList.add("bg-black-555");
    navcontent.classList.remove("bg-black-555");
    navcontent.classList.add("bg-black-555");
} else {
    header.classList.remove("bg-black-555");
    navcontent.classList.remove("bg-black-555");
    navcontent.classList.add("bg-black-555");

}

});


//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function() {
document.getElementById("nav-content").classList.toggle("hidden");
}