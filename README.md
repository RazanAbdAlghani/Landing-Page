# Active Section Highlight Project

## Project Description
This project dynamically highlights the section of a webpage that is currently in the viewport while scrolling. It also builds a navigation menu that allows smooth scrolling to different sections of the page. The active section and the corresponding menu item are highlighted to enhance user experience.

## Usage
1. **Navigation Menu**: The navigation menu is dynamically built based on the sections present in the HTML document. Each menu item allows the user to scroll smoothly to the corresponding section.

2. **Smooth Scrolling**: Clicking on a navigation link scrolls the page smoothly to the respective section.

3. **Active Section Highlight**: The section that is most visible in the viewport is highlighted with a special class (`your-active-class`). The corresponding navigation link is also highlighted.

## Dependencies
This project uses only vanilla JavaScript and does not have any external dependencies. Simply include the JavaScript code within a `<script>` tag in your HTML file.

## JavaScript Code

```javascript
let navUl = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');

function buildMenu() {
    for (let i = 1; i <= 4; i++) {
        let item = document.createElement('li');
        if (i == 1)
            item.innerHTML = `<li><a href=#section${1} id=link${1} class="menu__link your-active-class"> section ${1} </a></li>`;
        else
            item.innerHTML += `<li><a href=#section${i} id=link${i} class="menu__link "> section ${i} </a></li>`;
        navUl.appendChild(item);
    }
}

buildMenu();

function scrollIntoSection(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    const section = document.getElementById(sectionId.slice(1));
    section.scrollIntoView({ behavior: "smooth" });
}

function getActiveSection() {
    const sections = document.querySelectorAll('section');
    let activeSection = null;
    let maxVisibleHeight = 0;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            activeSection = section;
        }
    });

    return activeSection;
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const activeSection = getActiveSection();

    sections.forEach(section => {
        if (section === activeSection) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

let links = document.querySelectorAll('a');
links.forEach(link => link.addEventListener('click', scrollIntoSection));
updateActiveSection();

Running the Project
To run the project, simply open the HTML file in a web browser. The navigation menu will be dynamically built, and the active section will be highlighted as you scroll through the page.

License
This project is open-source and available under the MIT License.