import {dataArrRus, dataArrEng} from '../services/storage.js';

const dynamic = ()=>{
    const wrapper = document.querySelector('.main__body');
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    const btnChange = document.querySelector('.main__btn');
    let storage = [];
    let dataDb = dataArrEng;
    if(localStorage.getItem('dataArrRus')){
        dataDb = dataArrRus;
        btnChange.textContent = 'Change language to 🇺🇸';
    }

    function createCards(data){
      data.forEach(item => {
          const {text} = item;
          const card = document.createElement('div');
          card.classList.add('main__item','item-main');
          card.innerHTML = `
            <div class="item-main__checkbox">
                <input type="checkbox">
                <span class="item-main__check">
                    <img src="./img/check.svg" alt="checked">
                </span>
            </div>
            <div class="item-main__text">${text}</div>
          `;

          wrapper.append(card);
          init(card); 
      }); 
    }

    createCards(dataDb);

    //init
    wrapper.addEventListener('click', function(e){//bind function
        const item = e.target.closest('.item-main');
        if(item){
            switches(item);
            check(item);
        }
    });
    //

    function check(item){
        const text = item.children[1].textContent;
        if(item.classList.contains('_active')){
            storage.push(item);
            localStorage.setItem(dataDb.findIndex(elem=> elem.text == text), true); //set Index of item (return index)
        }else{//!active
            storage.splice(storage.indexOf(item),1);
            localStorage.removeItem(dataDb.findIndex(elem=> elem.text == text));
        }
        updBar();
    } 

    function switches(item){
        const checkbox = item.querySelector('input');
        if(item.classList.contains('_active')){
            checkbox.checked = false;
        }else{
            checkbox.checked = true;
        }
        item.classList.toggle('_active');
        console.log(checkbox.checked);
    }

    function init(item){
        const text = item.children[1].textContent;
        if(localStorage.getItem(dataDb.findIndex(elem=> elem.text == text))){ //if index contan's in localStorage
            item.classList.add('_active');
            storage.push(item);
        }
    }

    function updBar(){
        achived.textContent = storage.length;
        bar.style.width = (storage.length / dataDb.length * 100) + '%';
    }
        


/////////All init 

    function changeLang(){
        if(localStorage.getItem('dataArrRus')){ //patern localStorage for 1 btn
            localStorage.removeItem('dataArrRus');
        }else{
            localStorage.setItem('dataArrRus', true);
        }
        window.location.reload();
    }

    // function removeNoClick(){
    //     const lastEl = wrapper.lastChild;
    //     const checkbox = lastEl.querySelector('input');
    //     if(storage.length >= (dataDb.length - 1)){ //more or = 65}
    //     else{//less 65}
    // }
    
    
    // removeNoClick();
    updBar();
    wrapper.lastChild.classList.add('_noClick');
    result.textContent = dataDb.length;
    btnChange.addEventListener('click',changeLang);
    
///////////// 
    
};
export default dynamic;