console.log('search.js');

const apiUrl = 'https://dapi.kakao.com/v2/search/web';
const KAKAO_API_KEY = '8e3716125d184f361a6ba385247e0938';

const $searchForm = document.getElementById('searchForm');
const $searchInput = document.getElementById('searchInput');
const $items = document.getElementById('items');
const $moreBox = document.getElementById('moreBox');
const $moreBtn = document.getElementById('moreBtn');

let page = 1;

function fetchApi({ page, query, callback }) {
  {
    
    const options = {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
      };


    const size = 1;
    const url = `${apiUrl}?query=${query}&size=${size}&page=${page}`;

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.documents);
        callback(json);
      });
  }
}

function submitForm(event) {
  event.preventDefault();
  console.log('submit');

  const query = $searchInput.value;
  fetchApi({ page: 1, query, callback: renderItems });
}

function renderItems(data) {
  console.log(data);
  let result = [];

  for (let i = 0; i < data.documents.length; i++) {
    //data를 item dom으로 변환
    const {title, contents, datetime} = data.documents[i];
    
    const el = `<div class="columns">
    <div class="column is-one-third">
     <div class="card">
       <div class="card-content">
         <p class="title">${title}</p>
         <p class="subtitle">${datetime}</p>
         <div class="content">${contents}</div>
       </div>
     </div>
   </div>`;

   result.push(el);
  }

  $items.innerHTML += result.join('');

  $moreBox.style.display = 'block';
}

function moreItems(){
    const query = $searchInput.value;

    fetchApi({page: ++page, query, callback: renderItems});
}

function init(){
    $moreBtn.addEventListener('click', moreItems);
    $searchForm.addEventListener('submit', submitForm);
}

init();
