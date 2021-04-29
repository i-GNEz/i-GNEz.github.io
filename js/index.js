if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}

var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('#progress'),
    scroll;
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener('scroll', function () { 
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
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

document.getElementById('nav-toggle').onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
}

$('#footerForm').submit(function(e) {
  e.preventDefault();
  $.ajax({
       type: 'POST',
       url: 'https://i-gnez.herokuapp.com/rcount',
       data: $(this).serialize(),
       complete: openClose('emailModal', 'List send sucessfully', 'Please check your inbox for further details')
  });
})


$(document).ready(function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});

function openClose(e, t, a) {
    var n = document.getElementById(e);
    message = n.getElementsByClassName("message")[0], title = n.getElementsByClassName("modalTitle")[0], message.innerHTML = a, title.innerHTML = t, "none" === n.style.display ? n.style.display = "block" : n.style.display = "none"
}