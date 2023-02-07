/*+--------------------------+*/
/*|------- Script for -------|*/
/*|------ SLIDES eleme ------|*/
/*+--------------------------+*/



//+---------------------------------
//|--- Characteristics


//--- Calls 'charSlidesChange()'
let charSlidesInterval = setInterval(function(){charSlidesChange();}, 10000);

//--- Changes the Slides
function charSlidesChange(){
   let idv = document.querySelector('section#individualism');
   let dat = document.querySelector('section#diversion_attention');
   let pft = document.querySelector('section#perfectionism');
   let mk_id;

   idv.style.opacity == '0'? (dat.style.opacity == '0'? mk_id='mk_1' : mk_id='mk_3') : mk_id='mk_2';
   dis = idv.style.opacity == '0'? (dat.style.opacity == '0'? idv : pft) : dat;
   
   idv.style.opacity    = '0';
   dat.style.opacity    = '0';
   pft.style.opacity    = '0';

   dis.style.opacity    = '1';
   charSlideMarker(mk_id);
}

//--- Button Click
function charButtonClick(direction){
   clearInterval(charSlidesInterval);
   let idv = document.querySelector('section#individualism');
   let dat = document.querySelector('section#diversion_attention');
   let pft = document.querySelector('section#perfectionism');
   let dis;
   let mk_id;

   if(direction == 'back'){
      dis = idv.style.opacity == '0'? (dat.style.opacity == '0'? dat : idv) : pft;
      idv.style.opacity == '0'? (dat.style.opacity == '0'? mk_id='mk_2' : mk_id='mk_1') : mk_id='mk_3';
   }else{
      dis = idv.style.opacity == '0'? (dat.style.opacity == '0'? idv : pft) : dat;
      idv.style.opacity == '0'? (dat.style.opacity == '0'? mk_id='mk_1' : mk_id='mk_3') : mk_id='mk_2';
   }

   idv.style.opacity = '0';
   dat.style.opacity = '0';
   pft.style.opacity = '0';
   
   dis.style.opacity = '1';
   charSlideMarker(mk_id);
   charSlidesInterval = setInterval(function(){charSlidesChange();}, 10000);
}

//--- Shows Which's the Current Slide
function charSlideMarker(_mk_id){
   document.getElementById('mk_1').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById('mk_2').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById('mk_3').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById(_mk_id).style.backgroundColor = 'rgba(128, 128, 128, 1.0)';
}



//+---------------------------------
//|--- Characteristics


//--- Changes the Slides
let story_index  = 0;
let story_time   = undefined;
let story_slides = document.querySelectorAll('.story_container');
let story_slide_marker = document.querySelectorAll('.story_slide_marker');

function storySlidesChange(){
   for (let i = 0; i < story_slides.length; i++) {
      story_slides[i].style.opacity = 0; 
      
      if (story_slide_marker[i].classList.contains('story_slide_marked')) {
         story_slide_marker[i].classList.remove('story_slide_marked')
      }

      let story_slide_child = story_slides[i].children[0];
      let story_text        = story_slide_child.children;
      for (let i = 0; i < story_text.length; i++) {
         story_text[i].style.opacity = 0;

         if (story_text[i].classList.contains('story-text-animate')) {
            story_text[i].classList.remove('story-text-animate');
         }
      }
   }    

   story_index++;
   if (story_index > story_slides.length) {story_index = 1;}

   story_slides[story_index-1].style.opacity = 1;
   story_slide_marker[story_index-1].classList.add('story_slide_marked');

   let story_slide_child = story_slides[story_index-1].children[0];
   let story_text        = story_slide_child.children;

   for (let i = 0; i < story_text.length; i++) {
      story_text[i].style.opacity = 1;
      story_text[i].classList.add('story-text-animate');
   }

   story_time = setTimeout(storySlidesChange, 15000); 
}

//--- Recursively Calls 'storySlidesChange()'
storySlidesChange();


//--- Story Slides Client Controls
story_slide_marker.forEach(element => {
   element.addEventListener('click', () => {
      let marked_num = element.id.slice(19);
      
      story_index = marked_num-1;
      clearTimeout(story_time);
      storySlidesChange();
   });
});