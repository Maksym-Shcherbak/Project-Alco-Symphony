import{P as S}from"./darktheme-1880ef82.js";import"./notiflix-notify-aio-396b55a0.js";let n=[],m,f,l;const b=document.getElementById("tui-pagination-container"),a=document.querySelector(".favorite-ingradients-list"),h=document.querySelector(".no-ingradients-wrapper"),$={totalItems:0,itemsPerPage:6,page:1},c=new S(b,$);document.addEventListener("DOMContentLoaded",t=>{n=JSON.parse(localStorage.getItem("favorite-ingradients"))||[],n.length!==0&&(h.classList.add("hidden"),a.classList.remove("hidden")),k(),m=c.createCardsPerPage(n),d(m[0],a),c.changePageByClick(m,a,d)});a.addEventListener("click",I);function k(){l=document.querySelector(".ingradient-modal")}function I(t){if(t.target.nodeName!=="BUTTON"){console.log(t);return}if(t.srcElement.className==="remove-button"){p(t),d(c.createCardsPerPage(n)[0],a);return}E(t,l),l.querySelector(".back-button").addEventListener("click",P),l.querySelector(".remove-button").addEventListener("click",p),l.querySelector(".add-button").addEventListener("click",T)}function E(t,e){x(n,e,t),e.classList.add("open")}function P(){N(l),d(n,a)}function N(t){t.classList.remove("open"),t.innerHTML=""}function p(t){t.target.classList.add("hidden"),t.target.nextElementSibling&&t.target.nextElementSibling.classList.remove("hidden");for(let e=0;e<n.length;e++){const{title:s}=n[e];t.target.dataset.name===s&&(n.splice(e,1),localStorage.setItem("favorite-ingradients",JSON.stringify(n)))}}function T(t){t.target.classList.add("hidden"),t.target.previousElementSibling.classList.remove("hidden"),n.push(f),localStorage.setItem("favorite-ingradients",JSON.stringify(n))}function d(t,e){t.length===0&&(h.classList.remove("hidden"),a.classList.add("hidden")),c.hidePagination(6,b),e.innerHTML="";let s="Non-Alcoholic";for(let o=0;o<t.length;o++){const{title:i,description:u,alcohol:r}=t[o];r.toLowerCase()==="yes"&&(s="Alcoholic");const g=`<li>
    <h2 class="title">${i}</h2>
      <p class="alcohol">${s}</p>
      <p class="description">${u}</p>
       <div class="buttons-container">
         <button type="button" data-name="${i}" class="read-more-button">Read more</button>
         <button class="remove-button" type="button" data-name="${i}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="./img/sprite.svg#icon-trash"></use>
        </svg></button>
       </div>
      </li>`;e.insertAdjacentHTML("beforeend",g)}}function x(t,e,s){for(let o=0;o<t.length;o++){const{title:i,abv:u,type:r,country:g,flavour:v,description:L}=t[o];if(s.target.dataset.name===i){f=t[o];const y=`<h2 class="title">${i}</h2>
      <p class="type">${r}</p>
      <div>
        <p class="description">${L}</p>
        <ul class="list">
          <li>Type: ${r}</li>
          <li>Country of origin: ${g}</li>
          <li>Alcohol by volume: ${u}%</li>
          <li> Flavour: ${v}</li>
        </ul>
      </div>
      <button class="remove-button" type="button" data-name="${i}" >Remove from favorite</button>
       <button class="add-button hidden" type="button" data-name="${i}" >Add tofavorite</button>
      <button class="back-button" type="button">Back</button>`;e.insertAdjacentHTML("beforeend",y)}}}
