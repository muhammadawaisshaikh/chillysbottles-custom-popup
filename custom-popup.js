// faded simple popups js
function showPopup() {
    document.querySelector(".popup").classList.add("show");
}

function closePopup() {
    document.querySelector(".popup").classList.remove("show");
}

// slide popups js
function showPopupSlide() {
    document.querySelector(".popup-slide").classList.add("show");
    setTimeout(function(){ 
        // getting visible left section
        document.querySelector(".popup-slide .slide-left").classList.add("show");
        // getting visible right section
        document.querySelector(".popup-slide .slide-right").classList.add("show");
    }, 100);
}

function closeSlidePopup() {
    document.querySelector(".slide-left.show").classList.remove("show");
    document.querySelector(".slide-right.show").classList.remove("show");
}