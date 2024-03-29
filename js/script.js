


document.addEventListener("DOMContentLoaded", function () {
    const heroElement = document.querySelector(".hero-animated");
    heroElement.classList.add("fadeIn");
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    const scrollY = window.scrollY;
    const scrollThreshold = 80;
    const scrollTopBtn = document.getElementById("scroll-top-btn") 
    
    if (scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
        scrollTopBtn.classList.add("active")
    } else {
        navbar.classList.remove('scrolled');
        scrollTopBtn.classList.remove("active")
    }
});

function goToPage(pageUrl) {
  window.location.href = pageUrl;
}

function goToLocation(){
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

function showTab(tabId) {
  document.querySelectorAll('.services-tab-content').forEach(tabContent => tabContent.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  
}


function showTab(tabId,pillId) {
  document.querySelectorAll('.services-tab-content').forEach(tabContent => tabContent.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.nav-pills').forEach(navPill => navPill.classList.remove('active'));
  document.getElementById(pillId).classList.add('active');
}


function mobileNav(){
  var x = document.getElementById("nav-mobile");
  x.classList.add('active')
}

function removeMobileNav(){
  var x = document.getElementById("nav-mobile");
  x.classList.remove('active')
}



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

  // Initial check on page load
  checkScroll();

  // Listen for scroll events
  document.addEventListener("scroll", function () {
    checkScroll();
  });
});

function toggleDropdown(menuId) {
  var dropdown = document.getElementById('nav-dropdown-' + menuId);

  if (!dropdown.classList.contains('active')) {
    dropdown.classList.add('active');
  } else {
    dropdown.classList.remove('active');
  }
}

function toggleDropdown2(menuId, parentId) {
  var dropdown = document.getElementById('nav-dropdown-' + menuId);
  var parentDropdown = document.getElementById('nav-dropdown-' + parentId);

  if (parentDropdown) {
    parentDropdown.classList.remove('active');
  }

  if (!dropdown.classList.contains('active')) {
    dropdown.classList.add('active');
  } else {
    dropdown.classList.remove('active');
  }
}

