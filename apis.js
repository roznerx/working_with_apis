const img = document.querySelector('img');
const refreshBtn = document.getElementById('refresh-btn');
const searchBar = document.getElementById('search-bar');
const goBtn = document.getElementById('go-btn');

async function fetchImg(url) {
    const response = await fetch(url, {mode: 'cors'});
    const imgData = await response.json();
    img.src = imgData.data.images.original.url;
}

fetchImg('https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=cats');

refreshBtn.addEventListener('click', () => {
    fetchImg('https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=cats');
})


goBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=${searchBar.value}`, {mode: 'cors'});
        if (response.ok) {
                imgData = await response.json();
                img.src = imgData.data.images.original.url;
        } else 
            throw new Error('That kind of gif might not exist!');
    }
    catch (error) {
        alert('That kind of gif might not exist!');
    }
});



/*
async function fetchImg(url) {
    return fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(response => img.src = response.data.images.original.url);
}

fetchImg('https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=cats');

refreshBtn.addEventListener('click', () => {
    fetchImg('https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=cats');
})

goBtn.addEventListener('click', () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=cGpZJBFIYDVNjGEQ0HrqdINRPwTex42H&s=${searchBar.value}`, {mode: 'cors'})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else 
        throw new Error('That kind of gif might not exist!');
    })
    .then(response => img.src = response.data.images.original.url)
    .catch(error => {
        alert(error)
    });
});

*/