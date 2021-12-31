const checkLogic = ()=>{
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    const items = document.querySelectorAll('.item-main');

    let storage = [];

    addByIndex();

    items.forEach(item=>{
        if(item.classList.contains('_active')){
            storage.push(item);
        }
        achived.textContent = storage.length;
        updBar();

        check(item);
    });

    result.textContent = items.length;

    function check(item){
        item.addEventListener('click',function(e){
            if(item.classList.contains('_active')){
                storage.push(item);
            }else{ //not active
                storage.splice(storage.indexOf(item),1);
            }
            achived.textContent = storage.length;
            updBar();
        });  
    }

    function updBar(){
        bar.style.width = (storage.length / items.length * 100) + '%';
    }

    function addByIndex() {
        items[0].classList.add('_active');
    }

};
export default checkLogic;