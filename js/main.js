const openPopUp = document.querySelector("#pop_up__open");
const closePopUp = document.querySelector(".pop_up__close");
const popUp = document.querySelector(".pop_up");
const btnRecall = document.querySelector("#btn_recall");
const confirm = document.querySelector("#confirm");

const phoneInput = document.querySelector("#phone");

const openBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu-burger');

const btnArrow = document.querySelector('#btn-arrow');
const arrow = document.querySelector('#arrow');

const mask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
})

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active');
})

btnRecall.classList.add('btn_active');

confirm.addEventListener('change', ()=>{
    if(confirm.checked){
        btnRecall.disabled = false
        btnRecall.classList.remove('btn_active')
    }else{
        btnRecall.disabled = true
        btnRecall.classList.add('btn_active') 
    }
})

openBurger.addEventListener('click', () => {
    openBurger.classList.toggle('active');
    menuBurger.classList.toggle('open');
})

btnArrow.addEventListener('click', () =>{
    arrow.classList.toggle('arrow_scale');
})
