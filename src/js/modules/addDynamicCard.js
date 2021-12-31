const dynamic = ()=>{
    const wrapper = document.querySelector('.main__body');

    const dataArr = [
        {text: '👶 Be born',},
        {text: '🚀 Fly',},
        {text: '🤗 Find Frieds',},
        {text: '🏫 go to school',},
    ];


    function createCards(data) {
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
      });  
    }

    createCards(dataArr);


        // 
        wrapper.addEventListener('click', function(e){
            const item = e.target.closest('.item-main');
            if(item){//we click on item
                const checkbox = item.querySelector('input');
                if(checkbox.checked == true){
                    item.classList.add('_active');
                }   
                if(item.classList.contains('_active')){
                    checkbox.checked = false;
                }else{
                    checkbox.checked = true;
                }
                item.classList.toggle('_active');
            }
        });
    
};
export default dynamic;