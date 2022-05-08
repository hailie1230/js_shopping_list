![ogImg01](https://user-images.githubusercontent.com/66510673/167295970-05d115a2-ad70-4320-8b66-814cdfb88774.jpg)

# shopping list - ver1 
### **Live Demo :** https://hailie1230.github.io/js_shopping_list/index01.html

## **Description**
- input안에 텍스트를 입력하면 동적으로 리스트를 생성해주는 미니 프로젝트입니다.

## **How to play**
**리스트 추가**

![리스트-추가](https://user-images.githubusercontent.com/66510673/167297392-3e7046a8-16ab-4675-802c-5b56ffb6abac.gif)
- 입력창에 내용을 입력한 뒤 Enter 또는 + 버튼을 클릭하여 리스트를 추가한다.

**리스트 삭제**

![리스트-삭제](https://user-images.githubusercontent.com/66510673/167297411-3a130dd1-4195-48dc-8fd1-d8bae9a02d49.gif)
- 삭제하고 싶은 리스트 오른쪽에 휴지통 모양 버튼을 클릭하여 리스트를 삭제한다.


## **Script**
1. 브라우저 자동적인 행동 삭제 
: form 태그 안 input에서 enter를 하거나, 버튼을 클릭했을때 -> submit작동으로 인해 페이지 리로드 된다. 
이 리로드 되는 자동적인 행위를 삭제 함. 
```
event.preventDefault(); 
```

2. 사용자가 input에 입력한 텍스트 받아 오기 

3. addBtn을 누르거나 Enter 키를 눌렀을때 아이템이 리스트에 추가 하기 

4. 새로운 아이템( 텍스트 + 삭제 버튼 )을 만들어 .list_item_box컨테이너 안에 새로운 아이템을 추가한다. 
- createItem() 함수 안에 innerHtml를 활용하여 생성될 텍스트와 삭제버튼을 만듦
- 아이템을 .appendChile()를 사용하여 .list_item_box컨테이너안에 들어갈 수 있도록 함

5. 아이템 삭제 하기
- 아이템을 삭제 하기위해선 각각의 아이템에게 고유의 id가 필요하므로 아이템을 감싸는 div태그에 data-id를 부여 해줌
- **이벤트 위임**을 활용하여 id값이 부여된 .item_row를 삭제 
```
items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})
```

6. 아이템 추가시 input안에 텍스트를 초기화 해주고, 
 addBtn을 클릭하여 아이템 추가시 focus가 input안에 머물로 있도록 해준다. 
```
input.value = '';
input.focus();
```
___

# shopping list - ver2 
