const ul = document.querySelector('.items');


// ul.remove();

// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'hello';
ul.lastElementChild.innerHTML = '<h4>Hello</h4';


const btn = document.querySelector('.btn');
btn.style.background = 'red';