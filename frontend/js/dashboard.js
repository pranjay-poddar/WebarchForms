var elements = document.getElementsByClassName("container-list");

var i;

// Grid View and list view
document.querySelector(".grid-layout").addEventListener("click", function() {
    this.classList.toggle("fa-list")
    document.querySelector(".card-container").classList.remove("none");
    document.querySelector(".container-list").classList.add("none");
})

document.querySelector(".list-layout").addEventListener("click", function() {
    this.classList.toggle("fa-th-large")
    document.querySelector(".card-container").classList.add("none");
    document.querySelector(".container-list").classList.remove("none");
})





//* Hamburger
document.querySelector("#menu").addEventListener("click", function() {
    this.classList.toggle("fa-times");
    document.querySelector(".column").classList.toggle("toggle");
});