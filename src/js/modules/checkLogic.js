const checkLogic = ()=>{
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    const items = document.querySelectorAll('.item-main');
    const itemsArr = Array.from(items);
    let storage = [];



    items.forEach(item=> init(item));


    function init(item) {
        if(localStorage.getItem(itemsArr.indexOf(item))){
            item.classList.add('_active');
        }
        if(item.classList.contains('_active')){
            storage.push(item);
        }
        achived.textContent = storage.length;
        updBar();
        check(item);
    }

    function check(item){
        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                storage.push(item);
                localStorage.setItem(itemsArr.indexOf(item), true);
            }else{ //not active
                storage.splice(storage.indexOf(item),1);
                localStorage.removeItem(itemsArr.indexOf(item));
            }
            achived.textContent = storage.length;
            updBar();
        });  
    }

    function updBar(){
        bar.style.width = (storage.length / items.length * 100) + '%';
    }
    
    result.textContent = items.length;


};
export default checkLogic;