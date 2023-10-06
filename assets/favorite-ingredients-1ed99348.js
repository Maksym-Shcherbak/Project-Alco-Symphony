import"./scroll-anime-88519c89.js";import{P as C,D as f,d as b,e as S}from"./pagination-6498ef43.js";const M=document.querySelector(".ingredient-modal"),$=document.querySelector(".backdrop"),I=document.querySelector("body"),y=document.getElementById("tui-pagination-container"),a=document.querySelector(".favorite-ingradients-list"),x=document.querySelector(".no-ingradients-wrapper"),p=new f,B={totalItems:0,itemsPerPage:6,page:1},g=new C(y,B);let m;document.addEventListener("DOMContentLoaded",t=>{let e=JSON.parse(localStorage.getItem("ingredients"))||[];e.length!==0&&(x.classList.add("hidden"),a.classList.remove("hidden")),m=g.createCardsPerPage(e),u(m[0],a),p.selectOpenModalButton(),a.addEventListener("click",v),g.changePageByClick(m,a,u,f)});a.addEventListener("click",t=>{if(t.target.classList.contains("remove-button")){const e=t.target.closest("li").id;k("ingredients",e);let n=h("ingredients");u(n,a),b(),p.selectOpenModalButton(),a.addEventListener("click",v)}});function u(t,e){g.hidePagination(6,y);let n="Non-Alcoholic";const o=t.map(s=>{const{title:i,description:r,alcohol:l,id:c}=s;return l.toLowerCase()==="yes"&&(n="Alcoholic"),`<li data-name="${i}" id="${c}">
    <h2 class="title">${i}</h2>
      <p class="alcohol">${n}</p>
      <p class="description">${r}</p>
       <div class="buttons-container">
         <button type="button" data-name="${i}" class="read-more-button" data-first-modal-open>Read more</button>
         <button class="remove-button" type="button" data-name="${i}" > 
          <svg  class="trash-icon" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
       </div>
      </li>`}).join("");e.innerHTML=o}function k(t,e){try{const n=JSON.parse(localStorage.getItem(t));for(let o=0;o<n.length;o++){const{id:s}=n[o];e===s&&(n.splice(o,1),localStorage.setItem(t,JSON.stringify(n)))}}catch(n){console.log(n.message)}}function h(t){try{const e=localStorage.getItem(t);return JSON.parse(e)}catch{return S(),null}}function v(t){if(t.target.classList.contains("read-more-button")){const e=t.target.closest("li").id,o=h("ingredients").find(r=>r.id===e),s=[];s.push(o),F(s,M),p.selectCloseModalButton();const i=document.querySelector(".remove-button-modal");E(i)}}function F(t,e){e.innerHTML="";for(let n=0;n<t.length;n++){let{title:o,abv:s,type:i,country:r,flavour:l,description:c,id:L}=t[n];const d="Sorry, no data available.";s||(s=0),r||(r=d),c||(c=d),l||(l=d),i||(i=d);const w=` <button
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
    <p class="ingred-desc">${c}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${i}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${r}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${s} %
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
    `;e.insertAdjacentHTML("beforeend",w)}}function E(t){t.addEventListener("click",e=>{const n=e.target.id;k("ingredients",n);let o=h("ingredients");u(o,a),b(),p.selectOpenModalButton(),a.addEventListener("click",v),$.classList.add("is-hidden"),I.classList.remove("modal-open")})}
