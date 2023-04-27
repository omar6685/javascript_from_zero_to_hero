const posts = [
    {title: 'Posts one', body: 'This is a post one' },
    {title: 'Posts two', body: 'This is a post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPosts(post) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        post.push(post);
        const error = false;
        if (!error) {
            reject();
        } else {
            resolve('something wrong happened');
        }
    }, 2000);
    });


}


// createPosts({title: 'post three', body: 'post three'}).then(getPosts).catch(error => console.log(error));


// getPosts();

// createPost({title: 'post three', body: 'this is post'})


// const promise1 = Promise.reject('hellow world');

// const promise2 = Promise.resolve('hello world');
// const promise3 = 10;


async function init() {
    await createPost({ title: 'hello world', body: 'this is post'});
    getPosts();
}

init();

async function fechUser() {
    const res = await res.json();
    console.log(date);
}

fechUser();