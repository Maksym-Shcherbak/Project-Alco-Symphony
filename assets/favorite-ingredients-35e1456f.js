import"./scroll-anime-9cbf9c04.js";import{P as M,D as f,d as k,e as P}from"./pagination-4d1f29ea.js";const $=document.querySelector(".ingredient-modal"),I=document.querySelector(".backdrop"),B=document.querySelector("body"),L=document.getElementById("tui-pagination-container"),s=document.querySelector(".favorite-ingradients-list"),p=document.querySelector(".no-ingradients-wrapper"),v=new f,F={totalItems:0,itemsPerPage:6,page:1},c=new M(L,F);let r,y=JSON.parse(localStorage.getItem("ingredients"))||[];y.length!==0&&(p.classList.add("hidden"),s.classList.remove("hidden"),r=c.createCardsPerPage(y),d(r[0],s),v.selectOpenModalButton(),s.addEventListener("click",b),c.changePageByClick(r,s,d,f));s.addEventListener("click",t=>{if(t.target.classList.contains("remove-button")){const o=t.target.closest("li").id;let e=m("ingredients");e&&e.length>0&&(C("ingredients",o),k("ingredient"),e=m("ingredients"),r=c.createCardsPerPage(e),d(r[0],s),c.changePageByClick(r,s,d,f),p.classList.add("hidden"),v.selectOpenModalButton(),s.addEventListener("click",b)),e.length===0&&p.classList.remove("hidden")}});function d(t,o){c.hidePagination(6,L);let e="Non-Alcoholic";const n=t.map(a=>{const{title:i,description:l,alcohol:g,id:u}=a;return g.toLowerCase()==="yes"&&(e="Alcoholic"),`<li data-name="${i}" id="${u}">
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
      </li>`}).join("");o.innerHTML=n}function C(t,o){try{const e=JSON.parse(localStorage.getItem(t));for(let n=0;n<e.length;n++){const{id:a}=e[n];o===a&&(e.splice(n,1),localStorage.setItem(t,JSON.stringify(e)))}}catch(e){console.log(e.message)}}function m(t){try{const o=localStorage.getItem(t);return JSON.parse(o)}catch{return P(),null}}function b(t){if(t.target.classList.contains("read-more-button")){console.log(t.target);const o=t.target.closest("li").id,n=m("ingredients").find(l=>l.id===o),a=[];a.push(n),x(a,$),v.selectCloseModalButton();const i=document.querySelector(".remove-button-modal");E(i)}}function x(t,o){o.innerHTML="";for(let e=0;e<t.length;e++){let{title:n,abv:a,type:i,country:l,flavour:g,description:u,id:w}=t[e];const h="Sorry, no data available.";a||(a=0),l||(l=h),u||(u=h),g||(g=h),i||(i=h);const S=` <button
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
    <h3 class="ingred-header">${n}</h3>
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
    <button id="${w}" class="remove-button-modal" type="button" data-name="${n}" >Remove from favorite</button>
      <button class="back-button" type="button" data-first-modal-close>Back</button>
    `;o.insertAdjacentHTML("beforeend",S)}}function E(t){t.addEventListener("click",o=>{const e=o.target.id;let n=m("ingredients");I.classList.add("is-hidden"),B.classList.remove("modal-open"),n&&n.length>0&&(C("ingredients",e),n=m("ingredients"),r=c.createCardsPerPage(n),d(r[0],s),c.changePageByClick(r,s,d,f),p.classList.add("hidden"),k("ingredient"),v.selectOpenModalButton(),s.addEventListener("click",b)),n.length===0&&p.classList.remove("hidden")})}
