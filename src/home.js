import imgImport from "./jokebear-monch.gif";

function removeInverted(){
    const btnList = document.querySelectorAll('ul button')
    btnList.forEach((button) =>{
        button.classList.remove('inverted');
    })
}

function addInverted(btn){
    btn.classList.add('inverted');
}


export const populateHomeContent = function(){

    removeInverted();

    const homeBtn = document.querySelector('.btn-home');
    addInverted(homeBtn)

    const content = document.querySelector('#content');
    const sectionIntro = document.createElement('section');
    sectionIntro.classList.add('intro');
    const sectionMiddle = document.createElement('section');
    sectionMiddle.classList.add('middle');
    const sectionEnding = document.createElement('section');
    sectionEnding.classList.add('ending');

    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to Porkie Bun! 🐷';
    const pIntro = document.createElement('p');
    pIntro.textContent = `Are you ready to embark on a delicious journey filled with fluffy buns and savory surprises? \n Whether you're here to learn, laugh, or just drool over pictures of pork buns, you're in the right place!`
    sectionIntro.appendChild(h2);
    sectionIntro.appendChild(pIntro);

    
    const img = document.createElement('img');
    img.src = imgImport;
    sectionMiddle.appendChild(img);
    const div = document.createElement('div');
    div.classList.add('fact-box');
    const pMiddle = document.createElement('p');
    pMiddle.textContent = `Fun fact: Did you know pork buns are scientifically proven* to make your day 100% better? \n (*Okay, maybe not scientifically, but trust us, they're magical.)`
    div.appendChild(pMiddle);
    sectionMiddle.appendChild(div);

    const pEnding = document.createElement('p')
    pEnding.textContent = `So grab a napkin (you'll need it), and let's dive into the world of pork buns! 🥟✨`
    sectionEnding.appendChild(pEnding);

    const button = document.createElement('button');
    button.textContent = `Start Exploring`

    content.appendChild(sectionIntro);
    content.appendChild(sectionMiddle);
    content.appendChild(sectionEnding);
    content.appendChild(button);
    
}
