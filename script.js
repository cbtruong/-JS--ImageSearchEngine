const accessKey="sb6mfKq-HK-HFzG-FuWLp8lRtCrvMURVUuMvCyHEACA";

const searchForm =document.getElementById("search-form");
const searchBox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");
const btnSearch=document.getElementById("btn-search");;

let keyword="";
let page=1;
async function searchImages() {
    keyword= searchBox.value;
    btnSearch.innerText="Loading ...";
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();

    const results= data.results;
    results.map((result)=>{
        const image= document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
    btnSearch.innerText="Search";
    showMoreBtn.innerText="Show more";

}

searchForm.addEventListener("submit",(e)=>{
    //e.preventDefault();
    btnSearch.innerText="Loading ...";
    e.preventDefault();
    searchResult.innerHTML="";
    page= 1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    showMoreBtn.innerText="Loading...";
    searchImages();
})