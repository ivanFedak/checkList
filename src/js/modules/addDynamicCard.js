import {dataArr} from '../services/storage.js';
const dynamic = ()=>{
    const wrapper = document.querySelector('.main__body');
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    let storage = [];


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

    createCards(dataArr);

    //
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
            localStorage.setItem(dataArr.findIndex(elem=> elem.text == text), true); //set Index of item
        }else{//!active
            storage.splice(storage.indexOf(item),1);
            localStorage.removeItem(dataArr.findIndex(elem=> elem.text == text));
        }
        updBar();
    }
    
    function updBar(){
        achived.textContent = storage.length;
        bar.style.width = (storage.length / dataArr.length * 100) + '%';
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
        if(localStorage.getItem(dataArr.findIndex(elem=> elem.text == text))){ //if index contan's in localStorage
            item.classList.add('_active');
            storage.push(item);
        }
    }

    updBar();
    result.textContent = dataArr.length;
    
};
export default dynamic;