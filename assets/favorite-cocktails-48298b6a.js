import"./scroll-anime-2b5c9651.js";import{D as d,s as k,e as m,r as C,d as p}from"./notification-d270b4a6.js";import{P as h}from"./notiflix-notify-aio-109a5578.js";function r(t,a){const e=t.map(o=>`
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
        </li>`).join("");a.innerHTML=e}const u=document.getElementById("tui-pagination-container");let i=null;const s=document.querySelector(".fav-cocktails-list"),y=new d,b=P();function P(){return window.innerWidth<768?5:7}const v={totalItems:0,itemsPerPage:6,visiblePages:b,page:1},n=new h(u,v);function f(t){i=n.createCardsPerPage(t),n.hidePagination(v.itemsPerPage,u),r(i[0],s),y.selectOpenModalButton(),n.changePageByClick(i,s,r,d,k)}document.querySelector(".fav-cocktails-list");let c=l("favorite");const g=document.querySelector(".not-found-cocktails-container"),F=document.querySelector(".fav-cocktails-list");function l(t){try{const a=localStorage.getItem(t);return JSON.parse(a)}catch{return m(),null}}c&&c.length>0&&(f(c),g.classList.add("visually-hidden"));F.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){const a=t.target.closest("li").id;let e=l("favorite");e&&e.length>0&&(C("favorite",a),e=l("favorite"),f(e),p()),e.length===0&&g.classList.remove("visually-hidden")}});
