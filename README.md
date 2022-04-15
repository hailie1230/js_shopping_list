# sc_shopping_list

## ver1 
** script **
1. 브라우저 자동적인 행동 삭제 
: form 태그 안 input에서 enter를 하거나, 버튼을 클릭했을때 -> submit작동으로 인해 페이지 리로드 된다. 
이 리로드 되는 자동적인 행위를 삭제 함. 
```
event.preventDefault(); 
```
