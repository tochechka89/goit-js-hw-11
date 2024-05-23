import{i as l,S as f}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=a=>a.reduce((t,{tags:r,webformatURL:o,largeImageURL:e,likes:s,views:n,comments:d,downloads:u})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
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
    `,""),h="43997117-306e8cb8a0972afaf1f3fc80b",m="https://pixabay.com/api/",y=a=>{const t=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}/?${t}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},i=document.querySelector(".gallery"),g=document.querySelector(".search-form"),c=document.querySelector(".loader");function L(a){a.preventDefault();const t=a.target.elements.searchKeyword.value.trim();if(i.innerHTML="",t==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",c.classList.remove("is-hidden"),y(t).then(r=>{c.classList.add("is-hidden"),r.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(i.innerHTML=p(r.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250}))}).catch(r=>{console.log(r),c.classList.add("is-hidden")}).finally(()=>{a.target.reset()})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
