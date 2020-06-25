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

//variables to store navbar item and sections array

const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// build the nav

function createNavbar () {

    //iteration over every section of sections that creates a list item and adds it to the navbar
    for (let section of sections){
        //store id and data-nat in variables
        const sectionID= section.id;
        const sectionName=section.dataset.nav;

        var a = document.createElement("a");
        var listItem = document.createElement("li");

        a.textContent=`${sectionName}`;
        a.setAttribute ('href',`#${sectionID}`);
        a.classList.add ('menu__link');

        listItem.appendChild(a);
        
        navbar.appendChild(listItem);
    };
    
};

createNavbar();

//get top position of the section 

function getPosition (section) {
    var position = section.getBoundingClientRect().top;
    return position;
};



//function that adds the active class if the section is in the viewport and removes it if it isn't and sets background apporpriatly

function activateSection(){
    for (section of sections){
        const position = getPosition(section);
        
        if(position < 150 && position >= -150){
            section.classList.add('your-active-class');
            section.style.backgroundColor= "red";
        } else {
            section.classList.remove('your-active-class');
             section.style.background= "linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
        };
    };
};

//listens to scroll event and uses the activateSection function
window.addEventListener('scroll', activateSection);


