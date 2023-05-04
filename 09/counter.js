const $root = document.querySelector('#root');

// function Button({ text = '', onClick }) {
//   const $btn = document.createElement('button');
//   $btn.textContent = text;
//   $btn.addEventListener('click', onClick);

//   return $btn;
// }

let count = 0;
function plus() {
  console.log('plus');
  //++count

  setCount(++count);
}

function minus() {
  console.log('minus');
  //--count

  setCount(--count);
}

// function Wrapper({ text = 0, className = '' }) {
//   const setText = (text) => {
//     $wrapper.textContent = text;
//   };

//   const $wrapper = document.createElement('div');
//   $wrapper.classList.add(className);
//   $wrapper.textContent = text;

//   return { $wrapper, setText };
// }

$plusButton = Button({ text: 'plus', onClick: plus });
$minusButton = Button({ text: 'minus', onClick: minus });
const { $wrapper: countWrapper, setText: setCount } = Wrapper({
  count: 0,
  className: 'count',
});

$root.append(countWrapper, $plusButton, $minusButton);

// const $plus = document.querySelector('#plus');
// const $minus = document.querySelector('#minus');
// const $count = document.querySelector('.count');

// let count = Number($count.innerText);

// function setText(dom, text){
//     dom.innerText = text;
// }

// function setText(dom, text) {
//     dom.innerText = text;
// }

// function updateCount(amount) {
//     setText($count, count += amount);
// }

// $plus.addEventListener('click', () => updateCount(1));
// $minus.addEventListener('click', () => updateCount(-1));
