// Function to add fadeIn class to hero element when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const heroElement = document.querySelector(".hero-animated");
  heroElement.classList.add("fadeIn");
});

// Function to handle scroll events and apply styling to the navbar and scroll-to-top button
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  const scrollY = window.scrollY;
  const scrollThreshold = 60;
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  if (scrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add("active")
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove("active")
  }
});

// Function to scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function to show a specific tab content by ID
function showTab(tabId, pillId) {
  document.querySelectorAll('.services-tab-content').forEach(tabContent => tabContent.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.nav-pills').forEach(navPill => navPill.classList.remove('active'));
  document.getElementById(pillId).classList.add('active');
}

// Function to show a specific tab content by ID (overloaded function without pillId)
function showTab(tabId) {
  document.querySelectorAll('.services-tab-content').forEach(tabContent => tabContent.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Function to display the mobile navigation menu
function mobileNav() {
  var x = document.getElementById("nav-mobile");
  x.classList.add('active')
}

// Function to remove the mobile navigation menu
function removeMobileNav() {
  var x = document.getElementById("nav-mobile");
  x.classList.remove('active')
}

// Function to add active class to sections with fade-in-ani class when scrolled into view
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-ani");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("active");
      }
    });
  }

  checkScroll();

  document.addEventListener("scroll", function () {
    checkScroll();
  });
});
