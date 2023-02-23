function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayusers2(data))
}

function displayusers2(data){
    const ul = document.getElementById("users-list") ;
    for( const user of data){
        console.log(user.name);
        const li = document.createElement('li') ;
        li.innerText = user ;
        ul.appendChild(li) ;

    }

}