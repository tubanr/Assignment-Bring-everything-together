
//Add Remove Active Class On Click

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el =>{
    el.addEventListener('click',function(){
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');

    });

});


//To Display HTML Input Values Into Table Row Using submit button//

// to input elements of a form you can use the DOM methods//

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//add event submit 
myForm.addEventListener('submit' , onsubmit);
 
//process the form data
function onsubmit(e){
e.preventDefault();     

if(nameInput.value === '' || surnameInput.value === ''){
  msg.classList.add('error');
  msg.innerHTML ='please try again';

  setTimeout(() => msg.remove(), 4000);
}else{

const addRow =document.createElement('tr');
tBody.appendChild(addRow);

let data = [nameInput.value , surnameInput.value];

for (var i=0; i<data.length; i++){
  const newTd = document.createElement('td');
  newTd.innerHTML=data[i]
  addRow.appendChild(newTd);
}


}
}

