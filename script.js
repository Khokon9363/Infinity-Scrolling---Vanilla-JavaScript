document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

// ----------------- Infinity Scrolling - Vanilla JavaScript ---------------

let wrapper = document.querySelector('.wrapper')
let result = []
let postId = 1
let fetchingData = false

document.addEventListener('scroll', function (){
    if (fetchingData) return
    
    fetchingData = true

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => result = data)

    for (let i = 0; i < result.length; i++) {
        wrapper.innerHTML += `<h1>${result[i].name}</h1>`
    }

    setTimeout(() => {
        fetchingData = false
        postId++
    }, 300);
})
