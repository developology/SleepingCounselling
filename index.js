function hamburger() {
  var navbar = document.querySelector(".navbar");
  var items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    item.classList.toggle("active");
  });
}

// Function to reset the navbar and content position when closing the menu
function resetNavbar() {
  var navbar = document.querySelector(".navbar");
  var items = document.querySelectorAll(".item");
  var contentBelowNavbar = document.querySelector(".landing-page");

  // Set height to auto to retain the original background color of the navbar
  navbar.style.height = "auto";

  items.forEach(function (item) {
    item.classList.remove("active");
  });

  contentBelowNavbar.style.top = "0";
}

// Close the mobile menu when a menu item is clicked
var menuItems = document.querySelectorAll(".menu li a");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    resetNavbar();
  });
});

// Close the mobile menu when clicking outside the menu
document.addEventListener("click", function (event) {
  var target = event.target;
  var navbar = document.querySelector(".navbar");

  if (!navbar.contains(target)) {
    resetNavbar();
  }
});
