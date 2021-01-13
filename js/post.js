
const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams.get("id"));
    return urlParams.get("id")
}

const getPost = () => {
    const postId = getPostIdParam();
    const fetchdata = fetch(`${API_URL}${postId}`, {
        method:'GET'
    }).then((response) => {
        return response.json() 
    }).then((data) => {
        buildPost(data);
        console.log(data);
    })
}

const buildPost = (data) => {
    let date = new Date(parseInt(data.added_date)).toDateString();
    const postimage = `${API_BASE_URL}${data.post_image}`;
    document.querySelector("header").style.backgroundImage = `url(${postimage})`
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-date").innerText = `published on ${date}`;
    document.getElementById("individual-post-content").innerText = data.content;
    
}

