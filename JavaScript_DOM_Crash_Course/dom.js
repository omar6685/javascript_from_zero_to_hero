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



var titles = document.querySelectorAll('.title');
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.background = 'green';
}