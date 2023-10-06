import"./scroll-anime-2d146266.js";import{P as $,D as f,d as b,e as I}from"./notification-4ac0f600.js";const M=document.querySelector(".ingredient-modal"),w=document.querySelector(".backdrop"),B=document.querySelector("body"),y=document.getElementById("tui-pagination-container"),a=document.querySelector(".favorite-ingradients-list"),x=document.querySelector(".no-ingradients-wrapper"),p=new f,E={totalItems:0,itemsPerPage:6,page:1},m=new $(y,E),O="./img/sprite.svg";let g;document.addEventListener("DOMContentLoaded",n=>{let e=JSON.parse(localStorage.getItem("ingredients"))||[];e.length!==0&&(x.classList.add("hidden"),a.classList.remove("hidden")),g=m.createCardsPerPage(e),u(g[0],a),p.selectOpenModalButton(),a.addEventListener("click",h),m.changePageByClick(g,a,u,f)});a.addEventListener("click",n=>{if(n.target.classList.contains("remove-button")){const e=n.target.closest("li").id;k("ingredients",e);let t=v("ingredients");u(t,a),b(),p.selectOpenModalButton(),a.addEventListener("click",h)}});function u(n,e){m.hidePagination(6,y);let t="Non-Alcoholic";const o=n.map(i=>{const{title:s,description:r,alcohol:l,id:c}=i;return l.toLowerCase()==="yes"&&(t="Alcoholic"),`<li data-name="${s}" id="${c}">
    <h2 class="title">${s}</h2>
      <p class="alcohol">${t}</p>
      <p class="description">${r}</p>
       <div class="buttons-container">
         <button type="button" data-name="${s}" class="read-more-button" data-first-modal-open>Read more</button>
         <button class="remove-button" type="button" data-name="${s}" > <svg class="trash-icon" width="18px" height="18px">
          <use href="${O}#icon-trash"></use>
        </svg></button>
       </div>
      </li>`}).join("");console.log(e),e.innerHTML=o}function k(n,e){try{const t=JSON.parse(localStorage.getItem(n));for(let o=0;o<t.length;o++){const{id:i}=t[o];e===i&&(t.splice(o,1),localStorage.setItem(n,JSON.stringify(t)))}}catch(t){console.log(t.message)}}function v(n){try{const e=localStorage.getItem(n);return JSON.parse(e)}catch{return I(),null}}function h(n){if(n.target.classList.contains("read-more-button")){const e=n.target.closest("li").id,t=v("ingredients");console.log(t);const o=t.find(r=>r.id===e),i=[];i.push(o),P(i,M),p.selectCloseModalButton();const s=document.querySelector(".remove-button-modal");C(s)}}function P(n,e){e.innerHTML="";for(let t=0;t<n.length;t++){let{title:o,abv:i,type:s,country:r,flavour:l,description:c,id:L}=n[t];const d="Sorry, no data available.";i||(i=0),r||(r=d),c||(c=d),l||(l=d),s||(s=d);const S=` <button
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
    <h3 class="ingred-header">${o}</h3>
    <p class="ingred-type">${s}</p>
    <p class="ingred-desc">${c}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${s}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${r}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${i} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${l}
        </p>
      </li>
    </ul>
    <button id="${L}" class="remove-button-modal" type="button" data-name="${o}" >Remove from favorite</button>
      <button class="back-button" type="button" data-first-modal-close>Back</button>
    `;e.insertAdjacentHTML("beforeend",S)}}function C(n){n.addEventListener("click",e=>{const t=e.target.id;k("ingredients",t);let o=v("ingredients");u(o,a),b(),p.selectOpenModalButton(),a.addEventListener("click",h),w.classList.add("is-hidden"),B.classList.remove("modal-open")})}
