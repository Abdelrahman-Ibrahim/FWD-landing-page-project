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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");




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
function buildNavbar(sections) {
    let ulElemnet = document.getElementById("navbar__list");
    let virtualDOM = new DocumentFragment();
    sections.forEach(section => {
        let liElemnet = document.createElement("li");
        let anchorElement = document.createElement("a");
        let itemNode = document.createTextNode(section.dataset.nav).textContent;
        anchorElement.href = `#${section.id}`;
        anchorElement.classList.add("menu__link");
        anchorElement.innerHTML = itemNode;
        liElemnet.appendChild(anchorElement);
        virtualDOM.append(liElemnet);
    });
    ulElemnet.appendChild(virtualDOM);
}


// Add class 'active' to section when near top of viewport
function setActiveSection() {
    let theActiveSection = "";
    sections.forEach(section => {
        let sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top > 0 && sectionPosition.top <= 200) {
            theActiveSection = section;
        }
        section.classList.remove("active");
    });
    if (theActiveSection !== "" || null) {
        theActiveSection.classList.add("active");
    }
}


// Scroll to anchor ID using scrollTO event
function onClickNavLink(e) {
    if (e.target.nodeName === "A") {
        e.preventDefault();
        document.querySelector(e.target.hash).scrollIntoView({ behavior: "smooth" });
    }
}




/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNavbar(sections);

// Scroll to section on link click
document.getElementById("navbar__list").addEventListener("click", onClickNavLink);

// Set sections as active
window.addEventListener("scroll", setActiveSection)


