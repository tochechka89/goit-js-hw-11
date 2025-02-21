import{i as l,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=a=>a.reduce((t,{tags:s,webformatURL:i,largeImageURL:e,likes:r,views:n,comments:d,downloads:u})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${i}" alt="${s}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${u}</span>
        </div>
    </div>
</li>
    `,""),h="43997117-306e8cb8a0972afaf1f3fc80b",m="https://pixabay.com/api/",y=a=>{const t=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}/?${t}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})},o=document.querySelector(".gallery"),g=document.querySelector(".search-form"),c=document.querySelector(".loader");function L(a){a.preventDefault();const t=a.target.elements.searchKeyword.value.trim();if(o.innerHTML="",t==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});o.innerHTML="",c.classList.remove("is-hidden"),y(t).then(s=>{c.classList.add("is-hidden"),s.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(o.innerHTML=p(s.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250}))}).catch(s=>{console.log(s),c.classList.add("is-hidden")}).finally(()=>{a.target.reset()})}g.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
