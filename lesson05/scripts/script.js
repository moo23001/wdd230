const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let bomJason = [];
var bomfile = 'book-of-mormon.json';

LoadInfo();
async function LoadInfo() {
    //we will use fetch here
    const response = await fetch(bomfile);
    if (response.status === 200){
        const json = await response.json();
        console.log(JSON.stringify(json,null, 2))
        bomJason = json;
    }
    
 }


button.addEventListener('click',() => {
    if (input.value === ''){
        window.alert("Please enter a chapter.")
    }else{
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';

    }


})