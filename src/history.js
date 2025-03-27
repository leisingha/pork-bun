import imgImport from "./bao-white.jpg";

function removeInverted(){
    const btnList = document.querySelectorAll('ul button')
    btnList.forEach((button) =>{
        button.classList.remove('inverted');
    })
}

function addInverted(btn){
    btn.classList.add('inverted');
}

export const populateHistory = function(){

    removeInverted();

    const historyBtn = document.querySelector('.btn-history');
    addInverted(historyBtn);

    const content = document.querySelector('#content');
    const sectionIntro = document.createElement('section');
    sectionIntro.classList.add('intro');
    const sectionMiddle = document.createElement('section');
    sectionMiddle.classList.add('middle');
    const sectionEnding = document.createElement('section');
    sectionEnding.classList.add('ending');

    const h2 = document.createElement('h2');
    h2.textContent = 'The History of Pork Buns 🧑‍🏫';
    const pIntro = document.createElement('p');
    pIntro.textContent = `Pork buns, or "baozi," have been a beloved staple of Chinese cuisine for centuries. \n Originating during the Three Kingdoms period, they were created as a portable meal for travelers and soldiers.`
    sectionIntro.appendChild(h2);
    sectionIntro.appendChild(pIntro);

    const img = document.createElement('img');
    img.src = imgImport;
    sectionMiddle.appendChild(img);
    const div = document.createElement('div');
    div.classList.add('fact-box');
    const pMiddle = document.createElement('p');
    pMiddle.textContent = `Fun fact: The name "baozi" translates to "wrapped treasure," symbolizing the delicious filling hidden inside the soft, fluffy dough.`
    div.appendChild(pMiddle);
    sectionMiddle.appendChild(div);

    const pEnding = document.createElement('p')
    pEnding.textContent = `From street food stalls to gourmet restaurants, pork buns have captured the hearts of food lovers worldwide. \n Let's explore their rich history and cultural significance! 🥟✨`
    sectionEnding.appendChild(pEnding);

    content.appendChild(sectionIntro);
    content.appendChild(sectionMiddle);
    content.appendChild(sectionEnding);
}