const posts = [
    {title: 'Post1', body: 'This is post1.'},
    {title: 'Post2', body: 'This is post2.'},  
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}
createPost({title: 'Post3', body: 'This is post3.'}, getPosts)