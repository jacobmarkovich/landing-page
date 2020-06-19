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
const navList = document.getElementById("navbar__list");
// captures the sections to be used to create the navBar links
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// adds a listener to the links in which it prevents the html from scrolling so it can make it smooth.
const scroll = () => {
    let navLinks = document.getElementsByTagName("a");
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", (event) => {
            event.preventDefault();
            const targetID = event.currentTarget.getAttribute("href");
            window.scrollTo({
                top: document.querySelector(targetID).offsetTop,
                behavior: "smooth",
            });
        });
    }
};
// checks which section is in the viewport
const activateElem = () => {
    maxSection = sections[0];
    minVal = 1000000;
    for (item of sections) {
        let padding = item.getBoundingClientRect();
        if ((padding.top > -400) & (padding.top < minVal)) {
            minVal = padding.top;
            maxSection = item;
        }
    }
    return maxSection;
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the navigation bar, loop over the sections and create an unordered list and links
const navBar = () => {
    let navUI = "";
    sections.forEach((section) => {
        const sectionNumber = section.id;
        const sectionName = section.dataset.nav;
        navUI += `<li><a class="menu__link" href="#${sectionNumber}">${sectionName}</a></li>`;
    });
    navList.innerHTML = navUI;
};

// Add class 'active' to section when near top of viewport and removes that class when not in the viewport
const addActive = () => {
    window.addEventListener("scroll", () => {
        let section = activateElem();
        section.classList.add("your-active-class");
        for (let item of sections) {
            if ((item.id != section.id) & item.classList.contains("your-active-class")) {
                item.classList.remove("your-active-class");
            }
        }
    });
};
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
navBar();
// Scroll to section on link click
scroll();
// Set sections as active
addActive();
