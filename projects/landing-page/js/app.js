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

//variables to store navbar and sections array

const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//function to add list items to unordered list

function createNavbar () {
    //empty navItem
    let navItem = '';

    for (let section of sections){
        //store id and data-nat in variables
        const sectionID= section.id;
        const sectionName=section.dataset.nav;

        // add li with class and specific id and data-nat as Section Name to empty navItem
        navItem += `<li><a class= "menu__link" href="#${sectionID}">${sectionName}</a></li>`;
    };
    //append navItem to navbar 
    navbar.innerHTML = navItem;
};

createNavbar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


