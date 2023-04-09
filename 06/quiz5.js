let x = 0;
let y = 0;
let offset = { x: 0, y: 0 };
let isDown = false;
let $dragEl = null;

const startDrag = (event) => {
  $dragEl = event.target;

  offset.x = $dragEl.offsetLeft - event.clientX;
  offset.y = $dragEl.offsetTop - event.clientY;

  isDown = true;
};

const stopDrag = (event) => {
  isDown = false;
};

const drag = (event) => {
  if (!isDown) return;
  x = event.clientX;
  y = event.clientY;

  $dragEl.style.left = x + offset.x + 'px';
  $dragEl.style.top = y + offset.y + 'px';
};

function addEvent() {
  document.body.addEventListener('mouseup', stopDrag);
  document.body.addEventListener('mousemove', drag);
}

function init() {
  addEvent();

  document.querySelectorAll('.drag').forEach(($box) => {
    $box.addEventListener('mousedown', startDrag);
  });
}

init();
