function fontSize_adjustments(){
   optimismFont();
   individualismText();
   individualismFont();
   /*individualism();*/
}

function optimismFont(){
   const jokerContainer = window.document.querySelector('div#joker');
   let containerHeight = jokerContainer.offsetHeight;
   let rel_FontSize = 0.09 * containerHeight;

   let paragraph_1 = document.querySelector('p#bef_joker');
   let paragraph_2 = document.querySelector('p#aft_joker');
   paragraph_1.style.fontSize = rel_FontSize + 'px';
   paragraph_2.style.fontSize = rel_FontSize + 'px';
}

function individualism(){
   const idvContainer = document.querySelector('section#individualism');
   let containerHeight = idvContainer.offsetHeight;
   let idvParagraph = document.querySelector('div#idv_txt_container > p');
   let idvParagraphContainer = document.querySelector('div#idv_txt_container');
   let idvParagraphHeight = idvParagraphContainer.offsetHeight;
   alert(idvParagraphHeight);

   individualismText(idvParagraphContainer, containerHeight);
   individualismFont(idvParagraph, idvParagraphHeight);
}

function individualismFont(/*txtP, containerH*/){
   let idvParagraph = document.querySelector('div#idv_txt_container > p');
   let idvParagraphContainer = document.querySelector('div#idv_txt_container');
   let idvParagraphHeight = idvParagraphContainer.offsetHeight;
   let rel_FontSize = 0.104 * idvParagraphHeight/*containerH*/;
   /*txtP*/idvParagraph.style.fontSize = rel_FontSize + 'px';
}

function individualismText(/*textP, containerH*/){
   let idvParagraphContainer = document.querySelector('div#idv_txt_container');
   const idvContainer = document.querySelector('section#individualism');
   let containerHeight = idvContainer.offsetHeight;
   let rel_pHeight = 0.4 * containerHeight/*containerH*/;

   /*textP*/idvParagraphContainer.style.height = rel_pHeight + 'px';
}