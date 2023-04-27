// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContant = 'text';
// console.log(document.forms);
// console.log(document.links);



// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'good';
// headerTitle.innerHTML = '<h3>hello</h3>';
// headerTitle.style.backgroundColor ='red';



// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContant = 'hello2';
// items[1].style.background = 'red';
// for(var i = 0; i <items.length; i++ ) {
//     items[i].style.background = 'green';
// }




// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContant = 'hello2';
// li[1].style.background = 'red';
// for(var i = 0; i <li.length; i++ ) {
//     li[i].style.background = 'green';
// }


// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';


// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';


// var item = document.querySelector('.list-group-item');
// items.style.color = 'red';



// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.background = 'green';
// }



// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);



// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);


// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.background = 'red';


// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello world';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello world';


// console.log(itemList.nextElementSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color ='green';

// var newDiv = document.createElement('div');

// newDiv.className = 'hello';

// newDiv.id = 'hello';

// newDiv.setAttribute('title', 'Hello');

// var newDivText = document.createTextNode('hello');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header .h1');

// console.log(newDiv);

// newDiv.style.fontSize ='30px'

// container.insertBefore(newDiv, h1);

// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);

// function buttonClick(e) {
//     document.getElementById('header-title').textContent = 'title' ;
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   console.log(e);
    //  console.log(e.target);
    //  console.log(e.target.id);
    //  console.log(e.target.className);
    //  var output = document.getElementById('output');
    //  output.innerHTML = '<h3>'+e.target.id+'</h3>';
    //  console.log(e.type);
    //  console.log(e.clientY);
    //  console.log(e.offsetX);
    //  console.log(e.altKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouseover', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);


// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent)

// itemInput.addEventListener('focus', runEvent);

// function runEvent(e) {

//     console.log('event type : ' + e.type);

//     console.log(e.target.value);
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

//    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// }

// test git push