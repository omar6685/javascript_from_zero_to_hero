const btn = document.querySelector('.btn');



btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#000';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';

});