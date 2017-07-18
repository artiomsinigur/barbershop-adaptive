var linkUser = document.querySelector(".main-nav__user");
var modalLogin = document.querySelector(".modal-login");
var close = document.querySelector(".modal-login__close");
var closeCross = document.querySelector(".modal-login__cross");
var overlay = document.querySelector(".modal-overlay");
var closeOverlay = document.querySelector(".modal-overlay");
var focus = modalLogin.querySelector("[name=login]");
var mainNav = document.querySelector(".main-nav");
var mainNavButton = document.querySelector(".main-nav__toggle");

linkUser.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.add("modal-login--show");
    focus.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.remove("modal-login--show");
    overlay.classList.remove("modal-overlay--show");
});

closeCross.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.remove("modal-login--show");
    overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27); {
        if (modalLogin.classList.contains("modal-login--show")) {
            modalLogin.classList.remove("modal-login--show");
            overlay.classList.remove("modal-overlay--show");
        }
    }
});

linkUser.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay--show");
});

closeOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.remove("modal-login--show");
    overlay.classList.remove("modal-overlay--show");
});

// Main navigation
mainNavButton.addEventListener("click", function(event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--show");
});