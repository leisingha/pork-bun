import imgImport from "./porkcook.jpeg";

function populateHowToContent(){
    const content = document.querySelector('#content');
    const sectionIntro = document.createElement('section');
    sectionIntro.classList.add('intro');
    const sectionMiddle = document.createElement('section');
    sectionIntro.classList.add('middle');
    const sectionEnding = document.createElement('section');
    sectionIntro.classList.add('ending');

    const h2 = document.createElement('h2');
    h2.textContent = 'Lets make some pork buns 🧑‍🍳';
    const pIntro = document.createElement('p');
    pIntro.textContent = `Ready to make some delicious pork buns? Follow these simple steps to create fluffy, savory perfection! \n Gather your ingredients, roll up your sleeves, and let's get started.`;
    sectionIntro.appendChild(h2);
    sectionIntro.appendChild(pIntro);

    const img = document.createElement('img');
    img.src = imgImport;
    sectionMiddle.appendChild(img);

    const list = document.createElement('ol');
    list.classList.add('instruction-list');
    const item1 = document.createElement('li');
    item1.textContent = ` Prepare the dough and let it rise.`
    const item2 = document.createElement('li');
    item2.textContent = ` Cook the savory pork filling with your favorite spices.`
    const item3 = document.createElement('li');
    item3.textContent = ` Wrap the filling in the dough and steam until fluffy and cooked through.`
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    div.appendChild(list);
    sectionMiddle.appendChild(list);

    const pEnding = document.createElement('p');
    pEnding.textContent = `Enjoy your homemade pork buns fresh and warm! They're perfect for sharing or savoring all by yourself. 🥟✨`;
    sectionEnding.appendChild(pEnding);

    content.appendChild(sectionIntro);
    content.appendChild(sectionMiddle);
    content.appendChild(sectionEnding);
}