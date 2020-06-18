/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// Stores the unordered list of links
const navList = document.getElementById('navbar__list');
// captures the sections to be used to create the navBar links
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function scrollTo(target) {
  $('html, body').animate({
    scrollTop: target ? target.offset().top : 0
  },'slow');
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the navigation bar, loop over the sections and create an unordered list and links
const navBar = () => {
  let navUI = '';
  navUI.onclick = () => scrollTo();
  sections.forEach(section => {
    const sectionNumber = section.id;
    const sectionName = section.dataset.nav;
    navUI += `<li><a class="menu__link" href="#${sectionNumber}">${sectionName}</a></li>`;
    navList.onclick = () => scrollTo($(`#${section.id}`));
  });
  // appends the newly built unordered list and links to the site
  navList.innerHTML = navUI;
}
// runs the newly built navBar function which creates the navigation bar
navBar();

// Add class 'active' to section when near top of viewport



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
