import"./scroll-anime-2b5c9651.js";import{P as S}from"./notiflix-notify-aio-c8531316.js";let n=[],g,b,r;const h=document.getElementById("tui-pagination-container"),a=document.querySelector(".favorite-ingradients-list"),f=document.querySelector(".no-ingradients-wrapper"),$={totalItems:0,itemsPerPage:6,page:1},l=new S(h,$);document.addEventListener("DOMContentLoaded",t=>{n=JSON.parse(localStorage.getItem("ingredients"))||[],n.length!==0&&(f.classList.add("hidden"),a.classList.remove("hidden")),I(),g=l.createCardsPerPage(n),c(g[0],a),l.changePageByClick(g,a,c)});a.addEventListener("click",P);function I(){r=document.querySelector(".ingradient-modal")}function P(t){if(!(t.target.nodeName!=="LI"||t.target.className!=="read-more-button")){if(t.srcElement.className==="remove-button"){p(t),c(l.createCardsPerPage(n)[0],a);return}k(t,r),r.querySelector(".back-button").addEventListener("click",E),r.querySelector(".remove-button").addEventListener("click",p),r.querySelector(".add-button").addEventListener("click",C)}}function k(t,e){T(n,e,t),e.classList.add("open")}function E(){N(r),c(l.createCardsPerPage(n)[0],a)}function N(t){t.classList.remove("open"),t.innerHTML=""}function p(t){t.target.classList.add("hidden"),t.target.nextElementSibling&&t.target.nextElementSibling.classList.remove("hidden");for(let e=0;e<n.length;e++){const{title:s}=n[e];t.target.dataset.name===s&&(n.splice(e,1),localStorage.setItem("ingredients",JSON.stringify(n)))}}function C(t){t.target.classList.add("hidden"),t.target.previousElementSibling.classList.remove("hidden"),n.push(b),localStorage.setItem("ingredients",JSON.stringify(n))}function c(t,e){t.length===0&&(f.classList.remove("hidden"),a.classList.add("hidden")),l.hidePagination(6,h),e.innerHTML="";let s="Non-Alcoholic";for(let i=0;i<t.length;i++){const{title:o,description:u,alcohol:d}=t[i];d.toLowerCase()==="yes"&&(s="Alcoholic");const m=`<li data-name="${o}">
    <h2 class="title">${o}</h2>
      <p class="alcohol">${s}</p>
      <p class="description">${u}</p>
       <div class="buttons-container">
         <button type="button" data-name="${o}" class="read-more-button">Read more</button>
         <button class="remove-button" type="button" data-name="${o}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="./img/sprite.svg#icon-trash"></use>
        </svg></button>
       </div>
      </li>`;e.insertAdjacentHTML("beforeend",m)}}function T(t,e,s){e.innerHTML="";for(let i=0;i<t.length;i++){const{title:o,abv:u,type:d,country:m,flavour:L,description:v}=t[i];if(s.target.dataset.name===o){b=t[i];const y=`<h2 class="title">${o}</h2>
      <p class="type">${d}</p>
      <div>
        <p class="description">${v}</p>
        <ul class="list">
          <li>Type: ${d}</li>
          <li>Country of origin: ${m}</li>
          <li>Alcohol by volume: ${u}%</li>
          <li> Flavour: ${L}</li>
        </ul>
      </div>
      <button class="remove-button" type="button" data-name="${o}" >Remove from favorite</button>
       <button class="add-button hidden" type="button" data-name="${o}" >Add tofavorite</button>
      <button class="back-button" type="button">Back</button>`;e.insertAdjacentHTML("beforeend",y)}}}
