import './style.css';

import {populateHomeContent} from './home.js'
import {populateHowToContent} from './howTo.js'
import {populateHistory} from './history.js'

populateHomeContent();

function attachEventListener(){
    const content = document.querySelector('#content');

    const homeBtn = document.querySelector('.btn-home');
    homeBtn.addEventListener('click', () =>{
        content.innerHTML = '';
        populateHomeContent();
    })

    const howToBtn = document.querySelector('.btn-how-to');
    howToBtn.addEventListener('click', () =>{
        content.innerHTML = '';
        populateHowToContent();
    })

    const historyBtn = document.querySelector('.btn-history');
    historyBtn.addEventListener('click', () =>{
        content.innerHTML = '';
        populateHistory();
    })
}

attachEventListener()


