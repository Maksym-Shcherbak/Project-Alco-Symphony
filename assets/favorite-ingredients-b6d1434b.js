import"./scroll-anime-88519c89.js";import{P as M,D as f,d as k,e as S}from"./pagination-6498ef43.js";const $=document.querySelector(".ingredient-modal"),I=document.querySelector(".backdrop"),B=document.querySelector("body"),y=document.getElementById("tui-pagination-container"),i=document.querySelector(".favorite-ingradients-list"),v=document.querySelector(".no-ingradients-wrapper"),p=new f,P={totalItems:0,itemsPerPage:6,page:1},g=new M(y,P);let l;document.addEventListener("DOMContentLoaded",e=>{let n=JSON.parse(localStorage.getItem("ingredients"))||[];n.length!==0&&(v.classList.add("hidden"),i.classList.remove("hidden")),l=g.createCardsPerPage(n),c(l[0],i),p.selectOpenModalButton(),i.addEventListener("click",h),g.changePageByClick(l,i,c,f)});i.addEventListener("click",e=>{if(e.target.classList.contains("remove-button")){const n=e.target.closest("li").id;L("ingredients",n);let t=b("ingredients");c(t,i),k(),t&&t.length>0?(l=g.createCardsPerPage(t),c(l[0],i),p.selectOpenModalButton(),i.addEventListener("click",h),g.changePageByClick(l,i,c,f),v.classList.add("hidden"),p.selectOpenModalButton(),i.addEventListener("click",h)):v.classList.remove("hidden")}});function c(e,n){g.hidePagination(6,y);let t="Non-Alcoholic";const o=e.map(a=>{const{title:s,description:r,alcohol:d,id:u}=a;return d.toLowerCase()==="yes"&&(t="Alcoholic"),`<li data-name="${s}" id="${u}">
    <h2 class="title">${s}</h2>
      <p class="alcohol">${t}</p>
      <p class="description">${r}</p>
       <div class="buttons-container">
         <button type="button" data-name="${s}" class="read-more-button" data-first-modal-open>Read more</button>
         <button class="remove-button" type="button" data-name="${s}" > 
          <svg  class="trash-icon" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
       </div>
      </li>`}).join("");n.innerHTML=o}function L(e,n){try{const t=JSON.parse(localStorage.getItem(e));for(let o=0;o<t.length;o++){const{id:a}=t[o];n===a&&(t.splice(o,1),localStorage.setItem(e,JSON.stringify(t)))}}catch(t){console.log(t.message)}}function b(e){try{const n=localStorage.getItem(e);return JSON.parse(n)}catch{return S(),null}}function h(e){if(e.target.classList.contains("read-more-button")){const n=e.target.closest("li").id,o=b("ingredients").find(r=>r.id===n),a=[];a.push(o),x(a,$),p.selectCloseModalButton();const s=document.querySelector(".remove-button-modal");F(s)}}function x(e,n){n.innerHTML="";for(let t=0;t<e.length;t++){let{title:o,abv:a,type:s,country:r,flavour:d,description:u,id:C}=e[t];const m="Sorry, no data available.";a||(a=0),r||(r=m),u||(u=m),d||(d=m),s||(s=m);const w=` <button
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
    <p class="ingred-desc">${u}</p>

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
          <span class="item-inner-title">Alcohol by volume: </span>${a} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${d}
        </p>
      </li>
    </ul>
    <button id="${C}" class="remove-button-modal" type="button" data-name="${o}" >Remove from favorite</button>
      <button class="back-button" type="button" data-first-modal-close>Back</button>
    `;n.insertAdjacentHTML("beforeend",w)}}function F(e){e.addEventListener("click",n=>{const t=n.target.id;L("ingredients",t);let o=b("ingredients");c(o,i),k(),p.selectOpenModalButton(),i.addEventListener("click",h),I.classList.add("is-hidden"),B.classList.remove("modal-open")})}
