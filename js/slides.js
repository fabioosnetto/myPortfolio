

//--- Calls 'charSlidesChange()'
let charSlidesInterval = setInterval(function(){charSlidesChange();}, 10000);

//--- Changes the Slides of 'Characteristics Article'
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

//--- Characteristics Button Click
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



//--- Changes the Slides of 'Characteristics Article'
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