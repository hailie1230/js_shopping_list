'use strict';

const input = document.querySelector('.list_item_add');
const addBtn = document.querySelector('.item_add_btn');
const items = document.querySelector('.list_item_box');
const form = document.querySelector('.new_form')

//form 태그 안에 input에서 enter를 하거나, 버튼을 클릭했을때 -> submit작동
//submit 작동하면 페이지를 리로드함
form.addEventListener('submit',(event)=>{
  event.preventDefault(); // 브라우저의 자동적인 행동 삭제
  onAdd();
})

function onAdd(){
  //1. 사용자가 입력한 텍스트를 받아옴 
  const text = input.value;
  if(text === ''){
    input.focus();
    return
  }

  //2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼 )
  const item = createItem(text);

  //3. Items 컨테이너 안에 새로 만든 아이템을 추가한다. 
  items.appendChild(item);
  //item.scrollIntoView({ block: 'center' });
  //4. 인풋을 초기화 한다. 
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text){
  const itemRow = document.createElement('div');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <span class="item_name">${text}</span>
  <button class="item_delete">
    <i class="far fa-trash-alt" data-id = ${id}></i>
  </button>
  `
  id++;
  return itemRow;
};

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})
