/* eslint-disable import/prefer-default-export */

/* 내가 짠 코드... 진짜 개판이네 */
function openModal({text}) {
  const $modal = document.createElement('div');
  $modal.className = "modal";

  $modal.innerHTML = `      
    <div class="body">
    <div class="close" id = "cl">X</div>
    <div class="content">${text}</div>
  </div>`;

  const $close = $modal.querySelector('.close');

  $close.addEventListener('click', () => {
    $modal.remove();
  });

  document.body.appendChild($modal);
}




/* 교수님의 코드 */

// function openModal({text = ''}) {
//     if(document.querySelector('.modal')){
//         return;
//     }

//     const $modal = document.createElement('div');
//     $modal.className = "modal";

//     $modal.innerHTML = `
//     <div class="body">
//     <div class="close" id = "cl">X</div>
//     <div class="content">${text}</div>
//     </div>
//   `;

//   $modal.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.25);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `



//   const removeModal = () => {
//     $modal.remove();
//   };

//   $modal.querySelector('.close').addEventListener('click', removeModal);

//   $modal.querySelector('.body').addEventListener('click', e => {
//     if(e.target === e.currentTarget){
//         removeModal();
//     }
//   });
// }

export { openModal };


