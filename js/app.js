
/**
 * Define Global Variables
 * 
*/
// start with holding empty navbar ul (menu)
let navUl = document.getElementById('navbar__list');

// get all sections
let sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Build menu 
function buildMenu(){
   for(let i=1; i<=4 ;i++){
      item= document.createElement('li');
      if(i==1)
      item.innerHTML=`<li><a href=#section${1} id=link${1} class="menu__link your-active-class"> section ${1} </a></li>`;
   else
   item.innerHTML+=`<li><a href=#section${i} id=link${i} class="menu__link "> section ${i} </a></li>`;
   navUl.appendChild(item);
   }
}


/**
 * End Helper Functions*/

// build the nav
buildMenu();


// Scroll to anchor ID using scrollTO event
function scrollIntoSection (event){
   event.preventDefault();


  const sectionId= event.target.getAttribute('href');

  const section= document.getElementById(sectionId.slice(1));

//   To verify
//   console.log(section);

  section.scrollIntoView(  {behavior : "smooth" });

}

// Add class 'your-active-class' to section when near top of viewport

    
        // Function to determine which section is most visible in the viewport
        function getActiveSection() {
         const sections = document.querySelectorAll('section'); // Get all sections
         let activeSection = null; // Variable to store the most visible section
         let maxVisibleHeight = 0; // Variable to store the maximum visible height

         sections.forEach(section => {
             const rect = section.getBoundingClientRect(); // Get the position of the section relative to the viewport
             const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0); // Calculate the visible height of the section

             // Check if this section is more visible than the current most visible section
             if (visibleHeight > maxVisibleHeight) {
                 maxVisibleHeight = visibleHeight; // Update the maximum visible height
                 activeSection = section; // Update the most visible section
             }
         });

         return activeSection; // Return the most visible section
     }

     // Function to update the active section
     function updateActiveSection() {
         const sections = document.querySelectorAll('section'); // Get all sections
         const activeSection = getActiveSection(); // Get the most visible section

         sections.forEach(section => {
             // Add the 'your-active-class' class to the most visible section and remove it from others
             if (section === activeSection) {
                 section.classList.add('your-active-class'); // Highlight the active section
             } else {
                 section.classList.remove('your-active-class'); // Remove highlight from inactive sections
             }
         });
     }

     // Add event listeners to update the active section on scroll and resize
     window.addEventListener('scroll', updateActiveSection);
     window.addEventListener('resize', updateActiveSection);

     // Initial check to highlight the active section when the page loads
    


/**
 * End Main Functions
 * Begin Events
 * 
*/
// when click on link (event)
let links= document.querySelectorAll('a');
links.forEach(link=> link.addEventListener('click', scrollIntoSection));

// Set sections as active
updateActiveSection();



   