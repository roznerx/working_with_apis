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
        const imgData = await response.json();
        img.src = imgData.data.images.original.url;
    }
    catch (error) {
        alert('That kind of gif might not exist!');
    }
});