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

//get top position of the section 

function getPosition (section) {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class and set background to default
function disableActive (section) {
    section.classList.remove('your-active-class');
    section.style.background= "linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

//add active class and set background to red

function enableActive (conditional, section) {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.backgroundColor= "red";
    }
}

//function that activates the active class on the viewed section

function activateSection(){
    for (section of sections){
        const position = getPosition(section);
        
        viewing = () => position < 150 && position >= -150;
        
        disableActive (section);
        enableActive (viewing(),section);
    };

};

window.addEventListener('scroll', activateSection);

// Scroll to anchor ID using scrollTO event

function scroll(element) {
    const { x, y, top } = element.getBoundingClientRect();
    window.scrollTo({
      top: document.documentElement.scrollTop + y,
      left: x,
    })
  }

  function navItemClick(navEvent) {
    const SectionID = navEvent.target.dataset.sectionid;
    section = document.querySelector(`#${SectionID}`);
    navItem = navEvent.target;
    scroll(activeSection)
  }

/**
 * End Main Functions
 * Begin Events
 * 
*/



