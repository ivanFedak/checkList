const checkLogic = ()=>{
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    const items = document.querySelectorAll('.item-main');


    let storage = [];


    items.forEach(item=>{
            if(item.classList.contains('_active')){
                storage.push(item);
            }
            achived.textContent = storage.length;
            updBar();
    });

    items.forEach(item=>{
        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                storage.push(item);
            }else{ //not active
                storage.splice(storage.indexOf(item),1);
            }
            achived.textContent = storage.length;
            updBar();
        });  
    });

    result.textContent = items.length;


/////////Bar


    function updBar() {
        bar.style.width = (storage.length / items.length * 100) + '%';
    }


// 340 = items.length
// 200 = storage.length
// storage.length / items.length * 100

// Например, книга содержит 340 страниц. Вася прочитал 200 страниц. Вычислим, сколько процентов от всей книги прочитал Вася.

// 200 / 340 · 100% = 0,59 · 100 = 59%
// Таким образом, Вася прочитал 59% от всей книги.


};
export default checkLogic;