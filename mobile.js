document.addEventListener("DOMContentLoaded", (e) => {

    const dropdownMobile = () => {
        let btn = document.getElementById("nav-dropdown");
        let nav = document.querySelector(".nav-top");
        btn.addEventListener("click", (click) => {
            click.preventDefault();
            if (nav.className === "nav-top") {
                nav.className += " nav-top-mobile";
            } else {
                nav.className = "nav-top";
            }
        })
    }

    dropdownMobile();


})