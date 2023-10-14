import"./scroll-anime-9cbf9c04.js";import{P as M,D as f,d as y,e as S}from"./pagination-4d1f29ea.js";const P=document.querySelector(".ingredient-modal"),$=document.querySelector(".backdrop"),I=document.querySelector("body"),k=document.getElementById("tui-pagination-container"),s=document.querySelector(".favorite-ingradients-list"),m=document.querySelector(".no-ingradients-wrapper"),v=new f,B={totalItems:0,itemsPerPage:6,page:1},c=new M(k,B);let r;document.addEventListener("DOMContentLoaded",t=>{let n=JSON.parse(localStorage.getItem("ingredients"))||[];n.length!==0&&(m.classList.add("hidden"),s.classList.remove("hidden"),r=c.createCardsPerPage(n),d(r[0],s),v.selectOpenModalButton(),s.addEventListener("click",b),c.changePageByClick(r,s,d,f))});s.addEventListener("click",t=>{if(t.target.classList.contains("remove-button")){const n=t.target.closest("li").id;let e=p("ingredients");e&&e.length>0&&(L("ingredients",n),y("ingredient"),e=p("ingredients"),r=c.createCardsPerPage(e),d(r[0],s),c.changePageByClick(r,s,d,f),m.classList.add("hidden"),v.selectOpenModalButton(),s.addEventListener("click",b)),e.length===0&&m.classList.remove("hidden")}});function d(t,n){c.hidePagination(6,k);let e="Non-Alcoholic";const o=t.map(a=>{const{title:i,description:l,alcohol:g,id:u}=a;return g.toLowerCase()==="yes"&&(e="Alcoholic"),`<li data-name="${i}" id="${u}">
    <h2 class="title">${i}</h2>
      <p class="alcohol">${e}</p>
      <p class="description">${l}</p>
       <div class="buttons-container">
         <button type="button" data-name="${i}" class="read-more-button" data-first-modal-open>Read more</button>
         <button class="remove-button" type="button" data-name="${i}" > 
          <svg  class="trash-icon" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
       </div>
      </li>`}).join("");n.innerHTML=o}function L(t,n){try{const e=JSON.parse(localStorage.getItem(t));for(let o=0;o<e.length;o++){const{id:a}=e[o];n===a&&(e.splice(o,1),localStorage.setItem(t,JSON.stringify(e)))}}catch(e){console.log(e.message)}}function p(t){try{const n=localStorage.getItem(t);return JSON.parse(n)}catch{return S(),null}}function b(t){if(t.target.classList.contains("read-more-button")){console.log(t.target);const n=t.target.closest("li").id,o=p("ingredients").find(l=>l.id===n),a=[];a.push(o),F(a,P),v.selectCloseModalButton();const i=document.querySelector(".remove-button-modal");x(i)}}function F(t,n){n.innerHTML="";for(let e=0;e<t.length;e++){let{title:o,abv:a,type:i,country:l,flavour:g,description:u,id:C}=t[e];const h="Sorry, no data available.";a||(a=0),l||(l=h),u||(u=h),g||(g=h),i||(i=h);const w=` <button
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
    <p class="ingred-type">${i}</p>
    <p class="ingred-desc">${u}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${i}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${l}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${a} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${g}
        </p>
      </li>
    </ul>
    <button id="${C}" class="remove-button-modal" type="button" data-name="${o}" >Remove from favorite</button>
      <button class="back-button" type="button" data-first-modal-close>Back</button>
    `;n.insertAdjacentHTML("beforeend",w)}}function x(t){t.addEventListener("click",n=>{const e=n.target.id;let o=p("ingredients");$.classList.add("is-hidden"),I.classList.remove("modal-open"),o&&o.length>0&&(L("ingredients",e),o=p("ingredients"),r=c.createCardsPerPage(o),d(r[0],s),c.changePageByClick(r,s,d,f),m.classList.add("hidden"),y("ingredient"),v.selectOpenModalButton(),s.addEventListener("click",b)),o.length===0&&m.classList.remove("hidden")})}
