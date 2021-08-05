// Import stylesheets
import './style.css';
import anime from 'animejs';
import $ from 'jquery';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// const frontdiv = document.querySelector('.front');
// const backdiv = document.querySelector('.back');

// frontdiv.addEventListener('mouseenter', () => {
//   anime({
//     targets: frontdiv,
//     rotateY: 180,
//     backgroundColor: '#0000ff',
//     duration: 3000
//   });
// });
// frontdiv.addEventListener('mouseleave', () => {
//   anime({
//     targets: frontdiv,
//     rotateY: 0,
//     backgroundColor: '#ff0000',
//     duration: 3000
//   });
// });
// backdiv.addEventListener('mouseenter', () => {
//   anime({ targets: backdiv, rotateY: 180 });
// });
// backdiv.addEventListener('mouseenter', () => {
//   anime({ targets: backdiv, rotateY: 0 });
// });
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
// anime({ targets: appDiv, translateX: '240px' });
// window.onscroll = () => console.log(scrollX);

const cspan = document.querySelectorAll('.char');
const wrapper = document.querySelector('.wrapper');
console.log(cspan);
const inp = document.querySelector('#inp');

let t1 = anime.timeline({
  duration: 2000
});

inp.addEventListener('keyup', e => {
  e.preventDefault();
  for (let i = 0; i < 12; i++) {
    if (e.target.value[i]) {
      wrapper.children[i].innerText = i;
      anime({
        targets: wrapper.children[i],
        opacity: 1,
        translateY: '0',
        delay: 500
      });
    } else {
      wrapper.children[i].innerText = '#';
      anime({
        targets: wrapper.children[i],
        opacity: 1,
        translateY: '30',
        delay: anime.stagger(100)
        // duration:
      });
    }
  }
  // let temp = document.createElement('div');
  // temp.classList.add('char');
  // console.log(temp);
  // temp.innerText = e.target.value.substr(e.target.value.length - 1, 1);
  // wrapper.appendChild(temp);
});

// inp.addEventListener('keypress', event => {
//   if(event.key == "Backspace"){
//     for(int i)
//   }
// });
