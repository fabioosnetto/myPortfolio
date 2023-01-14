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
   let cHeight      = orderC.offsetHeight;
   let rel_FontSize = 0.4 * cHeight;

   orderP.style.fontSize = rel_FontSize + 'px';  
}

//--- Calculates the Font Size for Optimism Div
function optimismFont(){
   const jokerContainer = window.document.querySelector('div#joker');
   let containerHeight = jokerContainer.offsetHeight;
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
   
   
   individualismFont(idvParagraph, function(){individualismText(idvParagraphContainer, containerHeight)});
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
function slidesLoad(){
   let idv = document.querySelector('section#individualism');

   idv.style.display = 'flex';
}

//--- Changes the Slides of 'Characteristics Article'
function slidesChange(){
   let idv = document.querySelector('section#individualism');
   let dat = document.querySelector('section#diversion_attention');
   let pft = document.querySelector('section#perfectionism');
   let dis = idv.style.display == 'none'? (dat.style.display == 'none'? '2' : '1') : '0';
   
   switch (dis) {
      case '0': 
         idv.style.display = 'none';
         dat.style.display = 'flex';
         pft.style.display = 'none';
      break;
      case '1':
         idv.style.display = 'none';
         dat.style.display = 'none';
         pft.style.display = 'flex';
      break;
      case '2':
         idv.style.display = 'flex';
         dat.style.display = 'none';
         pft.style.display = 'none';
      break;
   }
}

//--- Calls 'slidesChange()'
setInterval(function(){slidesChange()}, 10000);