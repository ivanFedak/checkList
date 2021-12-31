const switchs = ()=>{
    const checkBoxs = document.querySelectorAll('.item-main');

    checkBoxs.forEach(checkBox => {
        const inpCheck = document.querySelector('input');
        if(inpCheck.checked == true){
            checkBox.classList.add('_active');
        }
        checkBox.addEventListener('click',function(e){
            if(checkBox.classList.contains('_active')){
                inpCheck.checked = false;
            }else{
                inpCheck.checked = true;
            }
            checkBox.classList.toggle('_active');
        });
        


    });
};
export default switchs;