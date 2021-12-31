const dynamic = ()=>{
    const wrapper = document.querySelector('.main__body');
    const bar = document.querySelector('.bottom-main__bar-inner');
    const result = document.querySelector('.bottom-main__res');
    const achived = document.querySelector('.bottom-main__achived');
    let storage = [];

    const dataArr = [
        {text: '👶 Be born',},
        {text: '🚶‍ Take first steps',},
        {text: '📣 Say first words',},
        {text: '👨‍🏫 Learn to read',},
        {text: '🤗 Make a friend',},
        {text: '🚴‍ Learn to ride a bike',},
        {text: '📗 Read a book',},
        {text: '🏊‍ Learn to swim',},
        {text: '🏫 Finish elementary school',},
        {text: '⚽ Play a sport',},
        {text: '🛫 Fly in a plane',},
        {text: '🛥️ Ride a boat',},
        {text: '🚆 Ride in a train',},
        {text: '🚁 Ride a helicopter',},
        {text: '🌊 See the ocean',},
        {text: '❄️ See snow',},
        {text: '☃️ Make a snowman',},
        {text: '🏫 Finish middle school',},
        {text: '🎶 Go to a concert',},
        {text: '🏕️ Go camping',},
        {text: '🎢 Ride a rollercoaster',},
        {text: '🎻 Play an instrument',},
        {text: '💋 Get kissed',},
        {text: '💳 Get a credit card',},
        {text: '🚘 Start driving',},
        {text: '🗺️ Go on a roadtrip',},
        {text: '🗾 Visit another country',},
        {text: '🎤 Give a speech',},
        {text: '🏫 Graduate high school',},
        {text: '🌐 Learn another language',},
        {text: '💸 Invest some money',},
        {text: '📷 Meet an idol',},
        {text: '😩 Make a terrible mistake',},
        {text: '🏆 Win a trophy',},
        {text: '⛰️ Climb a mountain',},
        {text: '🎽 Run a marathon',},
        {text: '🍳 Learn to cook',},
        {text: '🔦 Explore a cave',},
        {text: '🌋 See a volcano',},
        {text: '🎓 Graduate college',},
        {text: '💕 Have a long relationship',},
        {text: '🗑️ Get dumped',},
        {text: '🖊️ Sign a contract',},
        {text: '🏢 Get a job',},
        {text: '☝️ Get promoted',},
        {text: '💵 Get a paycheck',},
        {text: '🔥 Get fired',},
        {text: '📰 Get in the news',},
        {text: '🗳️ Vote in an election',},
        {text: '🤡 Switch careers',},
        {text: '🏠 Buy a house',},
        {text: '💍 Get engaged',},
        //Checked
        {text: '👰 Get married',},
        {text: '👶 Have a kid',},
        {text: '🚶‍ Teach your kid to walk',},
        {text: '📣 Teach your kid to talk',},
        {text: '🎓 Watch your kid graduate',},
        {text: '👰 Watch your kid get married',},
        {text: '👴 Become a grandparent',},
        {text: '🏖️ Retire',},
        {text: '📔 Tell your grandkid a story',},
        {text: '🌑 See a solar eclipse',},
        {text: '🌷 Plant a garden',},
        {text: '🌎 Travel the world',},
        {text: '🎂 Turn 100',},
        {text: '✔️ Complete Life Checklist',},
    ];


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