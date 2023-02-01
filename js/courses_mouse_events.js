/*+----------------------------+*/
/*|-------- Script for --------|*/
/*|---- show COURSES Links ----|*/
/*+----------------------------+*/

function showLink(course_id){
   let element  = course_id.slice(7);
   let link_id  = `course_ref_${element}`;
   let link     = document.querySelector(`#${link_id}`);
   let platform = document.querySelector(`#${course_id}`).classList.contains('cursoemvideo');

   if (platform) {
      link.classList.remove('cursoemvideo_not_showlink');
      link.classList.add('cursoemvideo_showlink');
   } else {
      link.classList.remove('ogroflix_not_showlink')
      link.classList.add('ogroflix_showlink');
   }
}

function notShowLink(course_id){

   let element  = course_id.slice(7);
   let link_id  = `course_ref_${element}`;
   let link     = document.querySelector(`#${link_id}`);
   let platform = document.querySelector(`#${course_id}`).classList.contains('cursoemvideo');

   if (platform) {
      link.classList.remove('cursoemvideo_showlink');
      link.classList.add('cursoemvideo_not_showlink');
   } else {
      link.classList.remove('ogroflix_showlink');
      link.classList.add('ogroflix_not_showlink');
   }
}

document.querySelectorAll('#courses_list li > div').forEach(element => {element.addEventListener('mouseover', ()=>{showLink(element.id)})});

document.querySelectorAll('#courses_list li > div').forEach(element => {element.addEventListener('mouseleave', ()=>{notShowLink(element.id)})});