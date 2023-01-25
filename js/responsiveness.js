/*+--------------------------------+*/
/*|------ Script for Website ------|*/
/*|-------- RESPONSIVENESS --------|*/
/*|------- of some elements -------|*/
/*+--------------------------------+*/

//--- Procedure that Execute another for Reponsiveness Adjustments
function adjustments(){
   hOrderFont();
   optimismFont();
   individualism();
   diversion_att();
   perfectionism();
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

//--- Call Procedures for Diversion of Attention Section
function diversion_att(){
   const idvContainer        = document.querySelector('section#diversion_attention');
   let containerHeight       = idvContainer.offsetHeight;
   let idvParagraph          = document.querySelector('div#datt_txt_container > p');
   let idvParagraphContainer = document.querySelector('div#datt_txt_container');
   
   
   diversion_attFont(idvParagraph, diversion_attText(idvParagraphContainer, containerHeight));
}

//--- Calculates the Text Box Height
function diversion_attText(textP, containerH){
   let rel_pHeight = 0.4 * containerH;
   
   textP.style.height = rel_pHeight + 'px';

   return(rel_pHeight);
}

//--- Caculates Font Size (based on Text Box)
function diversion_attFont(txtP, containerH){
   let rel_FontSize = 0.104 * containerH;

   txtP.style.fontSize = rel_FontSize + 'px';
}

//--- Call Procedures for Perfectionism Section
function perfectionism(){
   const idvContainer        = document.querySelector('section#perfectionism');
   let containerHeight       = idvContainer.offsetHeight;
   let idvParagraph          = document.querySelector('div#pfct_txt_container > p');
   let idvParagraphContainer = document.querySelector('div#pfct_txt_container');
   
   
   perfectionismFont(idvParagraph, perfectionismText(idvParagraphContainer, containerHeight));
}

//--- Calculates the Text Box Height
function perfectionismText(textP, containerH){
   let rel_pHeight = 0.4 * containerH;
   
   textP.style.height = rel_pHeight + 'px';

   return(rel_pHeight);
}

//--- Caculates Font Size (based on Text Box)
function perfectionismFont(txtP, containerH){
   let rel_FontSize = 0.104 * containerH;

   txtP.style.fontSize = rel_FontSize + 'px';
}