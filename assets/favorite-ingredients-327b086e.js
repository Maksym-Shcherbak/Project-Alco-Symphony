import"./scroll-anime-2d146266.js";import{P as $}from"./notiflix-notify-aio-c8531316.js";let n=[],g,f;const l=document.querySelector(".ingredient-modal"),b=document.querySelector(".backdrop"),L=document.getElementById("tui-pagination-container"),i=document.querySelector(".favorite-ingradients-list"),v=document.querySelector(".no-ingradients-wrapper"),I={totalItems:0,itemsPerPage:6,page:1},r=new $(L,I),E="./img/sprite.svg";document.addEventListener("DOMContentLoaded",t=>{n=JSON.parse(localStorage.getItem("ingredients"))||[],n.length!==0&&(v.classList.add("hidden"),i.classList.remove("hidden")),g=r.createCardsPerPage(n),d(g[0],i),r.changePageByClick(g,i,d)});i.addEventListener("click",P);function P(t){if((t.target.nodeName==="LI"||t.target.classList.contains("read-more-button"))&&(w(t,l),l.querySelector(".back-button").addEventListener("click",x),l.querySelector(".remove-button").addEventListener("click",h),l.querySelector(".add-button").addEventListener("click",N),l.querySelector(".close-button").addEventListener("click",p),b.addEventListener("click",p)),t.srcElement.className==="remove-button"){h(t),d(r.createCardsPerPage(n)[0],i);return}}function w(t,e){console.log(t),M(n,e,t),b.classList.toggle("is-hidden")}function x(){p(l),d(r.createCardsPerPage(n)[0],i)}function p(t){b.classList.toggle("is-hidden"),t.innerHTML=""}function h(t){console.log(t),t.target.classList.add("hidden"),t.target.nextElementSibling&&t.target.nextElementSibling.classList.remove("hidden");for(let e=0;e<n.length;e++){const{title:a}=n[e];t.target.dataset.name===a&&(n.splice(e,1),localStorage.setItem("ingredients",JSON.stringify(n)))}}function N(t){t.target.classList.add("hidden"),t.target.previousElementSibling.classList.remove("hidden"),n.push(f),localStorage.setItem("ingredients",JSON.stringify(n))}function d(t,e){t.length===0&&(v.classList.remove("hidden"),i.classList.add("hidden")),r.hidePagination(6,L),e.innerHTML="";let a="Non-Alcoholic";for(let o=0;o<t.length;o++){const{title:s,description:u,alcohol:c}=t[o];c.toLowerCase()==="yes"&&(a="Alcoholic");const m=`<li data-name="${s}">
    <h2 class="title">${s}</h2>
      <p class="alcohol">${a}</p>
      <p class="description">${u}</p>
       <div class="buttons-container">
         <button type="button" data-name="${s}" class="read-more-button">Read more</button>
         <button class="remove-button" type="button" data-name="${s}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="${E}#icon-trash"></use>
        </svg></button>
       </div>
      </li>`;e.insertAdjacentHTML("beforeend",m)}}function M(t,e,a){e.innerHTML="";for(let o=0;o<t.length;o++){const{title:s,abv:u,type:c,country:m,flavour:k,description:y}=t[o];if(a.target.dataset.name===s){f=t[o];const S=` <button
      class="pop_up_modal_close_btn close-button"
      type="button"
      aria-label="close menu review"
      data-first-modal-close
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h3 class="ingred-header">${s}</h3>
    <p class="ingred-type">${c}</p>
    <p class="ingred-desc">${y}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${c}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${m}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${u} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${k}
        </p>
      </li>
    </ul>
    <button class="remove-button" type="button" data-name="${s}" >Remove from favorite</button>
       <button class="add-button hidden" type="button" data-name="${s}" >Add tofavorite</button>
      <button class="back-button" type="button">Back</button>
    `;e.insertAdjacentHTML("beforeend",S)}}}
