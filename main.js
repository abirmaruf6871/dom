// let val=document.getElementById('t-title');
// console.log(val);

// console.log(val.id);
// console.log(val.class);
// val.style.background='#ef4444';

// document.getElementById('t-title').style.color='#fff'
// document.getElementById('t-title').style.padding='10px'
// document.getElementById('t-title').style.border='1px solid #ddd'
// document.getElementById('t-title').style.borderRadius='10px'
// document.getElementById('t-title').style.textAlign='center'
// document.getElementById('t-title').textContent='Task Collection'

// document.getElementById('addButton').style.background='#2dd4bf'
// document.querySelector('li').style.color='red'
// document.querySelector('li:nth-child(3)').style.color='red'
// document.querySelector('li:nth-child(5)').style.color='red'

// const listItem=document.querySelectorAll('.list-group-item');
// console.log(listItem);
// listItem.forEach((item,index) => {
//     console.log(item.className,item,index);
//     item.textContent=`${index} : Abir`;
// });

// let result;
// const list=document.querySelector('ul.list-group');
// const listItem=document.querySelector('li.list-group-item:first-child');

// console.log(listItem);
// result=list.children[3].children[0].id='test'
// console.log(result);

// const listItem=document.createElement('li');
// // Add class names
// listItem.className='list-group-item d-flex justify-content-between align-items-center';

// listItem.id='test-item';
// listItem.setAttribute('title', 'New Task');
// listItem.appendChild(document.createTextNode('Abir'));
// console.log(listItem);
// document.querySelector('ul.list-group').appendChild(listItem);

// const link=document.createElement('a');
// link.className="delete-item-secondary-content";
// link.innerHTML='<i class="fa-solid fa-xmark"></i>'

// listItem.appendChild(link);

// const newTitle= document.createElement('h3');
// newTitle.className='card-title text-center';
// newTitle.id='task-title';
// newTitle.appendChild(document.createTextNode('Task Collection'));
// console.log(newTitle);

// const oldElement=document.querySelector('.card-title');
// const oldElementParent=oldElement.parentElement;
// console.log(oldElementParent);

// oldElementParent.replaceChild(newTitle,oldElement);


// const listItems=document.querySelectorAll('li');
// listItems[0].remove();

// list.removeChild(listItems[4]);

//const btn=document.querySelector('#addButton')
// console.log(btn);
// btn.addEventListener('click',(event)=>{
//     console.log('Event Triggered',
//     event.target.className,
//     event.target.classList,
//     event.type,
//     event.timeStamp,
//     event.clientX,event.clientY);
//     event.preventDefault();
// })

/* 

btn.addEventListener('dblclick',(e)=>{
    console.log(e.type);
    e.preventDefault();
})

const title=document.querySelector('#t-title');

btn.addEventListener('mouseover',(e)=>{

    title.textContent=`x: ${e.offsetX}; Y: ${e.offsetY}`;
    title.style.color='#ddd';
    title.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},200)`
})
*/
let name="Abir Ahmed";
localStorage.setItem('secret', name)

let result=localStorage.getItem('secret')
console.log(result);

//localStorage.removeItem('secret')

sessionStorage.setItem('secret', name)
let result2=sessionStorage.getItem('secret')
console.log(result2);

let auth={
    name:'Abir Ali',
    email:'abir.ali@gmail.com',
    password:'123456',
    token:'dkcdsakkkk'

}

localStorage.setItem('authentication',JSON.stringify(auth));
let result3=JSON.parse(localStorage.getItem('authentication'));
console.log(result3.name);

