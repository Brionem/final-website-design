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
    // Initialize Splide carousels
    new Splide('#image-carousel', { type: 'loop' }).mount();
    new Splide('#second-image-carousel', { type: 'loop' }).mount();
    new Splide('#third-image-carousel', { type: 'loop' }).mount();
    new Splide('#fourth-image-carousel', { type: 'loop' }).mount();
});