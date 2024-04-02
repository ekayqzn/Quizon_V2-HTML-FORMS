document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".menu");

  dropdownToggle.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of button click
    dropdownMenu.classList.toggle("open");
  });
});



/*
const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", () => {
  const dropdownMenu = document.querySelector("#dropdown > .menu");

  dropdownMenu.classList.toggle("open");
  dropdownToggle.classList.toggle("open");
});
*/
