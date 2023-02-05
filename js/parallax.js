/*+--------------------------+*/
/*|------- Script for -------|*/
/*|------ SLIDES eleme ------|*/
/*+--------------------------+*/


//+---------------------------------
//|--- Making the Result

//--- Get the elements (projects)
const project_element = document.querySelectorAll('.projects');
const project_container = document.querySelector('#projects_container_parallax');

//+---------------------------------
//|--- Listen the Scroll Event

window.addEventListener('scroll', () => { 
   project_element.forEach((element) => {
      const projectContainerTop = project_container.getBoundingClientRect().top;
      const speed      = 0.5;
      
      // Update the project's position
      element.style.top = `-${projectContainerTop * speed}px`;
   })
});