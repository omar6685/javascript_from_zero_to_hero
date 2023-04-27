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


function createPosts(post, callback) {
    setTimeout(() => {
        post.push(post);
        callback(post);
    }, 2000);
}

getPosts();

createPost({title: 'post three', body: 'this is post'})