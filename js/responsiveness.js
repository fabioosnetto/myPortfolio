/*+--------------------------------+*/
/*|------ Script for Website ------|*/
/*|-------- RESPONSIVENESS --------|*/
/*+--------------------------------+*/

//--- Procedure that Execute another for Reponsiveness Adjustments
function adjustments(){
   hOrderFont();
   optimismFont();
   individualism();
}

//--- Calculates Font Size (based on header 'Order Now' box)
function hOrderFont(){
   const orderC     = document.querySelector('div#header_order_now');
   let orderP       = document.querySelector('a#order_now');
   let cWidth      = orderC.offsetWidth;
   let rel_FontSize = 0.16 * cWidth;

   orderP.style.fontSize = rel_FontSize + 'px';  
}

//--- Calculates the Font Size for Optimism Div
function optimismFont(){
   const jokerContainer = window.document.querySelector('div#joker');
   let containerHeight = jokerContainer.clientHeight;
   let rel_FontSize = 0.09 * containerHeight;

   let paragraph_1 = document.querySelector('p#bef_joker');
   let paragraph_2 = document.querySelector('p#aft_joker');
   paragraph_1.style.fontSize = rel_FontSize + 'px';
   paragraph_2.style.fontSize = rel_FontSize + 'px';
}

//--- Call Procedures for Individualism Section
function individualism(){
   const idvContainer        = document.querySelector('section#individualism');
   let containerHeight       = idvContainer.offsetHeight;
   let idvParagraph          = document.querySelector('div#idv_txt_container > p');
   let idvParagraphContainer = document.querySelector('div#idv_txt_container');
   
   
   individualismFont(idvParagraph, individualismText(idvParagraphContainer, containerHeight));
}

//--- Calculates the Text Box Height
function individualismText(textP, containerH){
   let rel_pHeight = 0.4 * containerH;
   
   textP.style.height = rel_pHeight + 'px';

   return(rel_pHeight);
}

//--- Caculates Font Size (based on Text Box)
function individualismFont(txtP, containerH){
   let rel_FontSize = 0.104 * containerH;

   txtP.style.fontSize = rel_FontSize + 'px';
}

//--- Loads the First Slide of 'Characteristics Article'
function charSlidesLoad(){
   let idv = document.querySelector('section#individualism');
   let dat = document.querySelector('section#diversion_attention');
   let pft = document.querySelector('section#perfectionism');

   idv.style.opacity = '1';
   charSlideMarker('mk_1');
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

function charSlideMarker(_mk_id){
   document.getElementById('mk_1').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById('mk_2').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById('mk_3').style.backgroundColor = 'rgba(128, 128, 128, 0.3)';
   document.getElementById(_mk_id).style.backgroundColor = 'rgba(128, 128, 128, 1.0)';
}

//--- Calls 'slidesChange()'
setInterval(function(){charSlidesChange(); individualism();}, 10000);

//--- Characteristics Button Click
function charButtonClick(direction){
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
}