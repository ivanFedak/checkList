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

    //
    wrapper.addEventListener('click', function(e){//bind function
        const item = e.target.closest('.item-main');
        if(item){
            console.log(item);
            switches(item);
            check(item);
        }
    });
    //

    function check(item){
        const text = item.children[1].textContent;
        if(item.classList.contains('_active')){
            storage.push(item);
            localStorage.setItem(dataDb.findIndex(elem=> elem.text == text), true); //set Index of item
        }else{//!active
            storage.splice(storage.indexOf(item),1);
            localStorage.removeItem(dataDb.findIndex(elem=> elem.text == text));
        }
        updBar();
    }
    
    function updBar(){
        achived.textContent = storage.length;
        bar.style.width = (storage.length / dataDb.length * 100) + '%';
    }
        
    function switches(item){
        const checkbox = item.querySelector('input');
        if(item.classList.contains('_active')){
            checkbox.checked = false;
        }else{
            checkbox.checked = true;
        }
        item.classList.toggle('_active');
    }

    function init(item){
        const text = item.children[1].textContent;
        if(localStorage.getItem(dataDb.findIndex(elem=> elem.text == text))){ //if index contan's in localStorage
            item.classList.add('_active');
            storage.push(item);
        }
    }




    //def
    updBar();
    result.textContent = dataDb.length;
    wrapper.lastChild.classList.add('_noClick');

    btnChange.addEventListener('click',function(e){
        if(localStorage.getItem('dataArrRus')){ //patern for 1 btn
            localStorage.removeItem('dataArrRus');
        }else{
            localStorage.setItem('dataArrRus', true);
        }
        window.location.reload();
    });
    
    
    
};
export default dynamic;