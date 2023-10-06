import"./scroll-anime-88519c89.js";import{s as p,r as u}from"./createModalForCocktail-4fac5448.js";import{P as C,D as v,e as h,d as f}from"./pagination-6498ef43.js";function l(t,a){const e=t.map(o=>`
        <li class="fav-cocktail-card" id="${o.id}">
        <div class="fav-cocktail-card-info">
          <div class="fav-cocktail-card-container">
            <img class="fav-cocktail-img" src="${o.img}" alt="${o.title}">
            </div>
            <h3 class="fav-cocktail-titile">${o.title}</h3>
            <p class="fav-cocktail-description">${o.text}</p>
          </div>
          <div class="fav-cocktails-btn">
            <button type="button" class="learn-more-btn cocktail-card-learn" data-first-modal-open>learn more</button>
            <button type="button" class="delete-btn" "aria-label="Remove from favorites">
              <svg class="delete-btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1601 14.25 14.7902 14.0048 15.2715C13.789 15.6948 13.4448 16.039 13.0215 16.2548C12.5402 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.039 4.21095 15.6948 3.99524 15.2715C3.75 14.7902 3.75 14.1601 3.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
          </div>
        </li>`).join("");a.innerHTML=e}const g=document.getElementById("tui-pagination-container");let n=null;const d=document.querySelector(".fav-cocktails-list"),y=new v,b=L();function L(){return window.innerWidth<768?5:7}const k={totalItems:0,itemsPerPage:6,visiblePages:b,page:1},c=new C(g,k);function s(t){n=c.createCardsPerPage(t),c.hidePagination(k.itemsPerPage,g),l(n[0],d),y.selectOpenModalButton(),c.changePageByClick(n,d,l,v,p)}let r=i("favorite");const m=document.querySelector(".not-found-cocktails-container"),P=document.querySelector(".fav-cocktails-list");function i(t){try{const a=localStorage.getItem(t);return JSON.parse(a)}catch{return h(),null}}r&&r.length>0&&(s(r),m.classList.add("visually-hidden"));P.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){const a=t.target.closest("li").id;let e=i("favorite");e&&e.length>0&&(u("favorite",a),e=i("favorite"),s(e),f()),e.length===0&&m.classList.remove("visually-hidden")}});const F=document.querySelector(".added");M(F);function M(t){t.addEventListener("click",a=>{const e=a.target.id;u("favorite",e);let o=i("favorite");s(o),f(),drinkifyModal.selectOpenModalButton(),backdrop.classList.add("is-hidden"),body.classList.remove("modal-open")})}