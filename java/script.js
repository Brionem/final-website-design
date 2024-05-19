console.log("hello")

if(jQuery) {
    console.log("jquery loaded")
}

else {
    console.log("no jquery")
}

let mobileMenuOpen=false;

$("#mobile-menu-button").click(function() {

        if (mobileMenuOpen == false) {
        $("#main-menu").removeClass("display-none-mobile");
        mobileMenuOpen = true; 
        $("#mobile-menu-text").text("Close");
        $("#mobile-menu-icon").attr("src", "assets/images/close.svg");

    }
    
    else {
        $("#main-menu").addClass("display-none-mobile");
        mobileMenuOpen = false; 
        $("#mobile-menu-text").text("Menu");
        $("#mobile-menu-icon").attr("src", "assets/images/menu.svg");
    }

});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the first carousel
    new Splide('#image-carousel', {
        type: 'loop' // You can add additional options here
    }).mount();

    // Initialize the second carousel
    new Splide('#second-image-carousel', {
        type: 'loop' // You can add additional options here
    }).mount();
    
});

// Initialize the third carousel
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#third-image-carousel', {
        type: 'loop'
    }).mount();
});

// Initialize the fourth carousel
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#fourth-image-carousel', {
        type: 'loop'
    }).mount();
});

