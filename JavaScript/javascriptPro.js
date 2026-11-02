// Find the Back to Top button
const backToTop = document.getElementById("backToTop");


// When the button is clicked
backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});