'use strict';

const input = document.querySelector('.list_item_add');
const addBtn = document.querySelector('.item_add_btn');
const items = document.querySelector('.list_item_box');
const form = document.querySelector('.new_form')

form.addEventListener('submit',(event)=>{
  event.preventDefault(); 
  onAdd();
})

function onAdd(){
  const text = input.value;
  if(text === ''){
    input.focus();
    return
  }
  const item = createItem(text);

  items.appendChild(item);
  //item.scrollIntoView({ block: 'center' });
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

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})
