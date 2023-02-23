function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById("post-container") ;
    for(const post of posts){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h5>user-${post.userId}</h5>
        <h5>post: ${post.title} </h5>
        <p> Post: ${post.body}</p>
        ` ;
        postContainer.appendChild(postDiv) ;
    }
}
loadpost()