import handlers from './eventHandlers.js';


//DOM Elements
const form_number = document.querySelector("#form__number")
const card_number = document.querySelector(".card__number")
const form_name = document.querySelector("#form__name")
const card_name = document.querySelector(".card__name")
const form_month = document.querySelector("#form__month")
const card_month = document.querySelector(".card__month")
const form_year = document.querySelector("#form__year")
const card_year = document.querySelector(".card__year")
const form_cvv = document.querySelector("#form__cvv")
const card_front = document.querySelector(".card__front")
const card_back = document.querySelector(".card__back")
const card = document.querySelector(".card");
const card_type = document.querySelector(".card__type");
const card_cvv_code = document.querySelector(".card__cvv__code");
const card_focus = document.querySelector(".card__focus");
const form_submit = document.querySelector(".form__submit");


//Default CSS setup
card_back.setAttribute("hidden","true");


//Event Listeners
form_number.addEventListener('keyup',e=>{handlers.spaceAfter4digits(e)});
form_number.addEventListener('keyup',e=>{handlers.cardNumberAnimation(e,card_number,card_type)})
form_number.addEventListener('focus',e=>{handlers.cardFocusFrameAnimation(e,card_focus,false)})
form_number.addEventListener('focusout',e=>{handlers.cardFocusFrameAnimation(e,card_focus,true)})

form_name.addEventListener('keyup',e=>{handlers.cardNameAnimation(e,card_name)})
form_name.addEventListener('focus',e=>{handlers.cardFocusFrameAnimation(e,card_focus,false)})
form_name.addEventListener('focusout',e=>{handlers.cardFocusFrameAnimation(e,card_focus,true)})

form_month.addEventListener('change',e=>{handlers.cardExpiryDateAnimation(e,card_month)})
form_year.addEventListener('change',e=>{handlers.cardExpiryDateAnimation(e,card_year)})
form_month.addEventListener('focus',e=>{handlers.cardFocusFrameAnimation(e,card_focus,false)})
form_month.addEventListener('focusout',e=>{handlers.cardFocusFrameAnimation(e,card_focus,true)})
form_year.addEventListener('focus',e=>{handlers.cardFocusFrameAnimation(e,card_focus,false)})
form_year.addEventListener('focusout',e=>{handlers.cardFocusFrameAnimation(e,card_focus,true)})

form_cvv.addEventListener('focus',e=>{handlers.cardFlipAnimation(e,card,card_front,card_back)})
form_cvv.addEventListener('focusout',e=>{handlers.cardFlipAnimation(e,card,card_front,card_back)})
form_cvv.addEventListener('keyup',e=>{handlers.cardCvvAnimation(e,card_cvv_code)})

form_submit.addEventListener("click",(e)=>{submitForm()});

function submitForm(){
    //number
    console.log(form_number.value.split(" ").join(""));
    //name
    console.log(form_name.value);
    //month
    console.log(form_month.options[form_month.selectedIndex].value);
    //year
    console.log(form_year.options[form_year.selectedIndex].value)
    //cvv
    console.log(form_cvv.value)

    fetch("<url>",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            number:form_number.value.split(" ").join(""),
            name:form_name.value,
            month:form_month.options[form_month.selectedIndex].value,
            year:form_year.options[form_year.selectedIndex].value,
            cvv:form_cvv.value    
        })
    })
}

