import"./scroll-anime-2b5c9651.js";import{D as m,r as k}from"./createModalForCocktail-1d83f197.js";import{P as p,n as d}from"./notiflix-notify-aio-cb93d3ba.js";function s(t,e){const o=t.map(i=>`
        <li class="fav-cocktail-card" id="${i.id}">
        <div class="fav-cocktail-card-info">
          <div class="fav-cocktail-card-container">
            <img class="fav-cocktail-img" src="${i.img}" alt="${i.title}">
            </div>
            <h3 class="fav-cocktail-titile">${i.title}</h3>
            <p class="fav-cocktail-description">${i.text}</p>
          </div>
          <div class="fav-cocktails-btn">
            <button type="button" class="learn-more-btn cocktail-card-learn" data-first-modal-open>learn more</button>
            <button type="button" class="delete-btn" "aria-label="Remove from favorites">
              <svg class="delete-btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1601 14.25 14.7902 14.0048 15.2715C13.789 15.6948 13.4448 16.039 13.0215 16.2548C12.5402 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.039 4.21095 15.6948 3.99524 15.2715C3.75 14.7902 3.75 14.1601 3.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
          </div>
        </li>`).join("");e.innerHTML=o}const f=document.getElementById("tui-pagination-container");let a=null;const l=document.querySelector(".fav-cocktails-list"),h=new m,C=y();function y(){return window.innerWidth<768?5:7}const u={totalItems:0,itemsPerPage:6,visiblePages:C,page:1},n=new p(f,u);function g(t){a=n.createCardsPerPage(t),n.hidePagination(u.itemsPerPage,f),s(a[0],l),n.changePageByClick(a,l,s),h.selectOpenModalButton()}const b=()=>{d.Notify.info("The cocktail has been removed from your favorites cocktails!",{position:"right-top",cssAnimationDuration:800,cssAnimationStyle:"from-top",fontSize:"18px"})},S=()=>{d.Notify.failure("Ooops...Something went wrong!Please try again.",{position:"right-top",cssAnimationDuration:800,fontSize:"18px"})};document.querySelector(".fav-cocktails-list");let c=r("favorite");const v=document.querySelector(".not-found-cocktails-container"),P=document.querySelector(".fav-cocktails-list");function r(t){try{const e=localStorage.getItem(t);return JSON.parse(e)}catch{return S(),null}}c&&c.length>0&&(g(c),v.classList.add("visually-hidden"));P.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn")){const e=t.target.closest("li").id;let o=r("favorite");o&&o.length>0&&(k("favorite",e),o=r("favorite"),g(o),b()),o.length===0&&v.classList.remove("visually-hidden")}});
