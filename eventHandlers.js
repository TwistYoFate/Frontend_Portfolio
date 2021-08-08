import {getCardType} from './cardTypes.js';
// GENERAL

// CARD HANDLERS

// FORM HANDLERS
    //VALIDATION
function spaceAfter4digits(e){
    if(e.key=="Backspace"){
        e.target.value = e.target.value.replace(/( $)/gi, "");
    }
    else{
        e.target.value = e.target.value.replace(/([^0-9]| )/gi, "").replace(/(.{4})/g,"$1 ");
    }
}

function cardNumberAnimation(e,wrapper,cardTypeWrapper){
        // e.preventDefault();
  let str = e.target.value.replace(/[ ]/ig,'')
  cardTypeAnimation(cardTypeWrapper,str);
  // console.log(str)
  for (let i = 0; i < 12; i++) {
    if (str[i]) {
      wrapper.children[i].style.animation =
        'fadeup 0.1s ease-in 0s 1 alternate';
      wrapper.children[i].style['animation-fill-mode'] = 'forwards';
    //   sleep(10);
      wrapper.children[i].innerText = str[i];
      wrapper.children[i].style.animation =
        'fadeup2 0.1s ease-in 0s 1 alternate;';
      wrapper.children[i].style['animation-fill-mode'] = 'backwards';
    } else {
      if (!str[i] && wrapper.children[i].innerText != '#') {
        wrapper.children[i].style =
          'animation: fadeup 0.1s ease-out 0s 1 alternate;animation-fill-mode:forwards';
        // sleep(10);
        wrapper.children[i].innerText = '#';
        wrapper.children[i].style =
          'animation: fadeup2 0.1s ease-out 0s 1 alternate;animation-fill-mode:backwards';
      }
      // wrapper.children[i].innerText = '#';
      // anime({
      //   targets: wrapper.children[i],
      //   opacity: 1,
      //   translateY: '30',
      //   delay: anime.stagger(100)
      //   // duration:
      // });
    }
  }
}

function cardNameAnimation(e,nwrap){
  // e.preventDefault();
  if (e.key != 'Backspace') {
    nwrap.innerHTML =
      e.target.value.substr(0, e.target.value.length - 1).replace(/[0-9]/ig,'') +
      `<div class="namewrap" style="animation: getLetter 0.2s ease-out 0s 1 alternate;animation-fill-mode:forwards">${e.target.value.substr(
        e.target.value.length - 1,
        1
      ).replace(/[0-9]/ig,'')}</div>`;
  } else {
    nwrap.innerHTML =
      e.target.value.substr(0, e.target.value.length - 1).replace(/[0-9]/ig,'') +
      `<div class="namewrap" style="animation: getLetter 0.2s ease-out 0s 1 reverse;animation-fill-mode:backwards">${e.target.value.substr(
        e.target.value.length - 1,
        1
      ).replace(/[0-9]/ig,'')}</div>`;
  }
}

function cardExpiryDateAnimation(e,wrapper){
  let str = e.target.options[e.target.selectedIndex].value;
  // console.log(str)
    wrapper.style.animation =
        'fadeup 0.1s ease-in 0s 1 alternate';
      wrapper.style['animation-fill-mode'] = 'forwards';
      if(str.length == 4)wrapper.innerText = str.substr(2,2);
      else wrapper.innerText = str;
      wrapper.style.animation =
        'fadeup2 0.1s ease-in 0s 1 alternate;';
      wrapper.style['animation-fill-mode'] = 'backwards';
      setTimeout(()=>{
        wrapper.style.animation ='';
      wrapper.style['animation-fill-mode'] = '';
      },100) 
}

function cardFlipAnimation(e,card,card_front,card_back){
    if(e.type == "focus"){
      // console.log("focus")
      card.style["animation"] = "flip 0.5s ease-out 0s 1 alternate";
      card.style["animation-fill-mode"] = "forwards";
      setTimeout(()=>{
        card_front.setAttribute("hidden","true");
        card_back.removeAttribute("hidden");
      },250);
      setTimeout(()=>{
        card.style["animation"] = "";
        card.style["animation-fill-mode"] = "";
      },500);
    }
    else if(e.type=="focusout"){
      // console.log("focusout")
      card.style["animation"] = "flip 0.5s ease-out 0s 1 reverse";
      card.style["animation-fill-mode"] = "backwards";
      setTimeout(()=>{
        card_back.setAttribute("hidden","true");
        card_front.removeAttribute("hidden");
      },250);
      setTimeout(()=>{
        card.style["animation"] = "";
        card.style["animation-fill-mode"] = "";
      },500)
    }
}

function cardTypeAnimation(wrapper,cardNumberStr){
  // e.preventDefault();
let str = getCardType(cardNumberStr).toLowerCase()
// console.log(str)
if (str) {
wrapper.children[0].style.animation =
  'fadeup 0.1s ease-in 0s 1 alternate';
wrapper.children[0].style['animation-fill-mode'] = 'forwards';
//   sleep(10);
wrapper.children[0].innerHTML = `<img src="./assets/card_types/${str}.png" height="100%" width="100%"></img>`;
wrapper.children[0].style.animation =
  'fadeup2 0.1s ease-in 0s 1 alternate;';
wrapper.children[0].style['animation-fill-mode'] = 'backwards';
} else {
  wrapper.children[0].style =
    'animation: fadeup 0.1s ease-out 0s 1 alternate;animation-fill-mode:forwards';
  // sleep(10);
  wrapper.children[0].innerHTML = `<img src="./assets/card_types/visa.png" height="100%" width="100%"></img>`;
  wrapper.children[0].style =
    'animation: fadeup2 0.1s ease-out 0s 1 alternate;animation-fill-mode:backwards';
// wrapper.children[i].innerText = '#';
// anime({
//   targets: wrapper.children[i],
//   opacity: 1,
//   translateY: '30',
//   delay: anime.stagger(100)
//   // duration:
// });
}
}

function cardCvvAnimation(e,wrapper){
  wrapper.innerText = e.target.value;
}

function cardFocusFrameAnimation(e,frame,reset){
  if(reset){
    frame.style['animation']='';
    frame.style['animation-fill-mode']='';
    return;
  }
  let str = ""
  switch(e.target.id){
    case "form__number":
      str = 'focus_tonumber'
      break;
    case "form__name":
      str = 'focus_toname'
      break;
    case "form__month":
      console.log("month")
      str = 'focus_toexpiry'
      break;
    case "form__year":
      str = 'focus_toexpiry'
      break;
  }
  frame.style['animation']=`${str} 0.5s ease-out 0s 1 alternate`;
  frame.style['animation-fill-mode']='forwards';
}


export default {
    spaceAfter4digits,
    cardNumberAnimation,
    cardNameAnimation,
    cardExpiryDateAnimation,
    cardFlipAnimation,
    cardTypeAnimation,
    cardCvvAnimation,
    cardFocusFrameAnimation
}